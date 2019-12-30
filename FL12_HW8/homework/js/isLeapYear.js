function isLeapYear(date) {
  let year = new Date(date).getFullYear();
  let leapYear;
  if (year) {
    if (year % 4 === 0) {
      if (year % 100 === 0) {
        if (year % 400 === 0) {
          leapYear = `${year} is a leap year`;
        } else {
          leapYear = `${year} is not a leap year`;
        }
      } else {
        leapYear = `${year} is a leap year`;
      }
    } else {
      leapYear = `${year} is not a leap year`;
    }
  } else {
    leapYear = `Invalid Date`;
  }
  return leapYear;
}

isLeapYear('2020-01-01 00:00:00');
isLeapYear('2020-01-01 00:00:00777');
isLeapYear('2021-01-15 13:00:00');
isLeapYear('2200-01-15 13:00:00');
isLeapYear(1213131313135465656654564646542132132131);
isLeapYear(1213131313);