import Link from 'next/link';
import cn from 'classnames';
import Image from 'next/image';
import readingTime from 'reading-time';

export default function BlogPostCard({ title, slug, thumbnailUrl, content }) {
  const time = readingTime(content);

  return (
    <Link href={`/blog/${slug}`}>
      <a
        className={cn(
          'grid grid-cols-1 content-start my-2 rounded-lg',
          'hover:outline outline-offset-8 outline-8  outline-gray-200 dark:outline-gray-800 overflow-hidden',
          'bg-white hover:bg-gray-50 dark:bg-gray-800',
          'transform hover:scale-[1.01] transition-all'
        )}
      >
        <div className="w-full">
          <Image
            alt="Thumbnail"
            height={60}
            width={100}
            src={thumbnailUrl}
            sizes="100vw"
            priority
          />
        </div>
        <div className="p-4">
          <h4 className="text-base md:text-lg text-gray-900 dark:text-gray-100 tracking-tight mb-8 min-h-[4rem]">
            {title}
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {time.text}
          </p>
        </div>
      </a>
    </Link>
  );
}
