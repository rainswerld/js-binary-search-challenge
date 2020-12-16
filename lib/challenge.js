'use strict'

// sortedArray should be an array of values that are comparable to the value to
// find.

// lessThan is a predicate provided to you, which returns true if its first
// argument is less than its second argument, false otherwise.

// The first argument to lessThan should be an element from the array, the
// second argument is the provided value to find.

// You may assume that the value provided does exist within the sortedArray.

// The tests will ensure that you are returning the value being searched for,
// as well as calling lessThan the appropriate amount of times.
const binarySearch = function (sortedArray, lessThan, value) {
  let first = 0
  let last = sortedArray.length - 1
  let middle = Math.ceil(sortedArray.length / 2)
  while (middle !== first && middle !== last) {
    const element = sortedArray[middle]
    if (lessThan(element, value)) {
      first = middle + 1
    } else {
      last = middle
    }
    middle = Math.ceil((last - first) / 2) + first
  }
  if (lessThan(sortedArray[first], value)) {
    return sortedArray[last]
  } else {
    return sortedArray[first]
  }
}

module.exports = {
  binarySearch
}
