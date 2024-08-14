let productCode : string | number = "10000";
productCode = 20000;

function getCode(code: number|string):string {
    if(typeof code === "number"){
        code = "P-"+code.toString();
    };
    return code;
};

console.log("getcode:",getCode(1000));

console.log("getcode:",getCode('p-5000'));

// 배열내의 값들에 대한 타입을 다양하게 지정하고 제한할수있다
const userData:(string|number|boolean)[]=['홍길동2',40,false];

// type 선언자를 이용해 개발자가 원하는 타입을 정의하고 사용할수있다
// 속성값 제한
type ProcessStates = "open"|"close";
let state:ProcessStates = "open";

type OddNumbersUnderTen = 1|3|5|7|9;
let oddNum: OddNumbersUnderTen = 3;

