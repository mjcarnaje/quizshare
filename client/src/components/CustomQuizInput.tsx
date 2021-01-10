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
				ref={register()}
				name={input}
				variant='filled'
				// bg='#f7fafc'
				_focus={{ outline: 'none' }}
				fontFamily='inter'
				{...props}
			/>
		</FormControl>
	);
};

export default CustomQuizInput;
