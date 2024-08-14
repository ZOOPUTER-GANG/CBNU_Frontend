import Personal from '@/components/personal';
import Company from '@/components/company';

const Profile = () => {
  return (
    <>
      <Personal name="주현" email="test@test.co.kr" phone="0102315646" age={10}>
        <b>사용자 기본 프로필</b>
      </Personal>

      <hr></hr>

      <Company
        company="엠소프트"
        role="개발자"
        address="서울시 강남구 테헤란로"
      >
        <span>회사 기본 프로필</span>
      </Company>
    </>
  );
};

export default Profile;
