//task 1
function convert(...args) {
  const convertedArgs = [];
  for (const argument of args) {
    typeof argument === 'string'
      ? convertedArgs.push(parseInt(argument))
      : convertedArgs.push(`${argument}`);
  }
  return convertedArgs;
}

//task 2
function executeForEach(array, callback) {
  for (const element of array) {
    callback(element);
  }
}

//task 3
function mapArray(array, callback) {
  const mappedArray = [];
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === 'string') {
      array[i] = parseInt(array[i]);
    }
  }
  executeForEach(
    array,
    element => mappedArray.push(callback(element))
  );
  return mappedArray;
}

//task 4
function filterArray(array, callback) {
  const filteredArray = [];
  executeForEach(
    array,
    function (element) { 
      if (callback(element)) { 
        filteredArray.push(element) 
      } 
    }
  );
  return filteredArray;
}

//task 5
function flipOver(string) {
  let flippedString = '';
  for (const char of string) {
    flippedString = char + flippedString;
  }
  return flippedString;
}

//task 6
function makeListFromRange(range) {
  const rangeArray = [];
  const [rangeStart, rangeEnd] = [...range];
  for (let item = rangeStart; item <= rangeEnd; item++) {
    rangeArray.push(item);
  }
  console.log(rangeArray);
}

//task 7
function getArrayOfKeys(arrayOfObjects, ObjectKey) {
  const arrayOfKeyValues = [];
  executeForEach(arrayOfObjects, obj => arrayOfKeyValues.push(obj[ObjectKey]));
  return arrayOfKeyValues;
}

//task 8
function substitute(array) {
  const substitutedValue = 30;
  return mapArray(
    array,
    element => element < substitutedValue ? '*' : element
  );
}

//task 9
function getPastDay(date, pastDay) {
  const dayInMilliseconds = 86400000;
  const pastDate = date - pastDay * dayInMilliseconds;
  return new Date(pastDate).getDate();
}

//task 10
function doubleDigitFormat(number) {
  const decimal = 10;
  return number < decimal ? `0${number}` : `${number}`;
}

function formatDate(date) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = doubleDigitFormat(date.getHours());
  const minutes = doubleDigitFormat(date.getMinutes());
  const formattedDate = `${year}/${month}/${day} ${hours}:${minutes}`;
  return formattedDate;
}