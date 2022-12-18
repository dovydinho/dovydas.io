import Link from 'next/link';
import { useState, useRef } from 'react';
import cn from 'classnames';
import { ArrowRightIcon, ExclamationIcon } from '@heroicons/react/outline';

export default function Subscribe() {
  const [message, setMessage] = useState(null);
  const inputEl = useRef(null);

  const subscribe = async (e) => {
    e.preventDefault();
    const email = inputEl.current.value;

    const res = await fetch(`/api/subscribe?email=${email}`, {
      method: 'POST'
    });

    const { error } = await res.json();
    if (error) {
      setMessage(error);
      return;
    }

    inputEl.current.value = '';
    setMessage(`Great! Please check your mailbox for confirmation.`);
  };

  return (
    <div
      className={cn(
        'rounded-lg p-6 my-4 w-full',
        'bg-gradient-to-r from-purple-200 dark:from-purple-900 via-cyan-200 dark:via-cyan-900 to-pink-200 dark:to-pink-900',
        'outline outline-8 outline-offset-8 outline-indigo-200 dark:outline-purple-900'
      )}
    >
      <p className="text-lg md:text-xl font-bold text-gray-900 dark:text-gray-100">
        Subscribe to the newsletter
      </p>
      <p className="my-1 text-gray-800 dark:text-gray-200">
        Get emails from me about web development, tech, and early access to new
        articles.
      </p>
      <form className="relative my-4" onSubmit={subscribe}>
        <input
          ref={inputEl}
          aria-label="Email for newsletter"
          placeholder="dovydaslapinskas@tutanota.com"
          type="email"
          autoComplete="email"
          required
          className={cn(
            'px-4 py-2 mt-1 block w-full rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 pr-32',
            'focus:outline-none focus:ring'
          )}
        />
        <button
          className={cn(
            'flex items-center justify-center absolute right-1 top-1 px-4 h-8 rounded-lg w-48',
            'bg-purple-200 dark:bg-purple-800',
            'hover:bg-purple-300 dark:hover:bg-purple-900'
          )}
          type="submit"
        >
          Subscribe
        </button>
      </form>

      <Link href="https://www.getrevue.co/profile/dovydinho">
        <a
          className="flex mt-8 text-gray-600 dark:text-gray-400 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6"
          target="_blank"
        >
          View all issues
          <ArrowRightIcon className="w-6 h-6 ml-1" />
        </a>
      </Link>
      <div>
        {message &&
          (message === 'Great! Please check your mailbox for confirmation.' ? (
            <div
              className="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800"
              role="alert"
            >
              {message}
            </div>
          ) : (
            <div
              className="flex p-4 mb-4 text-sm text-yellow-700 bg-yellow-100 rounded-lg dark:bg-yellow-200 dark:text-yellow-800"
              role="alert"
            >
              <ExclamationIcon className="w-5 h-5" />
              {message}
            </div>
          ))}
      </div>
    </div>
  );
}
