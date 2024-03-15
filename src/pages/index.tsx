import React from 'react';

import { GetStaticProps } from 'next';

import { BlogGallery, IBlogGalleryProps } from '../blog/BlogGallery';
import { Meta } from '../layout/Meta';
import { IPaginationProps } from '../pagination/Pagination';
import { Main } from '../templates/Main';
// import { dataConfig } from '../utils/AppConfig';
import { getAllPosts, getDataConfig } from '../utils/Content';

const Index = (props: IBlogGalleryProps) => {
  return (
    <Main
      meta={
        <Meta
          title="Made with Next.js, TypeScript, ESLint, Prettier, PostCSS, Tailwind CSS"
          description={props.dataConfig.description}
        />
      }
    >
      <BlogGallery
        posts={props.posts}
        pagination={props.pagination}
        dataConfig={props.dataConfig}
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
      dataConfig: config,
    },
  };
};

export default Index;
