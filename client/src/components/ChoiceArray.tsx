import {
	Box,
	Button,
	Flex,
	IconButton,
	SimpleGrid,
	Spacer,
	useColorModeValue,
} from '@chakra-ui/react';
import { Image } from 'cloudinary-react';
import React, { useEffect, useState } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { AiFillPicture } from 'react-icons/ai';
import { BsPlusSquare } from 'react-icons/bs';
import { MdDelete } from 'react-icons/md';
import TextareaAutosize from 'react-textarea-autosize';
import { v4 as uuid } from 'uuid';
import { ChoiceInput } from '../generated/graphql';
import CustomQuizInput from './CustomQuizInput';

declare global {
	interface Window {
		cloudinary: any;
	}
}
interface ChoiceArrayProps {
	questionIndex: number;
}

const ChoiceArray: React.FC<ChoiceArrayProps> = ({ questionIndex }) => {
	const [images, setImages] = useState<
		{ name: string; choice_id: string; public_id: string }[]
	>([]);
	const choiceInputBg = useColorModeValue(
		'gray.300',
		'rgba(255, 255, 255, 0.04)'
	);

	const { control, register } = useFormContext();
	const { fields, append, remove } = useFieldArray<ChoiceInput>({
		control,
		name: `questions[${questionIndex}].choices`,
	});

	const uploadImage = (name: string, choice_id: string) => {
		window.cloudinary.openUploadWidget(
			{
				cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
				uploadPreset: process.env.NEXT_PUBLIC_UPLOAD_PRESET,
				googleApiKey: process.env.NEXT_PUBLIC_GOOGLE_SEARCH_API,
				sources: ['local', 'url', 'image_search', 'camera'],
				defaultSource: 'url',
				cropping: true,
				maxImageFileSize: 1000000,
				multiple: false,
				showSkipCropButton: false,
				croppingAspectRatio: 1.77777777778,
				croppingShowDimensions: true,
			},
			(error: any, photos: { event: string; info: { public_id: any } }) => {
				if (!error && photos.event === 'success') {
					const imagesThatNotGotAltered = images.filter(
						(i) => i.choice_id !== choice_id
					);

					setImages([
						...imagesThatNotGotAltered,
						{
							name: name,
							choice_id: choice_id,
							public_id: photos.info.public_id,
						},
					]);
				} else {
					console.error(error);
				}
			}
		);
	};

	const addChoice = (shouldFocus: boolean = true) => {
		append({ choice_id: uuid(), value: '', choicePhoto: '' }, shouldFocus);
	};

	useEffect(() => {
		addChoice(false);
		addChoice(false);
	}, []);

	return (
		<Box>
			<Flex>
				<Spacer />
				<Button
					leftIcon={<BsPlusSquare />}
					colorScheme='purple'
					variant='ghost'
					size='xs'
					onClick={() => addChoice()}
				>
					Add Choice
				</Button>
			</Flex>
			<SimpleGrid my='10px' p='2px' columns={2} spacing='10px'>
				{fields.map((choice, i) => {
					const img = images.findIndex((i) => i.choice_id === choice.choice_id);
					return (
						<Box
							bg={choiceInputBg}
							key={choice.choice_id}
							borderRadius='md'
							pos='relative'
							overflow='hidden'
						>
							<input
								type='hidden'
								name={`questions[${questionIndex}].choices[${i}].choice_id`}
								defaultValue={choice.choice_id}
								ref={register()}
							/>
							<input
								type='hidden'
								name={`questions[${questionIndex}].choices[${i}].choicePhoto`}
								defaultValue={choice.choicePhoto!}
								value={images[img]?.public_id}
								ref={register()}
							/>
							<Image publicId={images[img]?.public_id || choice.choicePhoto!} />
							<CustomQuizInput
								register={register}
								input={`questions[${questionIndex}].choices[${i}].value`}
								as={TextareaAutosize}
								placeholder='Type your answer here...'
								resize='none'
								overflow='hidden'
								py='7px'
								defaultValue={choice.value}
								mb='18px'
							/>
							<Flex pos='absolute' bottom='0' left='0' right='0'>
								<Spacer />
								<IconButton
									icon={<AiFillPicture />}
									size='xs'
									color='pink.300'
									onClick={() =>
										uploadImage(
											`questions[${questionIndex}].choices[${i}].choicePhoto`,
											choice.choice_id!
										)
									}
									colorScheme='white'
									isDisabled={fields.length === 1 ? true : false}
									aria-label='Remove choice input'
								/>
								<IconButton
									icon={<MdDelete />}
									size='xs'
									color='red.300'
									onClick={() => remove(i)}
									colorScheme='white'
									isDisabled={fields.length === 1 ? true : false}
									aria-label='Remove choice input'
								/>
							</Flex>
						</Box>
					);
				})}
			</SimpleGrid>
		</Box>
	);
};
export default ChoiceArray;
