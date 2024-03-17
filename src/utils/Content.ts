import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

export interface IAppConfig {
  site_name: string,
  header_tile: string,
  caption: string;
  title: string,
  description: string,
  url: string,
  locale: string,
  author: string,
  pagination_size: number
}

export function getDataConfig(): IAppConfig {
  const configDir = join(process.cwd(), '_data/config.json');
  const file = fs.readFileSync(configDir, 'utf8');
  const cfg_dict = JSON.parse(file)
  return cfg_dict;
}

const postsDirectory = join(process.cwd(), '_posts');

export type PostItems = {
  [key: string]: string;
};

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  const items: PostItems = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug;
    }
    if (field === 'content') {
      items[field] = content;
    }

    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
