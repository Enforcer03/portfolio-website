const FRONTMATTER_REGEX = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/;

export interface FrontMatterResult {
  data: Record<string, string>;
  content: string;
}

export const parseFrontMatter = (raw: string): FrontMatterResult => {
  const match = raw.match(FRONTMATTER_REGEX);

  if (!match) {
    return {data: {}, content: raw.trim()};
  }

  const [, frontMatterBlock = ''] = match;
  const content = raw.slice(match[0].length).trim();

  const data: Record<string, string> = {};
  frontMatterBlock.split('\n').forEach(line => {
    const trimmed = line.trim();

    if (!trimmed || trimmed.startsWith('#')) {
      return;
    }

    const separatorIndex = trimmed.indexOf(':');

    if (separatorIndex === -1) {
      return;
    }

    const key = trimmed.slice(0, separatorIndex).trim();
    const value = trimmed.slice(separatorIndex + 1).trim().replace(/^"(.*)"$/, '$1');
    data[key] = value;
  });

  return {data, content};
};

const formatInline = (text: string): string => {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/`([^`]+)`/g, '<code>$1</code>');
};

export const markdownToHtml = (markdown: string): string => {
  const lines = markdown.split(/\r?\n/);
  const html: string[] = [];
  let listItems: string[] = [];
  let paragraphBuffer: string[] = [];

  const flushList = () => {
    if (!listItems.length) {
      return;
    }
    const listHtml = listItems.map(item => `<li>${item}</li>`).join('');
    html.push(`<ul>${listHtml}</ul>`);
    listItems = [];
  };

  const flushParagraph = () => {
    if (!paragraphBuffer.length) {
      return;
    }
    html.push(`<p>${formatInline(paragraphBuffer.join(' '))}</p>`);
    paragraphBuffer = [];
  };

  lines.forEach(line => {
    const trimmed = line.trim();

    if (!trimmed) {
      flushList();
      flushParagraph();
      return;
    }

    if (/^#{1,6}\s/.test(trimmed)) {
      flushList();
      flushParagraph();
      const level = trimmed.match(/^#{1,6}/)?.[0].length ?? 1;
      const tag = `h${level}`;
      const text = trimmed.replace(/^#{1,6}\s/, '');
      html.push(`<${tag}>${formatInline(text)}</${tag}>`);
      return;
    }

    if (trimmed.startsWith('- ')) {
      flushParagraph();
      listItems.push(formatInline(trimmed.slice(2)));
      return;
    }

    paragraphBuffer.push(trimmed);
  });

  flushList();
  flushParagraph();

  return html.join('\n');
};
