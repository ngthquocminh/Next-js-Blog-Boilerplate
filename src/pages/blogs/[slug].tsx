import React from 'react';

import { format } from 'date-fns';
import { GetServerSideProps } from 'next';

import { Content } from '../../content/Content';
import { Meta } from '../../layout/Meta';
import { Main } from '../../templates/Main';
import { imageKitExtract, parseDateString } from '../../utils/Common';
import { IAppConfig, getDataConfig, getPostBySlug } from '../../utils/Content';

type IPostUrl = {
  slug: string;
};

type IPostProps = {
  title: string;
  description: string;
  date: string;
  modified_date: string;
  image: string;
  content: string;
  config: IAppConfig;
};

const DisplayPost = (props: IPostProps) => (
  <Main
    config={props.config}
    meta={
      <Meta
        title={props.title}
        description={props.description}
        post={{
          image: props.image,
          date: props.date,
          modified_date: props.modified_date,
        }}
        config={props.config}
      />
    }
  >
    <div className="max-w-screen-lg mx-auto pb-36">
      <img
        alt={props.title}
        src={imageKitExtract(props.image)?.url}
        className="w-full"
      />
      <h1 className="text-center font-bold text-3xl text-gray-900 mt-10">
        {props.title}
      </h1>
      <div className="text-center text-sm mb-8">
        {format(new Date(parseDateString(props.date)), 'LLL d, yyyy')}
      </div>
      <Content>
        <div
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: props.content }}
        />
      </Content>
    </div>
  </Main>
);

export const getServerSideProps: GetServerSideProps<
  IPostProps,
  IPostUrl
> = async ({ params }) => {
  const post = getPostBySlug(params!.slug, [
    'title',
    'description',
    'date',
    'modified_date',
    'image',
    'content',
    'slug',
  ]);

  if (!post) {
    return {
      notFound: true,
    };
  }

  const config = getDataConfig();

  return {
    props: {
      title: post?.title ?? '',
      description: post?.description ?? '',
      date: post?.date ?? '',
      modified_date: post?.modified_date ?? '',
      image: post?.image ?? '',
      content: post?.content ?? '',
      config,
    },
  };
};

export default DisplayPost;
