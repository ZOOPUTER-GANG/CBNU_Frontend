//<>꺽쇠 안에 형변환 - 타입변형
function getRandomElement<T>(list:T[]):T{
    //실수 정보 가져오는 floor
    const randIdx = Math.floor(Math.random() * list.length);

    return list[randIdx];
}

const randomString = getRandomElement(['a','b','c']);
console.log('랜덤스트링',randomString);
const randomNumber = getRandomElement([1,2,3]);
console.log('랜덤넘버',randomNumber);


class Stack<T> {
    private items:T[] =[];

    push(item:T):void {
        this.items.push(item);
    };

    pop():T|undefined {
        return this.items.pop();
    }
}