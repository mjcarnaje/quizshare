import {
	Box,
	Button,
	Flex,
	IconButton,
	SimpleGrid,
	Spacer,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { BsPlusSquare } from 'react-icons/bs';
import { MdDelete } from 'react-icons/md';
import TextareaAutosize from 'react-textarea-autosize';
import { v4 as uuid } from 'uuid';
import { ChoiceInput } from '../generated/graphql';
import CustomQuizInput from './CustomQuizInput';

interface ChoiceArrayProps {
	questionIndex: number;
}

const ChoiceArray: React.FC<ChoiceArrayProps> = ({ questionIndex }) => {
	const { control, register } = useFormContext();
	const { fields, append, remove } = useFieldArray<ChoiceInput>({
		control,
		name: `questions[${questionIndex}].choices`,
	});

	const addChoice = (shouldFocus: boolean = true) => {
		append({ choice_id: uuid(), value: '' }, shouldFocus);
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
					return (
						<Box
							bg='#f7fafc'
							key={choice.choice_id}
							borderRadius='md'
							pos='relative'
						>
							<input
								type='hidden'
								name={`questions[${questionIndex}].choices[${i}].choice_id`}
								defaultValue={choice.choice_id}
								ref={register()}
							/>
							<CustomQuizInput
								register={register}
								input={`questions[${questionIndex}].choices[${i}].value`}
								as={TextareaAutosize}
								placeholder='Type your answer here...'
								resize='none'
								overflow='hidden'
								py='7px'
								defaultValue={choice.value}
								mb='26px'
							/>
							<Flex bg='gray.100' pos='absolute' bottom='0' left='0' right='0'>
								<Spacer />
								<IconButton
									icon={<MdDelete />}
									size='sm'
									color='red.300'
									onClick={() => remove(i)}
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
