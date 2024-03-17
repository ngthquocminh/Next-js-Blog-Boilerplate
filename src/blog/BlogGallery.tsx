import React from 'react';

import { format } from 'date-fns';
import Link from 'next/link';

import { Pagination, IPaginationProps } from '../pagination/Pagination';
import { IAppConfig, PostItems } from '../utils/Content';

export type IBlogGalleryProps = {
  posts: PostItems[];
  pagination: IPaginationProps;
  config: IAppConfig;
};

const BlogGallery = (props: IBlogGalleryProps) => (
  <>
    <div className="pt-20 max-w-screen-lg mx-auto grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {props.posts.map((elt) => (
        <Link href="/posts/[slug]" as={`/posts/${elt.slug}`} key={elt.slug}>
          <a
            rel="noopener noreferrer"
            className="rounded max-w-sm mx-auto group hover:no-underline focus:no-underline shadow-md duration-300 ease-in-out hover:shadow-xl"
          >
            <img
              role="presentation"
              className="object-cover w-full rounded h-44 dark:bg-gray-500"
              src="https://source.unsplash.com/random/480x360?1"
              alt="blog"
            />
            <div className="p-6 space-y-2">
              <h3 className="text-xl font-semibold group-hover:underline group-focus:underline">
                {elt.title}
              </h3>
              <span className="text-xs dark:text-gray-400">
                {format(new Date(elt.date), 'LLL d, yyyy')}
              </span>
              <p className="text-base text-gray-700">
                1Mei ex aliquid eleifend forensibus, quo ad dicta apeirian
                neglegentur, ex has tantas percipit perfecto. At per tempor
                albucius perfecto, ei probatus consulatu patrioque mea, ei
                vocent delicata indoctum pri.
              </p>
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

export { BlogGallery };
