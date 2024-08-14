let notSure:any = 4;
notSure = "maybe a string instead";
notSure = false;

console.log("notSure:",notSure);

let fullName:any ="eddy";
let fullNameLength:number =(<string>fullName).length;

let fullNameLength2:number =(fullName as string).length;

const companyName = "msoftware" as string;

// 기능과 속성을 정의할때 반드시 구현해야하는경우 인터페이스 정의
// 데이터의 구조를 정의해서 쓰는경우 사용함
// 유저라는 객체가 ID라는 속성이 있고 타입 정의
interface User {
    id : number;
    name: string;
    email: string;
    tel?: string; //선택적 속성은 속성명?로 정의 이건 반드시 입력 안해도됨
};

let user = {} as User;
user.id =1;
user.name='eddy';

console.log('user는',user);

