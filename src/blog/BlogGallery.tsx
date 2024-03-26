import React from 'react';

import { format } from 'date-fns';
import Link from 'next/link';

import { Pagination, IPaginationProps } from '../pagination/Pagination';
import { parseDateString } from '../utils/Common';
import { IAppConfig, PostItems } from '../utils/Content';
// import BlogCard from './BlogCard';

export type IBlogGalleryProps = {
  posts: PostItems[];
  pagination: IPaginationProps;
  config: IAppConfig;
};

const BlogGallery = (props: IBlogGalleryProps) => {
  return (
    <>
      <h2 className="mx-auto max-w-screen-lg text-3xl font-bold text-center">
        Bài viết
      </h2>
      <div className="pt-20 max-w-screen-lg mx-auto grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {props.posts.map((post) => (
          <Link
            rel="noopener noreferrer"
            href="/blogs/[slug]"
            as={`/blogs/${post.slug}`}
            key={post.slug}
          >
            <a className="rounded max-w-sm mx-auto group hover:no-underline focus:no-underline shadow-md duration-300 ease-in-out hover:shadow-xl">
              <img
                role="presentation"
                className="object-cover w-full rounded h-44 dark:bg-gray-500"
                src={post.image}
                alt="blog"
              />
              <div className="p-6 space-y-2">
                <h3 className="text-xl font-semibold group-hover:underline group-focus:underline">
                  {post.title}
                </h3>
                <span className="text-xs dark:text-gray-600">
                  {format(new Date(parseDateString(post.date)), 'LLL d, yyyy')}
                </span>
                <p className="text-base text-gray-700">{post.description}</p>
              </div>
            </a>
          </Link>
        ))}
      </div>
      <section className="dark:bg-gray-800 dark:text-gray-100"></section>
      <Pagination
        previous={props.pagination.previous}
        next={props.pagination.next}
      />
    </>
  );
};

export { BlogGallery };
