const errorMapper = (err: any) => {
	const errors: { [key: string]: string } = {};
	err.graphQLErrors[0]?.extensions.exception.validationErrors.forEach(
		(validationErr: any) => {
			Object.values(validationErr.constraints).forEach((message: any) => {
				errors[validationErr.property] = message;
			});
		}
	);
	return errors;
};

export default errorMapper;
