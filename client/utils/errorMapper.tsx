import { GraphQLError } from "graphql";

const errorMapper = (errors: GraphQLError[], setError: Function) => {
  if (true) {
    errors.forEach((error) => {
      Object.values(error.constraints).forEach((message: any) => {
        alert(message);
        return setError(error.property, {
          type: "server",
          message: message,
        });
      });
    });
  } else {
    return setError("GENERAL_ERROR", {
      type: "server",
      message: err.graphQLErrors[0]?.message,
    });
  }
};

export default errorMapper;
