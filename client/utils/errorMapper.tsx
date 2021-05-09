const errorMapper = (err: any, setError: Function) => {
  if (err.graphQLErrors[0]?.message.includes("Argument Validation Error")) {
    err.graphQLErrors[0].extensions.exception.validationErrors.forEach(
      (validationErr: any) => {
        Object.values(validationErr.constraints).forEach((message: any) => {
          return setError(validationErr.property, {
            type: "server",
            message: message,
          });
        });
      }
    );
  } else {
    setError("GENERAL_ERROR", {
      type: "server",
      message: err.graphQLErrors[0]?.message,
    });
  }
};

export default errorMapper;
