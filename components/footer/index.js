import Link from 'next/link';

const ExternalLink = ({ href, children }) => (
  <a
    className="text-gray-500 hover:text-gray-600 transition"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-start max-w-4xl mx-auto w-full mb-8">
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
      <div className="mx-auto w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
        <div className="flex flex-col space-y-4">
          <Link href="/about">
            <a className="text-gray-500 hover:text-gray-600 transition">
              About Dovydas
            </a>
          </Link>
          <Link href="/my-workspace">
            <a className="text-gray-500 hover:text-gray-600 transition">
              My Workspace
            </a>
          </Link>
        </div>
        <div className="flex flex-col space-y-4">
          <ExternalLink href="https://twitter.com/dovydinho">
            Twitter
          </ExternalLink>
          <ExternalLink href="https://github.com/dovydinho">
            GitHub
          </ExternalLink>
        </div>
        <div className="flex flex-col space-y-4">
          <Link href="/showcase">
            <a className="text-gray-500 hover:text-gray-600 transition">
              Showcase
            </a>
          </Link>
          <Link href="/blog">
            <a className="text-gray-500 hover:text-gray-600 transition">Blog</a>
          </Link>
        </div>
      </div>
    </footer>
  );
}
