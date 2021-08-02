export const capitalize = (words: string, split?: string) => {
  return words
    .trim()
    .split(split ?? " ")
    .map((word) => {
      const newWord = word[0].toUpperCase() + word.substr(1).toLowerCase();

      return newWord;
    })
    .join(" ");
};

export const toConsantFormat = (words: string, split?: string) => {
  return words
    .trim()
    .toUpperCase()
    .split(split ?? " ")
    .join("_");
};
