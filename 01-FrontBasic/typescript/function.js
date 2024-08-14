function add1(a, b) {
    return a + b;
}
;
function add2(a, b) {
    console.log("결과값: ", a + b);
}
;
var result1 = add1(10, 10);
var data1 = 30;
var data2 = 20;
add2(data1, data2);
function greeting1(name) {
    return "hello".concat(name, "\uB2D8");
}
// 익명함수
var greeting2 = function (name) {
    return "hello".concat(name, "\uB2D8");
};
// 화살표함수
var greeting3 = function (name) {
    return "hello".concat(name, "\uB2D8");
};
console.log(greeting1('주현1'));
console.log(greeting2('주현2'));
console.log(greeting3('주현3'));
function greet(name, msg) {
    if (name === void 0) { name = 'Guest'; }
    if (msg) {
        return "".concat(name, "\uB2D8 ").concat(msg);
    }
    else {
        return "hello ".concat(name, "\uB2D8");
    }
}
;
console.log(greet());
console.log(greet('주현'));
console.log(greet('주현2', '안녕하시오'));
