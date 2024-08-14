interface User {
    name:string;
    age:number;
};

type Member = {
    name:string;
    age:number;
};

function greeting(user:User):string{
    return `hello ${user.name}`
};

let user:User = {
    name:"zoopuer",
    age:20
};
console.log(greeting(user));

// 인터페이스 상속 기능확장
interface Person {
    name:string;
};
interface Person {
    address:string;
};
interface Group {
    group:string;
};
interface Employee extends Person,Group {
    department:string;
};

let employee:Employee = {
    name:'주현',
    department:"dev",
    address:'성남시',
    group:'it'
};

// 객체지향적 인터페이스
// 인터페이스는 직접적인 기능구현을 하지 않고 형식만 정의해서 해당 형식을 구현하거나 확장할수있는 방법을제공
interface Movable {
    speed : number;
    move():void;
};

// 카 클래스는 위의 인터페이스를 상속받아 해당 인터페이스의 속성과 기능을 클래스 내에서 구현해야한다.
class Car implements Movable{
    speed:number;
    //생성자함수: 생성자함수는 클래스를 통해 객체가 생성되는 시점에 호출되는함수
    //클래스를 이용해 객체를 만들어내는 과정 new Car()를 인스턴스화 한다고 표현.
    constructor(speed:number){
        this.speed=speed;
    }   
    move(){
        console.log(`현재 자동차는 ${this.speed.toString()}속도로 이동중`)
    }
};

// 클래스를 이용해 myCar 라는 객체를 생성
// new 연산자 이용해 클래스의 객체를 만들고
// 객체가 프로그램이 실행되는 컴퓨터의 메모리에 저장되며
// 이런과정을 인스턴스화라고 표현
// 클래스는 인스턴스화 될때 클래스내 정의된 생성자 함수가 자동으로 실행되고
// 해당 함수에 파라메터를 전달할수있음
let myCar = new Car(100);
myCar.move();

