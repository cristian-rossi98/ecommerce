export default function twoWords(inputString, pos1, pos2) {
    const stringWithoutHyphens = inputString.replace(/-/g, "");
    const words = stringWithoutHyphens.split(" ");
    const firstTwoWords = words.slice(pos1, pos2);
    return firstTwoWords.join(" ");
}