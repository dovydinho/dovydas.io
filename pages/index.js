import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Suspense } from 'react';
import {
  BlogPostCard,
  ProjectCard,
  WrappingContainer
} from '@components/index';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon, LinkIcon } from '@heroicons/react/outline';
import { Cursor, useTypewriter } from 'react-simple-typewriter';

export default function Home({ posts }) {
  const [text, count] = useTypewriter({
    words: ['long-term hire.', 'short-term hire.', 'contract-specific hire.'],
    loop: true,
    delaySpeed: 2000
  });
  return (
    <Suspense fallback={null}>
      <WrappingContainer>
        <section className="flex flex-col justify-center items-start max-w-4xl mx-auto">
          <div className="flex flex-col-reverse w-full sm:flex-row items-start mx-auto">
            <div className="sm:pr-8 w-full sm:w-4/5">
              <h1 className="text-4xl md:text-5xl font-bold flex">
                Dovydas Lapinskas
                <Link href="/about">
                  <a>
                    <LinkIcon className="w-5 h-5" />
                  </a>
                </Link>
              </h1>
              <p className="py-2">Software Engineer | Web3 Applications</p>
              <p className="text-gray-600 dark:text-gray-400 py-2">
                Building Web3 applications with Solidity. Contributing to
                Blockchain communities.
              </p>
              <p className="mb-16 font-bold">
                Available for <span>{text}</span>
                <Cursor cursorColor="orange" />
              </p>
            </div>
            <div className="relative w-[240px] h-[240px] mx-auto sm:w-[180px] sm:h-[180px] mb-8 sm:mb-auto">
              <div className="sm:hidden animate-pulse absolute flex flex-col items-center justify-center w-[272px] h-[272px] -m-4 border-8 z-40 border-gray-200 dark:border-gray-800 rounded-full" />
              <Image
                alt="Dovydas Lapinskas"
                height={176}
                width={176}
                src="/img/dovydas-lapinskas.png"
                sizes="30vw"
                priority
                className="rounded-full"
              />
            </div>
          </div>
        </section>

        <section className="sm:px-8 py-8 sm:-mx-4 rounded-3xl sm:bg-gray-200 sm:dark:bg-gray-800 sm:outline outline-offset-8 outline-8 outline-gray-200 dark:outline-gray-800">
          <h3 className="font-bold text-2xl md:text-4xl tracking-tight">
            Featured Web3 Project
          </h3>

          <ProjectCard
            title="Crowdfund"
            slug="https://crowdfund.dovydas.io"
            image="/img/blog/my-web3-app-overview-crowdfund/crowdfund-4.jpg"
            tags={['Ethereum', 'Next.js', 'Sanity', 'Hardhat']}
            description="Crowdfund app enables users to create projects and set weekly funding targets to be unlocked and distributed for project contributors evenly and transparently."
            network="Ethereum (Goerli Test Network)"
            contract="0xb465C6E71C8694846426A28f596D4c44D203F6bC"
            github="https://github.com/dovydinho/crowdfund"
          />

          <Link href="/showcase">
            <a className="flex mt-2 text-gray-600 dark:text-gray-400 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6">
              Showcase all projects
              <ArrowRightIcon className="w-6 h-6 ml-1" />
            </a>
          </Link>
        </section>

        <section className="py-12">
          <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4">
            Latest Posts
          </h3>
          <div className="grid grid-cols-1 w-full sm:grid-cols-2 md:grid-cols-3 gap-6">
            {posts.slice(0, 3).map((post, index) => (
              <BlogPostCard
                key={index}
                title={post.frontMatter.title}
                slug={post.slug}
                thumbnailUrl={post.frontMatter.thumbnailUrl}
                content={post.content}
              />
            ))}
          </div>
          <Link href="/blog">
            <a className="flex mt-8 text-gray-600 dark:text-gray-400 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6">
              See all posts
              <ArrowRightIcon className="w-6 h-6 ml-1" />
            </a>
          </Link>
        </section>
      </WrappingContainer>
    </Suspense>
  );
}

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join('content/blog'));

  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join('content/blog', filename),
      'utf-8'
    );
    const { data: frontMatter, content } = matter(markdownWithMeta);

    return {
      frontMatter,
      slug: filename.split('.')[0],
      content
    };
  });

  posts.sort(
    (a, b) => new Date(b.frontMatter.date) - new Date(a.frontMatter.date)
  );

  return {
    props: {
      posts
    }
  };
};
