import fs from 'fs';
import { join } from 'path';

import matter from 'gray-matter';

export type IPostEditorProps = {
  title: string;
  description: string;
  date?: string;
  modified_date?: string;
  image?: string;
  content: string;
  slug: string;
  status: number;
};

export interface IAppConfig {
  seo: IAppConfigSEO;
  header: IAppConfigHeader;
  contact: IAppConfigContact;
  footer: IAppConfigFooter;
  navbar: IAppConfigNavbar;
  blogs: IAppConfigBlog;
}
export interface IAppConfigSEO {
  site_name: string;
  site_title: string;
  site_description: string;
  url: string;
  author: string;
}
export interface IAppConfigHeader {
  title: string;
  description: string;
}

export interface IAppConfigLink {
  name: string;
  url: string;
}

export interface IAppConfigFooter {
  links: Array<IAppConfigLink>;
}

export interface IAppConfigNavbar {
  links: Array<IAppConfigLink>;
}

export interface IAppConfigBlog {
  slugs: Array<string>;
}

export interface IAppConfigContact {
  phone: string;
  email: string;
  address: string;
}

export function getDataConfig(): IAppConfig {
  const configDir = join(process.cwd(), '_data/config.json');
  const file = fs.readFileSync(configDir, 'utf8');
  const cfgDict = JSON.parse(file);
  return cfgDict;
}

const postsDirectory = join(process.cwd(), '_data/posts');

export type PostItems = {
  [key: string]: string;
};

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(
  slug: string,
  fields: string[] = [],
  onlyPublished = true
) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  let fileContents = '';
  try {
    fileContents = fs.readFileSync(fullPath, 'utf8');
  } catch (err) {
    return null;
  }
  const { data, content } = matter(fileContents);
  if (data.status !== 1 && onlyPublished) return null;

  const items: PostItems = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug;
    }
    if (field === 'content') {
      items[field] = content;
    }
    if (data[field] !== undefined || data[field] != null) {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllPosts(fields: string[] = [], onlyPublished = true) {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields, onlyPublished))
    .filter((p) => p !== null)
    // sort posts by date in descending order
    .sort((post1, post2) => {
      if (post1 && post2) return post1.date > post2.date ? -1 : 1;
      if (post1) return -1;
      return 1;
    });
  return posts;
}
