var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    // 생성자함수정의
    function Animal(externalName) {
        if (externalName === void 0) { externalName = ""; }
        this.name = externalName;
    }
    // 일반화된 기능정의 및 구현
    Animal.prototype.move = function () {
        console.log("".concat(this.name, " \uC6C0\uC9C1\uC774\uACE0 \uC788\uC5B4\uC694"));
    };
    ;
    return Animal;
}());
;
// 클래스는 클래스를 상속받아 기능/속성 확장가능
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.mew = function () {
        console.log("".concat(this.name, " \uC6B8\uACE0\uC788\uC5B4\uC694."));
    };
    return Cat;
}(Animal));
;
var myCat = new Cat('뚜뚜');
console.log("\uCC44\uC6B4\uC774 \uACE0\uC591\uC774 \uC774\uB984", myCat.name);
myCat.move();
myCat.mew();
//사용자 유형 열거형 타입 
var UserType;
(function (UserType) {
    UserType["Admin"] = "admin";
    UserType["User"] = "user";
})(UserType || (UserType = {}));
//관리자 역할 열거형 타입 
var AdminRole;
(function (AdminRole) {
    AdminRole["SystemAdmin"] = "SA";
    AdminRole["GeneralAdmin"] = "GA";
})(AdminRole || (AdminRole = {}));
var User = /** @class */ (function () {
    function User(name, password, email) {
        this.name = name;
        this.password = password;
        this.email = email;
        this.userType = UserType.User;
    }
    User.prototype.greet = function () {
        console.log("Hello, ".concat(this.name, "!"));
    };
    User.prototype.config = function () {
        this.sendEmail('Personalization info is Configed');
        console.log("Personalization info is Configed. sended email to ".concat(this.email));
    };
    User.prototype.changePassword = function (newPassword) {
        this.password = newPassword;
        console.log("password is changed to ".concat(this.password, "."));
    };
    //시스템에서 사용자에게 메일 발송하기 
    User.prototype.sendEmail = function (message) {
        console.log("Email sent to ".concat(this.email, " by admin"));
    };
    return User;
}());
;
var user = new User("John", "123456", "john@example.com");
user.greet();
//user.password =  "1234"; //password 속성 접근불가 에러발생
//user.email = "test"; //email 속성 접근불가 에러발생 자식클래스에서만 접근가능 
user.changePassword("1234"); //password 변경
//user.sendEmail("test"); //protected 속성은 상속받은 클래스 안에서만 접근가능//에러발생
//user.config(); //private 메소드는 해당 클래스 밖에서는 접근불가
