import { Box, Button, Flex, IconButton, Text, Tooltip } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { MdDelete } from 'react-icons/md';
import TextareaAutosize from 'react-textarea-autosize';
import { v4 as uuid } from 'uuid';
import { QuestionInput } from '../generated/graphql';
import ChoiceArray from './ChoiceArray';
import CustomQuizInput from './CustomQuizInput';

interface QuestionArrayProps {}

const QuestionArray: React.FC<QuestionArrayProps> = ({}) => {
	const { control, register } = useFormContext();
	const { fields, append, remove } = useFieldArray<QuestionInput>({
		control,
		name: 'questions',
	});

	const addQuestion = (shouldFocus: boolean = true) => {
		append(
			{
				question_id: uuid(),
				question: '',
				answer: '',
				choices: [],
				with_explanation: false,
				explanation: '',
				with_hint: false,
				hint: '',
				question_photo: null,
			},
			shouldFocus
		);
	};

	useEffect(() => {
		addQuestion(false);
	}, []);

	return (
		<Box w='full'>
			{fields.map((question, i) => {
				return (
					<Box
						key={question.id}
						borderWidth='1px'
						p='12px'
						borderRadius='8px'
						my='20px'
						boxShadow='sm'
					>
						<input
							type='hidden'
							name={`questions[${i}].question_id`}
							defaultValue={question.question_id}
							ref={register()}
						/>
						<Flex align='center' justify='space-between' pb='5px'>
							<Text fontSize='13px'>{`QUESTION ${i + 1}`}</Text>
							<Tooltip hasArrow label='Remove question'>
								<IconButton
									aria-label='Remove question'
									size='sm'
									variant='ghost'
									colorScheme='purple'
									fontSize='15px'
									icon={<MdDelete />}
									onClick={() => remove(i)}
									isDisabled={fields.length === 1 ? true : false}
								/>
							</Tooltip>
						</Flex>
						<CustomQuizInput
							register={register}
							input={`questions[${i}].question`}
							as={TextareaAutosize}
							placeholder='Type the question here..'
							resize='none'
							overflow='hidden'
							py='7px'
						/>
						<ChoiceArray questionIndex={i} />
					</Box>
				);
			})}
			<Button
				colorScheme='purple'
				size='lg'
				w='full'
				onClick={() => addQuestion()}
			>
				Add Question
			</Button>
		</Box>
	);
};

export default QuestionArray;
