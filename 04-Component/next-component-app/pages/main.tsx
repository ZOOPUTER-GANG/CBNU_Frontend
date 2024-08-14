import { useState } from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

// 재사용 컴포넌트 참조
import Header from '@/components/header';
import Middle from '@/components/middle';
import Footer from '@/components/footer';

import { FooterType } from '@/interface/main';

// 푸터 자식 컴포넌트에 전달한 props데이터 타입 정의
// type Footer = {
//   href: string;
//   title: string;
//   desc: string;
// };

function Main() {
  //제목 상태값 정의
  // useState(초기설정값)은 반환값으로 설정된 변수값과 값을 변경하는 전용 세터 함수를 반환
  // state값은 반드시 지정된 세터 함수를 통해 변경해야 한다.
  const [title, setTitle] = useState('메인페이지');

  // 넥스트에서 로고 이미지 경로 데이터 정의
  const logoPath = '/next.svg';

  const footers: FooterType[] = [
    {
      href: 'https://nextjs.org/',
      title: 'Next.js',
      desc: '넥스트 제이에스의 최신 기술을 경험해 보세요.',
    },
    {
      href: 'https://tailwindcss.com/',
      title: 'tailwindcss',
      desc: '테일윈드의 최신 기술을 경험해 보세요.',
    },
    {
      href: 'https://js.langchain.com/v0.2/docs/introduction/',
      title: 'langchain.js',
      desc: '랭체인의 최신 기술을 경험해 보세요.',
    },
  ];

  // 자식 컴포넌트에서 발생한 이벤트 처리함수
  const handleChildClick = (url: string): void => {
    console.log('이동할 URL데이터 ', url);
  };

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <h1>{title}</h1>
      {/* 헤더 */}
      <Header mainPage="pages/main.tsx" onClick={handleChildClick}>
        헤더컴포에서 지식 전달하기
      </Header>

      {/* 미들 */}
      <Middle logoPath={logoPath} />

      {/* 푸터 */}
      <Footer list={footers} />
    </main>
  );
}

export default Main;
