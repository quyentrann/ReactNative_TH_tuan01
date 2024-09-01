var Dolphins = [97, 112, 101]
var Koalas = [109, 95, 106]
var avgDolphins = Dolphins.reduce((acc, num)=> acc+num) / Dolphins.length
console.log(`Diem trung binh cua Dolphins la: ` + avgDolphins.toFixed(1));
var avgKoalas = Koalas.reduce((acc, num)=> acc + num) / Koalas.length
console.log(`Diem trung binh cua Koalas la: ` + avgKoalas.toFixed(1));

if (avgDolphins > avgKoalas){
    avgDolphins >=100 ? console.log(`Dolphins là đội chiến thắng`):console.log(`Dolphins cao điểm hơn nhưng do điểm <100 nên Dolphins k nhận đc cup`);
}else if(avgDolphins < avgKoalas){
    avgKoalas >=100 ? console.log(`Koalas là đội chiến thắng`):console.log(`Koalas cao điểm hơn nhưng do điểm <100 nên Koalas k nhận đc cup`);
} else {
    avgDolphins = avgKoalas && avgDolphins>= 100 ? console.log(`Ca hai doi hoa nhau`) : console.log(`Ca 2 deu hoa nhưng khong vuot qua diem 100 nên k đc nhận cup`);
}

