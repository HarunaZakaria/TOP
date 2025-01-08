function bmiCalculator(weight, height){
  const calBmi = weight / (height * height);
  return calBmi;
}

let bmi = Math.round(bmiCalculator(159, 4));
alert("Your BMI is " + bmi);