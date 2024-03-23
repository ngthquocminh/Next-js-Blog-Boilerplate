import React from 'react';

import { format } from 'date-fns';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { parseDateString } from '../utils/Common';
import { IAppConfig } from '../utils/Content';
import { addTrailingSlash } from '../utils/Url';

type IMetaProps = {
  title: string;
  description: string;
  canonical?: string;
  post?: {
    image: string;
    date: string;
    modified_date: string;
  };
  config: IAppConfig;
};

const Meta = (props: IMetaProps) => {
  const router = useRouter();
  return (
    <>
      <Head>
        <meta charSet="UTF-8" key="charset" />
        <meta name="Language" content="vi" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
          key="viewport"
        />
        <link
          rel="apple-touch-icon"
          href={`${router.basePath}/apple-touch-icon.png`}
          key="apple"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`${router.basePath}/favicon-32x32.png`}
          key="icon32"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${router.basePath}/favicon-16x16.png`}
          key="icon16"
        />
        <link
          rel="icon"
          href={`${router.basePath}/favicon.ico`}
          key="favicon"
        />
        <title>{`${props.title} | ${props.config.seo.site_name}`}</title>
        <meta
          name="description"
          content={
            props.description
              ? props.description
              : props.config.seo.site_description
          }
          key="description"
        />
        <meta name="author" content={props.config.seo.author} key="author" />
        {props.canonical && (
          <link rel="canonical" href={props.canonical} key="canonical" />
        )}
        <meta
          property="og:title"
          content={`${props.title} | ${props.config.seo.site_name}`}
          key="og:title"
        />
        <meta
          property="og:description"
          content={
            props.description
              ? props.description
              : props.config.seo.site_description
          }
          key="og:description"
        />
        <meta property="og:locale" content={'vi'} key="og:locale" />
        <meta
          property="og:site_name"
          content={props.config.seo.site_name}
          key="og:site_name"
        />
        {props.post && (
          <>
            <meta property="og:type" content="article" key="og:type" />
            <meta
              property="og:image"
              content={`${props.config.seo.url}${router.basePath}${props.post.image}`}
              key="og:image"
            />
            <meta
              name="twitter:card"
              content="summary_large_image"
              key="twitter:card"
            />
            <meta
              property="article:published_time"
              content={format(parseDateString(props.post.date), 'LLL d, yyyy')}
              key="article:published_time"
            />
            <meta
              property="article:modified_time"
              content={format(parseDateString(props.post.date), 'LLL d, yyyy')}
              key="article:modified_time"
            />
            <script
              type="application/ld+json"
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{
                __html: `
          {
            "description": "${
              props.description
                ? props.description
                : props.config.header.description
            }",
            "author": {
              "@type": "Person",
              "name": "${props.config.seo.author}"
            },
            "@type": "BlogPosting",
            "url": "${props.config.seo.url}${router.basePath}${addTrailingSlash(
                  router.asPath
                )}",
            "publisher": {
              "@type": "Organization",
              "logo": {
                "@type": "ImageObject",
                "url": "${props.config.seo.url}${
                  router.basePath
                }/assets/images/logo.png"
              },
              "name": "${props.config.seo.author}"
            },
            "headline": "${props.title} | ${props.config.seo.site_name}",
            "image": ["${props.config.seo.url}${router.basePath}${
                  props.post.image
                }"],
            "datePublished": "${parseDateString(
              props.post.date
            ).toISOString()}",
            "dateModified": "${format(
              parseDateString(props.post.date),
              'LLL d, yyyy'
            )}",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "${props.config.seo.url}${
                  router.basePath
                }${addTrailingSlash(router.asPath)}"
            },
            "@context": "http://schema.org"
          }`,
              }}
              key="ldjson"
            />
          </>
        )}
      </Head>
    </>
  );
};

// export const getStaticProps: GetStaticProps<IAppConfig> = async () => {
//   const ccfig = getDataConfig();
//   return {
//     ccfig
//   }
// }

export { Meta };
