import { WarningIcon } from '@chakra-ui/icons';
import {
	FormControl,
	FormLabel,
	Input,
	InputGroup,
	InputRightElement,
	Tooltip,
} from '@chakra-ui/react';
import React from 'react';
import { FieldError } from 'react-hook-form';

interface RegisterLoginInputProps {
	error: FieldError | undefined;
	input: string;
	name: string;
	register: any;
	type: string;
}

const RegisterLoginInput: React.FC<RegisterLoginInputProps> = ({
	error,
	input,
	name,
	register,
	type,
}) => {
	return (
		<FormControl id={input} isInvalid={!!error}>
			<FormLabel>{name}</FormLabel>
			<InputGroup size='lg'>
				<Input
					name={input}
					placeholder={name}
					ref={register}
					isInvalid={!!error}
					type={type}
				/>
				{error && (
					<InputRightElement>
						<Tooltip hasArrow label={error?.message} bg='red.500'>
							<WarningIcon color='red.500' fontSize='20px' />
						</Tooltip>
					</InputRightElement>
				)}
			</InputGroup>
		</FormControl>
	);
};

export default RegisterLoginInput;
