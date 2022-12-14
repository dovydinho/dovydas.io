import Link from 'next/link';
import Image from 'next/image';
import { Suspense } from 'react';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import readingTime from 'reading-time';
import Moment from 'react-moment';

import styles from '@styles/BlogPost.module.css';
import {
  WrappingContainer,
  ImageCaption,
  InformationalText
} from '@components/index';

const components = { SyntaxHighlighter, ImageCaption, InformationalText };

export default function SingleBlogPage({
  frontMatter: { title, thumbnailUrl, date },
  slug,
  mdxSource,
  content
}) {
  const time = readingTime(content);
  const dateFormatted = new Date(date);

  return (
    <Suspense fallback={null}>
      <WrappingContainer>
        <section className="flex flex-col justify-center items-start max-w-4xl border-gray-200 dark:border-gray-700 pb-16">
          <div className="flex flex-col gap-4 sm:flex-row w-full">
            <div className="w-full sm:w-1/2 order-last sm:order-first">
              <div className="grid h-full content-center">
                <div className="text-gray-500 text-sm">
                  <Link href="/blog">
                    <a className="hover:underline">blog</a>
                  </Link>
                  /{slug}
                </div>
                <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 text-black dark:text-white">
                  {title}
                </h3>
                <div className="mb-6 text-gray-500 text-sm">
                  Published <Moment fromNow>{dateFormatted}</Moment> &bull;{' '}
                  <span className="font-medium">{time.text}</span>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2">
              <div className="w-full">
                <Image
                  alt="Thumbnail"
                  height={60}
                  width={100}
                  src={thumbnailUrl}
                  sizes="100vw"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
          <div className="flex w-full pt-8">
            <div className="invisible sm:visible w-0 sm:w-1/6">
              <div className="w-full grid justify-items-center space-y-8">
                <p className="text-gray-500 font-light">Share this</p>
                <Link href="https://www.linkedin.com/in/dovydas-lapinskas">
                  <a target="_blank">
                    <svg
                      className="w-6 h-6 text-blue-500 fill-current transform hover:scale-[1.25] transition-all"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                    </svg>
                  </a>
                </Link>
                <Link href="https://twitter.com/dovydinho">
                  <a target="_blank">
                    <svg
                      className="w-6 h-6 text-blue-300 fill-current transform hover:scale-[1.25] transition-all"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </a>
                </Link>
              </div>
            </div>
            <div className="w-full sm:w-5/6">
              <div className={styles.mdxContent}>
                <MDXRemote {...mdxSource} components={components} />
              </div>
              <div className="w-full grid justify-items-center mt-8">
                <p className="pb-4 text-gray-500 font-light">Share this</p>
                <div className="flex gap-8">
                  <Link href="https://www.linkedin.com/in/dovydas-lapinskas">
                    <a target="_blank">
                      <svg
                        className="w-6 h-6 text-blue-500 fill-current transform hover:scale-[1.25] transition-all"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                      </svg>
                    </a>
                  </Link>
                  <Link href="https://twitter.com/dovydinho">
                    <a target="_blank">
                      <svg
                        className="w-6 h-6 text-blue-300 fill-current transform hover:scale-[1.25] transition-all"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </WrappingContainer>
    </Suspense>
  );
}

const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join('content/blog'));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.mdx', '')
    }
  }));

  return {
    paths,
    fallback: false
  };
};

const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithMeta = fs.readFileSync(
    path.join('content/blog', slug + '.mdx'),
    'utf-8'
  );

  const { data: frontMatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content);

  return {
    props: {
      frontMatter,
      slug,
      mdxSource,
      content
    }
  };
};

export { getStaticProps, getStaticPaths };
