import Image from "next/image";
import cn from "classnames";

export default function ImageCaption({ url, width, height, caption }) {
  return (
    <>
      <div className={cn("grid justify-items-center mt-6 mb-4")}>
        <div className="flex outline outline-8 outline-offset-8 outline-gray-200 dark:outline-gray-800 rounded-xl">
          <Image
            src={url}
            alt={caption}
            width={width}
            height={height}
            placeholder="blur"
            blurDataURL="/img/frontpage.png"
            className={cn("object-cover rounded-xl")}
          />
        </div>
      </div>
      <p className="text-sm italic text-center">{caption}</p>
    </>
  );
}
