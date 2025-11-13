export interface BlogMeta {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
}

export interface BlogPost extends BlogMeta {
  contentHtml: string;
}
