class Animal {
    // 일반화된 속성정의
    name:string;

    // 일반화된 기능정의 및 구현
    move(){
        console.log(`${this.name} 움직이고 있어요`)
    };

    // 생성자함수정의
    constructor(externalName:string=""){
        this.name=externalName
    }
};

// 클래스는 클래스를 상속받아 기능/속성 확장가능
class Cat extends Animal {
    mew(){
        console.log(`${this.name} 울고있어요.`)
    }
};

let myCat = new Cat('뚜뚜');
console.log(`채운이 고양이 이름`,myCat.name);
myCat.move();
myCat.mew();


//사용자 유형 열거형 타입 
enum UserType {
  Admin = "admin",
  User = "user",
}

//관리자 역할 열거형 타입 
enum AdminRole {
  SystemAdmin = "SA",
  GeneralAdmin = "GA",
}

class User {
  public name: string;
  private password: string;
  protected email: string;
  protected userType: UserType;

  constructor(name: string, password: string, email: string) {
    this.name = name;
    this.password = password;
    this.email = email;
    this.userType = UserType.User;
  }

  public greet() {
    console.log(`Hello, ${this.name}!`);
  }

  private config(){
    this.sendEmail('Personalization info is Configed');
    console.log(`Personalization info is Configed. sended email to ${this.email}`);
  }

  changePassword(newPassword: string) {
    this.password = newPassword;
    console.log(`password is changed to ${this.password}.`);
  }

  //시스템에서 사용자에게 메일 발송하기 
  protected sendEmail(message:string) {
    console.log(`Email sent to ${this.email} by admin`);
  }


};

let user = new User("John", "123456", "john@example.com");
user.greet();
//user.password =  "1234"; //password 속성 접근불가 에러발생
//user.email = "test"; //email 속성 접근불가 에러발생 자식클래스에서만 접근가능 

user.changePassword("1234"); //password 변경
//user.sendEmail("test"); //protected 속성은 상속받은 클래스 안에서만 접근가능//에러발생
//user.config(); //private 메소드는 해당 클래스 밖에서는 접근불가

class AdminUser extends User{
    private adminRole:AdminRole;

    constructor(name: string, password: string, email: string,adminRole?:AdminRole) {

        // 슈퍼 메서드는 부모클래스의 생성자함수를 호출
        super(name,password,email);

        this.name = name;
        this.email = email;
        this.userType = UserType.User;
    }

    changeRoleType(userType:UserType){
        console.log(`User Type will chagne from ${this.userType} to ${userType}`);    
    }
}

let admin1 = new AdminUser("Admin", "123456", "admin@example.com");

