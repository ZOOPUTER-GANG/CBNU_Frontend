type StringOrNumber = string | number;
let sample:StringOrNumber;
sample ="안녕";
sample =11;

type MemberType = {
    name:string;
    age:number;
    address:{city:string; country:string};
};

let PersonData:MemberType = {
    name : "eddy",
    age : 30,
    address:{
        city:"서울",
        country:"한국"
    }
};

function printPersonInfo (person:MemberType){
    console.log(`name:${person.name}`);
};

printPersonInfo(PersonData);

// 함수구조를 타입으로 정의
type CalFunctionType = (a:number, b:number)=>number;

function plus(a:number,b:number):number{
    return a+b;
};

function minus(a:number,b:number):number{
    return a-b;
};

function calculate(a:number,b:number,calFunc:CalFunctionType){
    return calFunc(a, b);
};

calculate(400,10,plus);


type OperationInput = {
    a:number;
    b:number;
};

type OperationOutput = {
    result:number;
};

function addNum(input:OperationInput):OperationOutput{
    const {a,b}=input;
    return {result:a+b};
};

const input:OperationInput = {a:5,b:3};
const output:OperationOutput = addNum(input);

console.log(output);
