import { Box, Center, Text, useToast } from '@chakra-ui/react';
import Image from 'next/image';
import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Container } from '../components/Container';
import { withApollo } from '../utils/withApollo';

const Upload: React.FC = () => {
	const [photos, setPhotos] = useState<string[]>([]);
	const onDrop = useCallback((acceptedFiles) => {
		const url = `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/upload`;

		acceptedFiles.forEach(async (acceptedFile: string | Blob) => {
			const formData = new FormData();

			formData.append('file', acceptedFile);
			formData.append(
				'upload_preset',
				process.env.NEXT_PUBLIC_UPLOAD_PRESET as string
			);

			const response = await fetch(url, {
				method: 'post',
				body: formData,
			});

			const data = await response.json();
			setPhotos((p) => [...p, data.url]);
		});
	}, []);

	const { getInputProps, getRootProps, isDragActive } = useDropzone({
		onDrop,
		accept: 'image/*',
		multiple: false,
		maxSize: 2000,
	});

	return (
		<Container minHeight='100vh'>
			<Box>
				<Text color='gray.800' fontSize='48px' fontWeight='extrabold'>
					Upload Picture Testing
				</Text>
				<Center
					{...getRootProps()}
					borderRadius='8px'
					borderWidth={isDragActive ? '3px' : '2px'}
					borderStyle='dashed'
					borderColor={isDragActive ? 'purple.500' : 'gray.600'}
					_focus={{ outline: 'none' }}
					w='320px'
					h='180px'
				>
					<input {...getInputProps()} />
					Drop Picture
				</Center>
			</Box>
			{photos.map((photo) => (
				<Image src={photo} height={180} width={320} />
			))}
		</Container>
	);
};

export default withApollo({ ssr: true })(Upload);
