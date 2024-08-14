//<>꺽쇠 안에 형변환 - 타입변형
function getRandomElement(list) {
    //실수 정보 가져오는 floor
    var randIdx = Math.floor(Math.random() * list.length);
    return list[randIdx];
}
var randomString = getRandomElement(['a', 'b', 'c']);
console.log('랜덤스트링', randomString);
var randomNumber = getRandomElement([1, 2, 3]);
console.log('랜덤넘버', randomNumber);
