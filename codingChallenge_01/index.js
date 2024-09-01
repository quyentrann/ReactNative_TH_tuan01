var Mark = {
  mass: 95,
  height: 1.88,
};

var John = {
  mass: 85,
  height: 1.76,
};
var BMI_Mark = Mark.mass / Mark.height ** 2;
console.log(`BMI Mark: ` + BMI_Mark);

var BMI_John = John.mass / John.height ** 2;
console.log(`BMI John: ` + BMI_John);

var markHigherBMI = BMI_Mark > BMI_John;
console.log(markHigherBMI);
