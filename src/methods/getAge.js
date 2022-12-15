

export function getAge(startDate) {
  // const startDate = "1995-10-7";
  const date = new Date(startDate);
  const getYear = date.getFullYear();
  const getMonth = date.getMonth();
  const getDay = date.getDate();
  // console.log(getDay);
  // console.log(getMonth);
  // console.log(getYear);

  const now = new Date();
  const getCurrentYear = now.getFullYear();
  const getCurrentMonth = now.getMonth();
  const getCurrentDay = now.getDate();
  // console.log(getCurrentYear - getYear);
  // console.log(getCurrentMonth);
  // console.log(getCurrentDay);


  let number_of_years = getCurrentYear - getYear;

  if (getMonth > getCurrentMonth) {
    number_of_years -= 1;
  } else if (getMonth == getCurrentMonth && getDay > getCurrentDay) {
    number_of_years -= 1;
  }

  // console.log(number_of_years);
  return number_of_years;
}