import Head from 'next/head';
import styles from '../styles/Home.module.css';
import utilStyles from '../styles/utils.module.css';

import Link from 'next/link';

import Layout from '../components/layout';
import Date from '../components/date';

import { getSortedPostsData } from '../lib/posts';

export default function Home({ allPostsData }) {
  return (
    <div className={styles.container}>
      <Layout home>
        <Head>
          <title>DEEZ</title>
        </Head>
        <section className={utilStyles.headingMd}>
          <p>Sammy</p>
        </section>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Blog</h2>
          <ul className={utilStyles.list}>
            {allPostsData.map(({ id, date, title }) => (
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
                <br />
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>
              </li>
            ))}
          </ul>
        </section>
      </Layout>
    </div>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();

  // By returning inside a props object, we can use it in the Home componenet
  return {
    props: {
      allPostsData,
    },
  };
}
