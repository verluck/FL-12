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

makeNumber('erer384jjjfd123');
makeNumber('123098h76gfdd');
makeNumber('ijifjgdj');