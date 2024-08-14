var memberName = '강주';
var age = 20;
var price = 2000;
var isMale = false;
var totalPayPrice = 0;
function showTotalPrice(price, count) {
    totalPayPrice = price * count;
    console.log("\uCD1D\uAE08\uC561\uC740 ".concat(totalPayPrice, "\uC6D0 \uC785\uB2C8\uB2E4."));
}
;
console.log('사용자명', memberName);
showTotalPrice(price, 2);
