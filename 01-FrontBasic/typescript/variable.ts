var memberName:string = '강주';
var age:number = 20;
let price:number = 2000;
const isMale:boolean = false;

let totalPayPrice:number = 0;

function showTotalPrice(price:number,count:number):void {
    totalPayPrice = price*count;
    console.log(`총금액은 ${totalPayPrice}원 입니다.`)
};

console.log('사용자명',memberName);
showTotalPrice(price,2);
