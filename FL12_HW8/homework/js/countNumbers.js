function makeNumber(stringOfSymbols) {
  let arrayOfSymbols = stringOfSymbols.split('');
  let arrayOfNumbers = [];
  for (let i = 0; i < arrayOfSymbols.length; i++) {
    if (!isNaN(parseInt(arrayOfSymbols[i]))) {
      arrayOfNumbers.push(arrayOfSymbols[i]);
    }
  }
  let stringOfNumbers = arrayOfNumbers.join('');
  return stringOfNumbers;
}

function countNumbers(stringOfSymbols) {
  let arrayOfNumbers = makeNumber(stringOfSymbols).split("");
  let objectOfNumbersCount = {};
  let digit;
  let number;
  let numberCount;
  for (digit = 0; digit < 10; digit++) {
    numberCount = 0;
    for (let i = 0; i < arrayOfNumbers.length; i++) {
      number = parseInt(arrayOfNumbers[i]);
      if (digit === number) {
        numberCount++;
        objectOfNumbersCount[number] = numberCount;
      }
    }
  }
  return objectOfNumbersCount;
}

countNumbers('erer384jj4444666888jfd123');
countNumbers('jdjjka000466588kkkfs662555');
countNumbers('');