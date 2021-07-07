const errorMapper = (err: any, setError: Function) => {
  const errors = err.graphQLErrors[0];

  if (!errors) {
    setError("GENERAL_ERROR", {
      type: "server",
      message: "There is an error.",
    });
  } else if (errors.message.includes("Argument Validation Error")) {
    errors.extensions.exception.validationErrors.forEach((error: any) => {
      Object.values(error.constraints).forEach((message: any) => {
        setError(error.property, {
          type: "server",
          message: message,
        });
      });
    });
  } else {
    setError("GENERAL_ERROR", {
      type: "server",
      message: errors.message,
    });
  }
};

export default errorMapper;
