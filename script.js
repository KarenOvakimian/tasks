function calcAgeInDays() {
  let ageInYears= parseInt(prompt("Enter your age in years:"));
  
  let daysInYear = 365;
  let ageInDays = ageInYears * daysInYear;
  
  alert(`Your age in days: ${ageInDays}`);
}
calcAgeInDays()