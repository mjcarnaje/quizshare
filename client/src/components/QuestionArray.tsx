import { Box, Button } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import CustomQuizInput from './CustomQuizInput';
import TextareaAutosize from 'react-textarea-autosize';
import { QuestionInput } from '../generated/graphql';
import { v4 as uuid } from 'uuid';
import { useEffect } from 'react';
import ChoiceArray from './ChoiceArray';

interface QuestionArrayProps {}

const QuestionArray: React.FC<QuestionArrayProps> = ({}) => {
	const [data, setData] = useState();
	const { control, register, getValues } = useFormContext();
	const { fields, append } = useFieldArray<QuestionInput>({
		control,
		name: 'questions',
	});

	const addQuestion = () => {
		append({
			question_id: uuid(),
			question: '',
			answer: '',
			choices: [],
			with_explanation: false,
			explanation: '',
			with_hint: false,
			hint: '',
			question_photo: null,
		});
	};

	useEffect(() => {
		addQuestion();
	}, []);

	return (
		<Box w='full'>
			{fields.map((question, index) => {
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
							ref={register}
							name={`questions[${index}].question_id`}
							value={question.question_id}
						/>
						<CustomQuizInput
							register={register}
							input={`questions[${index}].question`}
							name={`QUESTION ${index + 1}`}
							as={TextareaAutosize}
							placeholder='Type the question here..'
							resize='none'
							overflow='hidden'
							py='7px'
						/>
						<ChoiceArray questionIndex={index} />
					</Box>
				);
			})}
			<Button colorScheme='purple' size='lg' w='full' onClick={addQuestion}>
				Add Question
			</Button>
			<Button onClick={() => setData(getValues)}>Get Values</Button>
			<pre>{JSON.stringify(data, null, 2)}</pre>
		</Box>
	);
};

export default QuestionArray;
