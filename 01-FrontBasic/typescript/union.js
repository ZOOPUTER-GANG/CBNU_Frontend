var productCode = "10000";
productCode = 20000;
function getCode(code) {
    if (typeof code === "number") {
        code = "P-" + code.toString();
    }
    ;
    return code;
}
;
console.log("getcode:", getCode(1000));
console.log("getcode:", getCode('p-5000'));
// 배열내의 값들에 대한 타입을 다양하게 지정하고 제한할수있다
var userData = ['홍길동2', 40, false];
var state = "open";
var oddNum = 3;
