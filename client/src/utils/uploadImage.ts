export const uploadCloudinaryImage = (callback: Function) => {
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
			croppingAspectRatio: 1.77777777778,
			croppingShowDimensions: true,
		},
		callback
	);
};
