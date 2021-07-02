import { useState } from "react";

type IData = {
  data: string | null;
  loading: boolean;
};

type ReturnType = [uploadImage: () => void, data: IData];

export function useUploadPhoto(): ReturnType {
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const uploadImage = async () => {
    window.cloudinary?.openUploadWidget(
      {
        cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
        styles: {
          palette: {
            window: "#ffffff",
            sourceBg: "#f4f4f5",
            windowBorder: "#90a0b3",
            tabIcon: "#000000",
            inactiveTabIcon: "#555a5f",
            menuIcons: "#555a5f",
            link: "#0433ff",
            action: "#339933",
            inProgress: "#0433ff",
            complete: "#339933",
            error: "#cc0000",
            textDark: "#000000",
            textLight: "#fcfffd",
          },
          fonts: {
            Inter:
              "https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;900&display=swap",
          },
        },
        uploadPreset: process.env.NEXT_PUBLIC_CLOUDINARY_PRESET_NAME,
        sources: ["local", "url", "camera"],
        defaultSource: "url",
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
          setLoading(false);
          console.log(error);
        }
      }
    );
  };

  return [uploadImage, { data: image, loading }];
}
