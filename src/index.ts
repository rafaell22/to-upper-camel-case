/**
 * Converts string to uppercase snake case
 * Examples:
 *   - toUpperSnakeCase('dog') = 'DOG'
 *   - toUpperSnakeCase('brown dog') = 'BROWN_DOG'
 *   - toUpperSnakeCase('brownDog') = 'BROWN_DOG'
 *   - toUpperSnakeCase('brown__dog') = 'BROWN_DOG'
 *   - toUpperSnakeCase('__dog') = 'DOG'
 *   - toUpperSnakeCase('dog__') = 'DOG'
 */
export default function toUpperSnakeCase(str: string): string {
  let strCopy = str;
  strCopy = replaceSpacesWithUnderscores(strCopy);
  strCopy = addUnderscoresBeforeUppercase(strCopy);
  strCopy = removeDuplicatedUnderscores(strCopy);
  strCopy = strCopy.toUpperCase();
  strCopy = removeUnderscoreAtStart(strCopy);
  strCopy = removeUndeerscoreAtEnd(strCopy);

    // replace lower case letters with their uppercase versions
    //.replace(/[a-z]/g, (match) => { return match.toUpperCase() })
    return strCopy;
}

function replaceSpacesWithUnderscores(str: string): string {
  return str
    .replace(/ /g, '_');
}

function addUnderscoresBeforeUppercase(str: string): string {
  return str
    .replace(/(?<=[a-z])[A-Z]/g, (match) => { return `_${match}` })
}   

function removeDuplicatedUnderscores(str: string): string {
  return str.replace('_{2,}', '_');
}

function removeUnderscoreAtStart(str: string): string {
  return str
    .replace(/^_*/, '');
}

function removeUndeerscoreAtEnd(str: string): string {
  return str
    .replace(/_*$/, '');
}
