function truncateString(
  string: string,
  firstSymbols: number = 6,
  lastSymbols: number = 4
) {
  if (!string) {
    return "";
  }

  const firstLetters = string.slice(0, firstSymbols);
  const lastLetters = string.substring(string.length - lastSymbols);
  return firstLetters + "..." + lastLetters;
}

export default truncateString;
