const errorMapper = (error: any, setError: Function) => {
  if (!error.graphQLErrors[0]) {
    return null;
  }

  if (error.graphQLErrors[0].message.includes("Argument Validation Error")) {
    error.graphQLErrors[0].extensions.exception.validationErrors.forEach(
      (error: any) => {
        Object.values(error.constraints).forEach((message: any) => {
          return setError(error.property, {
            type: "server",
            message: message,
          });
        });
      }
    );
  } else {
    setError("GENERAL_ERROR", {
      type: "server",
      message: error.graphQLErrors[0].message,
    });
  }
};

export default errorMapper;
