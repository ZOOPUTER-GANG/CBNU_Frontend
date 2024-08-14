const books:string[]=[];
books.push('책1');
books.push('책2');
books.push('책3');
books.push('책4');
console.log(books);

const userData1 = ['주현',20,true];
// 배열내 다양한 데이터 타입정의 사용
const userData2:(string|number|boolean)[]=['주현',20,true];
// 무조건 배열내 첫번째 두번째 세번째 데이터의 타입을 제약
const userData3:[string,number,boolean]=['주현',20,true];
