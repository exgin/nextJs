import Layout from '../../components/layout';
import Date from '../../components/date';

import { getAllPostIds, getPostData } from '../../lib/posts';
import Link from 'next/link';
import Head from 'next/head';

export default function Post({ postData }) {
  return (
    <Layout home>
      <Head>
        <title>{postData.title}</title>
      </Head>

      {postData.title}
      <br />
      {postData.id}
      <br />
      <Date dateString={postData.date} />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();

  // 'paths' contain array of number paths in getAllPostIds()
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id); // Add await since getPostData() is async
  return {
    props: {
      postData,
    },
  };
}
