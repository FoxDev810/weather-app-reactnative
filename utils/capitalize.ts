export const capitalize = (word: string | null) => {
  if (typeof word !== "string") {
    return "";
  }
  return word.charAt(0).toUpperCase() + word.slice(1);
};
