// const wordSearch = (letters, word) => {
//     const horizontalJoin = letters.map(ls => ls.join(''))
//     for (l of horizontalJoin) {
//         if (l.includes(word)) return true
//     }
// }

// module.exports = wordSearch

const transpose = function (matrix) {
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
  const horizontalJoin = letters.map((ls) => ls.join(""));
  const vertical = transpose(letters);
  const verticalJoin = vertical.map((ls) => ls.join(""));
  for (l of horizontalJoin) {
    //console.log(l, "this is L")
    if (l === word) {
      return true;
    }
  }
  for (v of verticalJoin) {
    if (v === word) {
      return true;
    }
  }
  if (word === "") {
    return "What word would you like to search?";
  }
  return false;
};

module.exports = wordSearch;
