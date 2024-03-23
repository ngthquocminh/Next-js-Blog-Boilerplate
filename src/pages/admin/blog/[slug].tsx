import React from 'react';

import { GetStaticPaths, GetStaticProps } from 'next';

import BlogEditor2 from '../../../admin/components/BlogEditor2';
import {
  getAllPosts,
  getPostBySlug,
  IPostEditorProps,
} from '../../../utils/Content';

type IPostUrl = {
  slug: string;
};

const blogEditing = (props: IPostEditorProps) => {
  return <BlogEditor2 {...props}></BlogEditor2>;
};

export const getStaticPaths: GetStaticPaths<IPostUrl> = async () => {
  const posts = getAllPosts(['slug'], false);

  return {
    paths: posts.map((post) => ({
      params: {
        slug: post?.slug ?? '',
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<
  IPostEditorProps,
  IPostUrl
> = async ({ params }) => {
  const post = getPostBySlug(
    params!.slug,
    [
      'title',
      'description',
      'date',
      'modified_date',
      'image',
      'content',
      'slug',
      'status',
    ],
    false
  );

  return {
    props: {
      title: post?.title ?? '',
      description: post?.description ?? '',
      date: post?.date ?? '',
      modified_date: post?.modified_date ?? '',
      image: post?.image ?? '',
      content: post?.content ?? '',
      slug: params?.slug ?? '',
      status: parseInt(post?.status ?? '0', 2),
    },
  };
};

export default blogEditing;
