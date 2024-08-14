var sample;
sample = "안녕";
sample = 11;
var PersonData = {
    name: "eddy",
    age: 30,
    address: {
        city: "서울",
        country: "한국"
    }
};
function printPersonInfo(person) {
    console.log("name:".concat(person.name));
}
;
printPersonInfo(PersonData);
function plus(a, b) {
    return a + b;
}
;
function minus(a, b) {
    return a - b;
}
;
function calculate(a, b, calFunc) {
    return calFunc(a, b);
}
;
calculate(400, 10, plus);
function addNum(input) {
    var a = input.a, b = input.b;
    return { result: a + b };
}
;
var input = { a: 5, b: 3 };
var output = addNum(input);
console.log(output);
