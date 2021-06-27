import { useState } from "react";

type ISecondParameter = {
  data: string | null;
  loading: boolean;
};

type ReturnType = [uploadImage: () => void, secondParams: ISecondParameter];

export function useUploadPhoto(): ReturnType {
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const uploadImage = () => {
    const myWidget = window.cloudinary.createUploadWidget(
      {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
        uploadPreset: process.env.CLOUDINARY_PRESET_NAME,
        sources: ["local", "url", "camera"],
        defaultSource: "local",
        cropping: true,
        maxImageFileSize: 1000000,
        multiple: false,
        showSkipCropButton: false,
        croppingAspectRatio: 16 / 9,
        croppingShowDimensions: true,
      },
      (error: any, photos: any) => {
        if (!error && photos.event === "queues-start") {
          setLoading(true);
        } else if (!error && photos.event === "success") {
          setImage(photos.info.url);
          setLoading(false);
        } else if (error) {
          console.log(error);
        }
      }
    );

    myWidget.open();
  };

  return [uploadImage, { data: image, loading }];
}
