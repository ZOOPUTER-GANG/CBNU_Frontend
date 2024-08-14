//SNS 타입 열거형
enum SNSType {
    None = "",
    Facebook = "facebook",
    Instagram = "instagram",
    Twitter = "twitter",
  }
  
  //회원가입 상태 타입 열거형
  //상수값을 지정하지 않으면 0부터 시작하는 숫자값이 할당됩니다.
  enum EntryStatus {
    Inactive, //0
    Active, //1
    Pending, //2
  }
  
  //회원 유형 타입 열거형
  enum MemberType {
    Admin = 2,
    User = 1,
    Guest = 0,
  }
  
  type Member = {
    id: number;
    email: string;
    password: string;
    entryStatus: EntryStatus;
    memberType: MemberType;
    snsType: SNSType;
    address: { city: string; country: string };
  };
  
  const snsTypeCode = "Facebook";
  
  //해당 MemberType 타입의 변수를 선언하고 값을 할당합니다.
  let member: Member = {
    id: 1,
    email: "test@test.co.kr",
    password: "dfdfdfd23sdsdsds..",
    memberType: MemberType.Admin,
    snsType: snsTypeCode as SNSType,
    entryStatus: EntryStatus.Pending,
    address: {
      city: "Seoul",
      country: "South Korea",
    },
  };
  
  console.log("member:", member);