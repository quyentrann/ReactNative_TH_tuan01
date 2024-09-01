var Mark = {
    mass: 78,
    height: 1.69
}
var john = {
    mass: 92,
    height: 1.95
}

var BMI_Mark = Mark.mass / (Mark.height ** 2)
console.log(`BMI cua Mark: ` + BMI_Mark.toFixed(1));
var BMI_John = john.mass / (john.height ** 2)
console.log(`BMI cua John: ` + BMI_John.toFixed(1));

var markHeigherBMI = BMI_Mark > BMI_John;
markHeigherBMI ? console.log("BMI cua Mark cao hon John") : console.log("BMI cua John cao hon Mark");
// markHeigherBMI ? console.log(`BMI cua Mark (`+ BMI_Mark+`) cao hon cua John(`+BMI_John+`)`): console.log(`BMI cua John (`+ BMI_John+`) cao hon cua Mark(`+BMI_Mark+`)`);
markHeigherBMI ? console.log(`BMI cua Mark (${BMI_Mark.toFixed(1)}) cao hon cua John(${BMI_John.toFixed(1)})`):console.log(`BMI cua John (${BMI_John.toFixed(1)}) cao hon Mark (${BMI_Mark.toFixed(1)})`);

