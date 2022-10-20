import Link from 'next/link';
import Image from 'next/image';
import cn from 'classnames';

export default function ProjectCard({
  title,
  slug,
  image,
  tags,
  description,
  network,
  contract,
  github
}) {
  return (
    <div className="py-6">
      <div
        className={cn(
          'flex w-full overflow-hidden transform hover:scale-[1.01] transition-all rounded-xl',
          'hover:bg-gray-50 hover:outline outline-8 outline-offset-8 outline-gray-50',
          'dark:outline-gray-700 dark:hover:bg-gray-700',
          'flex-col md:flex-row'
        )}
      >
        <div className="w-full md:w-2/5">
          <Link href={slug}>
            <a target="_blank">
              <Image
                alt="Thumbnail"
                height={100}
                width={100}
                src={image}
                sizes="25vw"
                priority
              />
            </a>
          </Link>
        </div>
        <div className="w-full md:w-3/5 px-0 sm:px-6 py-3">
          <div>
            <Link href={slug}>
              <a className="flex text-2xl font-bold" target="_blank">
                {title}
              </a>
            </Link>
            <div className="flex w-full mt-2">
              {tags.length > 0
                ? tags.map((tag, index) => {
                    return (
                      <span
                        key={index}
                        className="inline-block bg-gray-50 dark:bg-gray-700 hover:dark:bg-gray-700 rounded-full px-3 py-1 text-sm font-bold text-gray-700 dark:text-gray-300 mr-2 mb-2"
                      >
                        {tag}
                      </span>
                    );
                  })
                : null}
            </div>
            <p className="py-8">{description}</p>
            <p className="text-sm pb-2">
              Network: <b className="font-bold">{network}</b>
            </p>
            <p className="text-sm pb-2">
              Contract:{' '}
              <Link href={`https://goerli.etherscan.io/address/${contract}`}>
                <a className="font-bold hover:underline" target="_blank">
                  {contract.slice(2, 6) + `-` + contract.slice(38, 42)}
                </a>
              </Link>
            </p>
            <br />
            <div className="flex flex-wrap gap-2">
              <Link href={github}>
                <a target="_blank">
                  <button
                    className={cn(
                      'bg-gray-700 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded',
                      'transform hover:scale-[1.1] transition-all'
                    )}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      role="img"
                      className="w-5"
                      preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 24 24"
                    >
                      <g fill="none">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"
                          fill="currentColor"
                        />
                      </g>
                    </svg>
                  </button>
                </a>
              </Link>
              <Link href={slug}>
                <a target="_blank">
                  <button
                    className={cn(
                      'bg-gradient-to-r from-indigo-500 to-pink-500 hover:from-indigo-600 hover:to-pink-600 text-gray-100',
                      'dark:from-indigo-900 dark:to-pink-600 dark:hover:from-indigo-800 dark:hover:to-pink-500',
                      'shadow-lg rounded-lg px-12 py-2 text-sm font-bold'
                    )}
                  >
                    Preview
                  </button>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
