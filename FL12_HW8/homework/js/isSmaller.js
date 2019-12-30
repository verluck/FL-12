function isBigger(greaterNumber, lesserNumber) {
  return greaterNumber > lesserNumber;
}

function isSmaller(lesserNumber, greaterNumber) {
  return isBigger(greaterNumber, lesserNumber);
}

isSmaller(5, -1);