import React from 'react';
import { GetStaticProps } from 'next';
import { BlogGallery, IBlogGalleryProps } from '../blog/BlogGallery';
import { Meta } from '../layout/Meta';
import { IPaginationProps } from '../pagination/Pagination';
import { Main } from '../templates/Main';
import { getAllPosts, getDataConfig } from '../utils/Content';

const Blogs = (props: IBlogGalleryProps) => {
  return (
    <Main
      config={props.config}
      meta={
        <Meta
          title="TN7 Solutions - Giải pháp định cư Canada hoặc Hoa Kỳ qua du học hoặc đầu tư"
          description={props.config.description}
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

export const getStaticProps: GetStaticProps<IBlogGalleryProps> = async () => {
  const posts = getAllPosts(['title', 'date', 'slug']);
  const pagination: IPaginationProps = {};
  const config = getDataConfig();
  if (posts.length > config.pagination_size) {
    pagination.next = '/page2';
  }

  return {
    props: {
      posts: posts.slice(0, config.pagination_size),
      pagination,
      config: config,
    },
  };
};

export default Blogs;
