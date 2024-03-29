import React from 'react';

import type { GetServerSideProps } from 'next';

import { BlogGallery, IBlogGalleryProps } from '../blog/BlogGallery';
import { Meta } from '../layout/Meta';
import { IPaginationProps } from '../pagination/Pagination';
import { Main } from '../templates/Main';
import { getAllPosts, getDataConfig } from '../utils/Content';

const paginationSize = 10;

const Blogs = (props: IBlogGalleryProps) => {
  return (
    <Main
      config={props.config}
      meta={
        <Meta
          title="Giải pháp định cư Canada hoặc Hoa Kỳ qua du học hoặc đầu tư"
          description={props.config.header.description}
          config={props.config}
        />
      }
    >
      <BlogGallery
        posts={props.posts}
        pagination={props.pagination}
        config={props.config}
      />
    </Main>
  );
};

export const getServerSideProps: GetServerSideProps<
  IBlogGalleryProps
> = async () => {
  const posts = getAllPosts(['title', 'date', 'slug', 'image', 'description']);
  console.log('>>>>>>>> Total posts', posts.length);
  const pagination: IPaginationProps = {};
  const config = getDataConfig();
  if (posts.length > paginationSize) {
    pagination.next = '/page-2';
  }

  return {
    props: {
      posts: posts.slice(0, paginationSize),
      pagination,
      config,
    },
  };
};

export default Blogs;
