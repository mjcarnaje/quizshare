// firstName should  no be empty => First name should not be empty
// camelCase to proper

export const errorStringFormatter = (error?: string) => {
  return error?.split(" ").map((x, i) => {
    if (i !== 0) {
      return " " + x + " ";
    } else {
      return x.replace(/^[a-z]|[A-Z]/g, (x, i) =>
        i === 0 ? x.toUpperCase() : " " + x.toLowerCase()
      );
    }
  });
};
