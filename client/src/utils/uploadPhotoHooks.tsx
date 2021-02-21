import { Dispatch, SetStateAction, useState } from 'react';
import { uploadCloudinaryImage } from './uploadImage';

export function useUploadSinglePhoto(
	cropRatio?: number
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
			cropRatio
		);
	};

	return { image, setImage, uploadImage };
}

interface ImagesProps {
	item_id: string;
	url: string | 'loading';
}

export function useUploadForArrayPhotos(
	cropRatio?: number
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
			cropRatio
		);
	};

	return { images, setImages, uploadImage };
}
