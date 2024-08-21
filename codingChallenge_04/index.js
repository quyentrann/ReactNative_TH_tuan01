var bill = [{
    name: 'orange juice',
    price: 100
}, {
    name: 'avocado smoothie',
    price: 200
}]
var totalBill = bill.reduce((acc, num) => { return acc.price + num.price })
console.log(totalBill);
var tip = (totalBill >= 50 && totalBill <= 300) ? totalBill * 0.15 : totalBill * 0.2;
console.table(bill)
console.log(`=>Tổng hóa đơn là ${totalBill} \n Tiền tip là: ${tip}`);