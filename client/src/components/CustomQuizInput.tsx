import {
	FormControl,
	FormErrorMessage,
	FormLabel,
	Input,
	InputProps,
} from '@chakra-ui/react';
import React from 'react';

type CustomQuizInputProps = {
	input: string;
	name?: string;
	register: any;
	error: any;
	errorMessage: string;
	isChoiceInput?: boolean;
} & InputProps;

const CustomQuizInput: React.FC<CustomQuizInputProps> = ({
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
			{error && <FormErrorMessage mt='0'>{errorMessage}</FormErrorMessage>}
		</FormControl>
	);
};

export default CustomQuizInput;
