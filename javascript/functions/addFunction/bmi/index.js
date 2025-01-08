function bmiCalculator(weight, height){
  const calBmi = weight / (height * height);
  return calBmi;
}

let bmi = Math.floor(bmiCalculator(159, 4));
alert("Your BMI is " + bmi);