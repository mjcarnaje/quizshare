import {
	FormControl,
	FormErrorMessage,
	FormLabel,
	Input,
	InputProps,
} from '@chakra-ui/react';
import React from 'react';

type QuizInputUIProps = {
	input: string;
	name?: string;
	register: any;
	error: any;
	errorMessage: string;
	isChoiceInput?: boolean;
} & InputProps;

const QuizInputUI: React.FC<QuizInputUIProps> = ({
	input,
	name,
	register,
	error,
	errorMessage,
	isChoiceInput,
	...props
}) => {
	return (
		<FormControl isInvalid={!!error} mb={isChoiceInput ? '24px' : ''}>
			{name && (
				<FormLabel
					fontFamily='inter'
					textTransform='uppercase'
					fontWeight='400'
					fontSize='14px'
				>
					{name}
				</FormLabel>
			)}
			<Input
				ref={register}
				name={input}
				variant='filled'
				// bg='#f7fafc'
				_focus={{ outline: 'none' }}
				fontFamily='inter'
				isInvalid={!!error}
				{...props}
			/>
			{error && (
				<FormErrorMessage mt='0'>
					{`${errorMessage[0].toUpperCase()}${errorMessage.slice(1)}`}
				</FormErrorMessage>
			)}
		</FormControl>
	);
};

export default QuizInputUI;
