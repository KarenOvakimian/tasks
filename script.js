function calcAgeInDays() {
  let ageInYears= parseInt(prompt("Enter your age in years:"));
  
  let daysInYear = 365;
  let ageInDays = ageInYears * daysInYear;
  
  alert(`Ваш возраст в днях: ${ageInDays}`);
}
calcAgeInDays()