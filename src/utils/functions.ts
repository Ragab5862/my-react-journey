/**
 * Slices a text string to a maximum length and adds "..." if it exceeds that length.
 * @param {string} txt - The original text that will be sliced.
 * @param {number} [max=50] - The maximum number of characters allowed before slicing the text.
 * @returns {string} Returns the sliced text followed by "..." if it exceeds the maximum length, otherwise returns the original text.
 */

export function txtslicer(txt: string, max: number = 50) {
  if (txt.length >= max) return `${txt.slice(0, max)}...`;
  return txt;
}
