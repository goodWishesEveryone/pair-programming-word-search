// Word search solver, is a function that receives a 2D array of letters and a word. The function must:
// Check to find the word horizontally and vertically
// Return true if the word is found, and return false if the word is not found


const transpose = function(matrix) {
  // iterate over the rows, and then over each element. after that we append each element to the new result list, via the element's index
  let result = []; // initialize empty result array
  for (let i in matrix) {
    // iterate over each row
    for (let j in matrix[i]) {
      // iterate over each element per row
      if (!Array.isArray(result[j])) {
        // for each element, create a new list if it doesn't exist, and then add the element to that list (in result)
        result[j] = []; // create new list if it doesn't exist
      }
      result[j].push(matrix[i][j]); // after creating the list, or if it already exists, push the element to that new list
    }
  }
  return result;
};

const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  const vertical = transpose(letters);
  const verticalJoin = vertical.map(ls => ls.join(''));
  for (let h of horizontalJoin) {
    if (h === word) {
      return true;
    }
  }
  for (let v of verticalJoin) {
    if (v === word) {
      return true;
    }
  }
  if (word === null || word === undefined) {
    return false;
  }
  if (word === '') {
    return 'What word would you like to search?';
  }
  if (word.length === 0) {
    return false;
  }
  return false;
};

module.exports = wordSearch;
