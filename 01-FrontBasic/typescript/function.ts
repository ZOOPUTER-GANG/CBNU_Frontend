function add1(a:number,b:number):number{
    return a+b;
};

function add2(a:number,b:number):void{
    console.log("결과값: ",a+b);
};

const result1:number = add1(10,10);


const data1:number = 30;
const data2:number = 20;
add2(data1,data2);


function greeting1(name:string):string{
    return `hello${name}님`
}


// 익명함수
let greeting2 = function(name:string):string{
    return `hello${name}님`
};

// 화살표함수
let greeting3 = (name:string):string => {
    return `hello${name}님`
}

console.log(greeting1('주현1'));
console.log(greeting2('주현2'));
console.log(greeting3('주현3'));

function greet(name:string='Guest',msg?:string):string{
    if(msg){
        return `${name}님 ${msg}`;
    }else{
        return`hello ${name}님`;
    }
};

console.log(greet());
console.log(greet('주현'));
console.log(greet('주현2','안녕하시오'));


//Case7: 함수의 파라메터로 함수를 전달하고 실행하는 예시
function plus(a: number, b: number): number {
    return a + b;
  }
  
  function minus(a: number, b: number): number {
    return a - b;
  }
  
  //함수의 파라메터로 특정함수를 전달할때는 전달 함수의 파라메터명:(함수 파라메터명:타입,파라메터명:타입) => 함수반환타입 형식으로 정의
  //calculate()함수에 파라메터(인수)로 전달되는 함수의 파라메터명과 타입,반환값을 어떻게 정의하는지 확인하세요.
  //매개변수중 함수 매개변수와 해당 함수의 구조를 정의해서 전달할수 있다
  //해당 함수의 구조는 별도 type alias를 통해 type으로 정의해서 전달할수도 있다.
  function calculate(
    a: number,
    b: number,
    calFunc: (a: number, b: number) => number
  ): number {
    return calFunc(a, b);
  }
  
  //calculate함수에 plus,minus 함수를 파라메터로 전달해 해당 전달함수의 로직으로 계산을 수행하게 하는 예시
  console.log(calculate(10, 5, plus));
  console.log(calculate(10, 5, minus));