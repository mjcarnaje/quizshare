import { FormControl, FormLabel, Input, InputProps } from '@chakra-ui/react';
import React from 'react';

type CustomQuizInputProps = {
	input: string;
	name?: string;
	register: any;
} & InputProps;

const CustomQuizInput: React.FC<CustomQuizInputProps> = ({
	input,
	name,
	register,
	...props
}) => {
	return (
		<FormControl>
			{name && <FormLabel>{name}</FormLabel>}
			<Input
				ref={register()}
				name={input}
				variant='filled'
				bg='#f7fafc'
				_focus={{ outline: 'none', bg: 'gray.50' }}
				_hover={{ bg: 'gray.50' }}
				fontFamily='inter'
				{...props}
			/>
		</FormControl>
	);
};

export default CustomQuizInput;
