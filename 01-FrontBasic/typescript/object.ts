const user1:{id:number;name:string;email:string;tel?:string}={
    id:2,
    name:'주현',
    email:'ee@email.com',
    tel: "02023541654"
};

console.log(
    `사용자1${user1.name}의 이메일은 ${user1.email} 전화번호는 ${user1.tel}이다`
);


interface User {
    id: number;
    name: string;
    email: string;
    tel?:string;
};

let user2: User = {
    id: 1,
    name:"쭈",
    email:"eee@ddd.co.kr"
};

console.log(
    `사용자2${user2.name}의 이메일은 ${user2.email} 전화번호는 ${user2.email}이다  ${user2.tel}`
);