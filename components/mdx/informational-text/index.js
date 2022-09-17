import { InformationCircleIcon } from '@heroicons/react/outline';
import cn from 'classnames';

export default function InformationalText({ children }) {
  return (
    <>
      <div className="flex flex-wrap w-full p-4 rounded-lg my-4 bg-indigo-100 dark:bg-indigo-900 text-indigo-900 dark:text-indigo-100 overflow-auto">
        <InformationCircleIcon className="my-auto w-6 h-6 mr-2 inline-block align-middle" />
        {children}
      </div>
    </>
  );
}
