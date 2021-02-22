import {
	Flex,
	Input,
	Tag,
	TagCloseButton,
	TagLabel,
	Text,
	useColorModeValue,
	useToast,
	Wrap,
	WrapItem,
} from '@chakra-ui/react';
import React, { KeyboardEvent, useRef, useState } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { QuizInput } from '../../generated/graphql';

interface TagsArrayProps {}

const TagsArray: React.FC<TagsArrayProps> = ({}) => {
	const toast = useToast();

	const [tag, setTag] = useState<string>('');
	const tagInput = useRef<HTMLInputElement>(null);

	const { control, register } = useFormContext<QuizInput>();

	const { fields, append, remove } = useFieldArray({
		control,
		name: 'tags',
	});

	const keyDown = (e: KeyboardEvent<HTMLInputElement>, tag: string) => {
		if (e.key === 'Enter') {
			let tagExist =
				fields.findIndex((tag1) => tag1.name === tag.toUpperCase()) !== -1;

			if (fields.length === 5) {
				// if there are 5 tags already
				return;
			} else if (tag.length === 0) {
				// if there is no tag typed
				return;
			} else if (tagExist) {
				e.preventDefault();
				toast({
					description: 'You cannot add the same tag.',
					status: 'error',
					duration: 5000,
					isClosable: true,
					position: 'bottom-right',
				});
			} else {
				e.preventDefault();
				append({ name: tag.toUpperCase() });
				setTag('');
			}
		}

		if (e.key === 'Backspace' && tag.length === 0) {
			remove(fields.length - 1);
		}
	};

	return (
		<Flex direction='column' w='full'>
			<Text
				fontFamily='inter'
				textTransform='uppercase'
				fontWeight='400'
				fontSize='14px'
				color={useColorModeValue('#000', '#fff')}
			>
				Search Tags
			</Text>
			<Text mb='8px' fontSize='13px'>
				Add up to 5 tags to describe what your quiz is about
			</Text>
			<Wrap borderWidth='1px' w='full' p='10px' borderRadius='8px'>
				{fields.map(({ name, id }, i) => (
					<>
						<input
							type='hidden'
							name={`tags[${i}].name`}
							ref={register()}
							defaultValue={name}
						/>
						<WrapItem key={id}>
							<Tag key={name} borderRadius='md' flexShrink={0}>
								<TagLabel maxW='300px'>{name}</TagLabel>
								<TagCloseButton onClick={() => remove(i)} />
							</Tag>
						</WrapItem>
					</>
				))}
				<WrapItem flexGrow={1}>
					<Input
						ref={tagInput}
						type='text'
						name='tags'
						onChange={(e) => {
							if (fields.length === 5) return;
							setTag(e.target.value);
						}}
						onKeyDown={(e) => keyDown(e, tag)}
						value={tag}
						variant='unstyled'
						placeholder='Type here'
						tabIndex={0}
					/>
				</WrapItem>
			</Wrap>
		</Flex>
	);
};

export default TagsArray;
