const mySentence = "freeCodeCamp is an awesome resource";
const words = mySentence.split(" ");

for (let i = 0; i < words.length; i++) {
  words[i] = words[i][0].toUpperCase() + words[i].substr(1);
}

words.join(" ");

export const capitalize = (words: string, split?: string) => {
  return words
    .split(split ?? " ")
    .map((word) => {
      const newWord = word[0].toUpperCase() + word.substr(1).toLowerCase();

      return newWord;
    })
    .join(" ");
};
