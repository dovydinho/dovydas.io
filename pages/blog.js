import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Suspense, useState } from "react";
import { WrappingContainer, BlogPostCard } from "@components/index";

export default function Blog({ posts }) {
  const [searchValue, setSearchValue] = useState("");

  posts.sort(
    (a, b) => new Date(b.frontMatter.date) - new Date(a.frontMatter.date)
  );

  console.log(posts);
  const filteredBlogPosts = posts.filter((post) =>
    post.frontMatter.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <WrappingContainer
      title="Blog – Dovydas Lapinskas"
      description="Thoughts of full-stack blockchain developer, cryptocurrency enthusiast, and digital creator."
    >
      <div className="flex flex-col items-start justify-center max-w-4xl mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight md:text-5xl">
          Blog
        </h1>
        <p className="mb-4 text-gray-600 dark:text-gray-400">
          {`There ${posts.length} articles published on my blog.
            Use the search below to filter by title.`}
        </p>
        <div className="relative w-full mb-4">
          <input
            aria-label="Search articles"
            type="text"
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search articles"
            className="block w-full px-4 py-2 border border-gray-200 rounded-md dark:border-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800"
          />
          <svg
            className="absolute w-5 h-5 text-gray-400 right-3 top-3 dark:text-gray-300"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        {/* {!searchValue && (
          <>
            <h3 className="mt-8 mb-4 text-2xl font-bold tracking-tight md:text-4xl">
              Pinned
            </h3>
            <div className="grid grid-cols-1 w-full md:grid-cols-3 gap-6 content-start">
              <BlogPostCard
                title={posts.slice(0, 3)[0].frontMatter.title}
                slug={posts.slice(0, 3)[0].slug}
                content={posts.slice(0, 3)[0].content}
              />
              <BlogPostCard
                title={posts.slice(0, 3)[1].frontMatter.title}
                slug={posts.slice(0, 3)[1].slug}
                content={posts.slice(0, 3)[0].content}
              />
              <BlogPostCard
                title={posts.slice(0, 3)[2].frontMatter.title}
                slug={posts.slice(0, 3)[2].slug}
                content={posts.slice(0, 3)[0].content}
              />
            </div>
          </>
        )} */}
        <Suspense fallback={null}>
          <h3 className="mt-8 mb-4 text-2xl font-bold tracking-tight md:text-4xl">
            {searchValue.length ? (
              <>
                Search for: <span className="text-gray-500">{searchValue}</span>
              </>
            ) : (
              "All Posts"
            )}
          </h3>
          {!filteredBlogPosts.length && (
            <p className="mb-4 text-gray-600 dark:text-gray-400">
              No posts found.
            </p>
          )}

          <div className="grid grid-cols-1 w-full sm:grid-cols-2 md:grid-cols-3 gap-6 content-start">
            {filteredBlogPosts.map((post, index) => (
              <BlogPostCard
                key={index}
                title={post.frontMatter.title}
                slug={post.slug}
                thumbnailUrl={post.frontMatter.thumbnailUrl}
                content={post.content}
              />
            ))}
          </div>
        </Suspense>
      </div>
    </WrappingContainer>
  );
}

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join("content/blog"));

  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("content/blog", filename),
      "utf-8"
    );
    const { data: frontMatter, content } = matter(markdownWithMeta);

    return {
      frontMatter,
      slug: filename.split(".")[0],
      content,
    };
  });

  return {
    props: {
      posts,
    },
  };
};
