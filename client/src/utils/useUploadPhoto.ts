import { Dispatch, SetStateAction, useState } from 'react';

const uploadCloudinaryImage = (callback: Function, cropRatio: number) => {
	window.cloudinary?.openUploadWidget(
		{
			cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
			uploadPreset: process.env.NEXT_PUBLIC_UPLOAD_PRESET,
			googleApiKey: process.env.NEXT_PUBLIC_GOOGLE_SEARCH_API,
			sources: ['local', 'url', 'image_search', 'camera'],
			defaultSource: 'local',
			cropping: true,
			maxImageFileSize: 1000000,
			multiple: false,
			showSkipCropButton: false,
			croppingAspectRatio: cropRatio,
			croppingShowDimensions: true,
		},
		callback
	);
};

interface uploadOptionsProps {
	cropRatio: number;
}

export function useUploadSinglePhoto(
	options?: uploadOptionsProps
): {
	image: string | undefined;
	setImage: Dispatch<SetStateAction<string | undefined>>;
	uploadImage: () => void;
} {
	const [image, setImage] = useState<string | 'loading'>();

	const uploadImage = () => {
		uploadCloudinaryImage(
			(error: any, photos: { event: string; info: { url: string } }) => {
				if (!error && photos.event === 'queues-start') {
					setImage('loading');
				} else if (!error && photos.event === 'success') {
					setImage(photos.info.url);
				} else if (error) {
					console.error(error);
				}
			},
			options?.cropRatio ?? 16 / 9
		);
	};

	return { image, setImage, uploadImage };
}

interface ImagesProps {
	item_id: string;
	url: string | 'loading';
}

export function useUploadForArrayPhotos(
	options?: uploadOptionsProps
): {
	images: ImagesProps[];
	setImages: Dispatch<SetStateAction<ImagesProps[]>>;
	uploadImage: (questions_id: string) => void;
} {
	const [images, setImages] = useState<ImagesProps[]>([]);

	const uploadImage = (item_id: string) => {
		uploadCloudinaryImage(
			(error: any, photos: { event: string; info: { url: any } }) => {
				const asIsImages = images.filter((img) => img.item_id !== item_id);
				if (!error && photos.event === 'queues-start') {
					setImages([...asIsImages, { item_id: item_id, url: 'loading' }]);
				} else if (!error && photos.event === 'success') {
					setImages([
						...asIsImages,
						{
							item_id: item_id,
							url: photos.info.url,
						},
					]);
				} else if (error) {
					console.error(error);
				}
			},
			options?.cropRatio ?? 16 / 9
		);
	};

	return { images, setImages, uploadImage };
}
