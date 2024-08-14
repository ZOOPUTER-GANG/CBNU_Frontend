;
function greeting(user) {
    return "hello ".concat(user.name);
}
;
var user = {
    name: "zoopuer",
    age: 20
};
console.log(greeting(user));
;
;
;
;
var employee = {
    name: '주현',
    department: "dev",
    address: '성남시',
    group: 'it'
};
;
// 카 클래스는 위의 인터페이스를 상속받아 해당 인터페이스의 속성과 기능을 클래스 내에서 구현해야한다.
var Car = /** @class */ (function () {
    //생성자함수: 생성자함수는 클래스를 통해 객체가 생성되는 시점에 호출되는함수
    //클래스를 이용해 객체를 만들어내는 과정 new Car()를 인스턴스화 한다고 표현.
    function Car(speed) {
        this.speed = speed;
    }
    Car.prototype.move = function () {
        console.log("\uD604\uC7AC \uC790\uB3D9\uCC28\uB294 ".concat(this.speed.toString(), "\uC18D\uB3C4\uB85C \uC774\uB3D9\uC911"));
    };
    return Car;
}());
;
// 클래스를 이용해 myCar 라는 객체를 생성
// new 연산자 이용해 클래스의 객체를 만들고
// 객체가 프로그램이 실행되는 컴퓨터의 메모리에 저장되며
// 이런과정을 인스턴스화라고 표현
// 클래스는 인스턴스화 될때 클래스내 정의된 생성자 함수가 자동으로 실행되고
// 해당 함수에 파라메터를 전달할수있음
var myCar = new Car(100);
myCar.move();
