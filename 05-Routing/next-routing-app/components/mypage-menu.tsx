import Link from "next/link";

const MypageMenu = () => {
  return (
    <div className="h-[700px]">
      <ul>
        <li>
          <Link href="/mypage/profile">프로필</Link>
        </li>
        <li>
          <Link href="/mypage/setting/config">환경설정</Link>
        </li>
      </ul>
    </div>
  );
};

export default MypageMenu;
