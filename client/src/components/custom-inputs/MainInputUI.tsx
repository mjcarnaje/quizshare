import { WarningIcon } from '@chakra-ui/icons';
import {
	FormControl,
	FormLabel,
	Input,
	InputGroup,
	InputRightElement,
	Tooltip,
	FormHelperText,
	FormErrorMessage,
	InputProps,
} from '@chakra-ui/react';
import React from 'react';
import { FieldError } from 'react-hook-form';

type MainInputUIProps = {
	error?: FieldError | undefined;
	input: string;
	name: string;
	register: any;
	type: string;
	forDashboard?: boolean;
	helperText?: string[];
	errorMessage?: string;
	placeholder?: string;
	defaultValue?: string;
} & InputProps;

const MainInputUI: React.FC<MainInputUIProps> = ({
	error,
	input,
	name,
	register,
	type,
	forDashboard,
	helperText,
	errorMessage,
	placeholder,
	defaultValue,
	...props
}) => {
	return (
		<FormControl id={input} isInvalid={!!error}>
			{forDashboard ? (
				<FormLabel as='p' fontWeight='semibold'>
					{name}
				</FormLabel>
			) : (
				<FormLabel>{name}</FormLabel>
			)}
			<InputGroup size='lg'>
				<Input
					name={input}
					placeholder={placeholder || name}
					ref={register}
					isInvalid={!!error}
					type={type}
					focusBorderColor='purple.500'
					defaultValue={defaultValue || ''}
					{...props}
				/>
				{error && (
					<InputRightElement>
						<Tooltip hasArrow label={error?.message} bg='red.500'>
							<WarningIcon color='red.500' fontSize='20px' />
						</Tooltip>
					</InputRightElement>
				)}
			</InputGroup>
			{helperText?.map((text, i) => (
				<FormHelperText key={i}>{text}</FormHelperText>
			))}
			{error && errorMessage && (
				<FormErrorMessage mt='0'>
					{`${errorMessage[0].toUpperCase()}${errorMessage.slice(1)}`}
				</FormErrorMessage>
			)}
		</FormControl>
	);
};

export default MainInputUI;
