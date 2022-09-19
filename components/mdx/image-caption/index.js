import Image from 'next/image';
import cn from 'classnames';
import { useEffect, useState } from 'react';
import { XCircleIcon } from '@heroicons/react/outline';

export default function ImageCaption({ url, width, height, caption }) {
  const [popupImage, setPopupImage] = useState(false);

  useEffect(() => {
    const keyDownHandler = (e) => {
      if (e.code === 'Escape') {
        setPopupImage(false);
      }
    };
    const mouseClickHandler = (e) => {
      if (e) {
        setPopupImage(false);
      }
    };

    document.addEventListener('keydown', keyDownHandler);
    document.addEventListener('mousedown', mouseClickHandler);

    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  }, []);

  return (
    <>
      <div className={cn('grid justify-items-center mt-6 mb-4')}>
        <div className="flex outline outline-8 outline-offset-8 outline-gray-200 dark:outline-gray-800 rounded-xl">
          <a onClick={() => setPopupImage(true)}>
            <Image
              src={url}
              alt={caption}
              width={width}
              height={height}
              placeholder="blur"
              blurDataURL="/img/frontpage.png"
              className={cn('object-cover rounded-xl')}
            />
          </a>
        </div>
      </div>
      <p className="text-sm italic text-center">{caption}</p>
      <div
        className={`${
          !popupImage
            ? 'hidden'
            : 'fixed top-0 left-0 z-10 flex w-full h-full bg-black/50'
        }`}
      >
        <div className="m-auto">
          <a
            onClick={() => setPopupImage(false)}
            className="absolute z-10 left-1/2 -mt-5 rounded-full w-12 h-12 bg-gray-100 dark:bg-gray-900"
          >
            <XCircleIcon className="w-12 h-12 text-pink-500/50  hover:text-pink-500 hover:scale-125 duration-150" />
          </a>
          <a className="relative" onClick={() => setPopupImage(false)}>
            <Image
              src={url}
              alt={caption}
              width={1.5 * width}
              height={1.5 * height}
              placeholder="blur"
              blurDataURL="/img/frontpage.png"
              className={cn('rounded-xl')}
              quality="100"
            />
          </a>
        </div>
      </div>
    </>
  );
}
