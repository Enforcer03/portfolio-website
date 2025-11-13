import fs from 'fs';
import path from 'path';

import {BlogMeta, BlogPost} from '../types/blog';
import {markdownToHtml, parseFrontMatter} from './markdown';

const BLOG_DIRECTORY = path.join(process.cwd(), 'content', 'blogs');

const ensureBlogDirectory = () => {
  if (!fs.existsSync(BLOG_DIRECTORY)) {
    fs.mkdirSync(BLOG_DIRECTORY, {recursive: true});
  }
};

const mapFrontMatterToMeta = (slug: string, data: Record<string, string>, body: string): BlogMeta => {
  const tags = data.tags
    ? data.tags
        .split(',')
        .map(tag => tag.trim())
        .filter(Boolean)
    : [];

  const excerpt = data.excerpt ?? body.split('\n').slice(0, 3).join(' ').slice(0, 220);

  return {
    slug,
    title: data.title ?? slug.replace(/-/g, ' '),
    date: data.date ?? new Date().toISOString(),
    excerpt,
    tags,
  };
};

export const getBlogSlugs = (): string[] => {
  ensureBlogDirectory();
  return fs
    .readdirSync(BLOG_DIRECTORY)
    .filter(file => file.endsWith('.md'))
    .map(file => file.replace(/\.md$/, ''));
};

export const getAllBlogsMeta = (): BlogMeta[] => {
  const posts = getBlogSlugs()
    .map(slug => {
      const fullPath = path.join(BLOG_DIRECTORY, `${slug}.md`);
      const raw = fs.readFileSync(fullPath, 'utf8');
      const {data, content} = parseFrontMatter(raw);
      return mapFrontMatterToMeta(slug, data, content);
    })
    .sort((a, b) => (a.date > b.date ? -1 : 1));

  return posts;
};

export const getBlogBySlug = (slug: string): BlogPost => {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = path.join(BLOG_DIRECTORY, `${realSlug}.md`);
  const raw = fs.readFileSync(fullPath, 'utf8');
  const {data, content} = parseFrontMatter(raw);
  const meta = mapFrontMatterToMeta(realSlug, data, content);
  const contentHtml = markdownToHtml(content);

  return {...meta, contentHtml};
};
