import React from "react";

import Image from "next/image";
import Skeleton from "react-loading-skeleton";

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
        <div className="relative w-full pb-[56.25%]">
          <Skeleton style={{ position: "absolute", inset: 0 }} />
        </div>
      )}
    </>
  );
};

export default ImageHolder;
