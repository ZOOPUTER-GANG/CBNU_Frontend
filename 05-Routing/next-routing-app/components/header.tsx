import Link from "next/link";

const Header = () => {
  return (
    <div className="flex bg-gray-400 m-1 p-1">
      <div className="w-8/12 mt-4 px-4">
        <Link href="/">HOME</Link> |<Link href="/company/intro">회사소개</Link>{" "}
        |<Link href="/products/1/price">제품분류</Link> |
        <Link href="/blogs">블로그</Link> |
        <Link href="/blogs/1">블로그상세</Link> |
        <Link href="/company/contact">문의하기</Link>
      </div>
      <div className="w-8/12 mt-4 px-4 text-right">
        <Link href="/auth/login">로그인</Link> |
        <Link href="/auth/entry">회원가입</Link> |
        <Link href="/mypage/profile">프로필</Link> |
        <Link href="/mypage/setting/config">환경설정</Link>
      </div>
    </div>
  );
};

export default Header;
