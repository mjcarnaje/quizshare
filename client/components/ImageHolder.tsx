import React from "react";

import Image from "next/image";

interface Props {
  image?: string | null;
  loading?: boolean;
}

const ImageHolder: React.FC<Props> = ({ image, loading = false }) => {
  return (
    <>
      {image && !loading && (
        <div className="w-full mb-2 overflow-hidden bg-gray-300 rounded-md ">
          <div className="relative w-full pb-[56.25%]">
            <Image
              src={image}
              layout="fill"
              objectFit="cover"
              alt="thumbnail"
            />
          </div>
        </div>
      )}
      {loading && (
        <div className="flex items-center justify-center w-full h-8 my-4 bg-gray-300 rounded-md">
          <p className="text-lg font-semibold">Loading</p>
        </div>
      )}
    </>
  );
};

export default ImageHolder;
