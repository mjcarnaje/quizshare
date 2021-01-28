import { createStandaloneToast } from '@chakra-ui/react';

const toast = createStandaloneToast();

const errorMapper = (err: any, setError: Function) => {
	if (err.graphQLErrors[0].message.includes('Argument Validation Error')) {
		err.graphQLErrors[0]?.extensions.exception.validationErrors.forEach(
			(validationErr: any) => {
				Object.values(validationErr.constraints).forEach((message: any) => {
					return setError(validationErr.property, {
						type: 'server',
						message: message,
					});
				});
			}
		);
	} else {
		return toast({
			title: 'An error occurred.',
			description: err.graphQLErrors?.[0]?.message ?? 'There is an error',
			status: 'error',
			isClosable: true,
			position: 'bottom-right',
		});
	}
};

export default errorMapper;
