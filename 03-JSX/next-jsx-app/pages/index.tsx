import Head from 'next/head';
import Image from 'next/image';
import { Inter, Island_Moments } from 'next/font/google';
import styles from '@/styles/Home.module.css';

import React, { Fragment } from 'react';

const inter = Inter({ subsets: ['latin'] });

function Hello(isLogin: boolean): JSX.Element {
  if (isLogin) {
    return <b>로그인 되었습니다.</b>;
  } else {
    return <b>로그인이 필요합니다.</b>;
  }
}

export default function Home() {
  const userName: string = '쭈';
  const isLogin: boolean = true;

  const Greeting = () => {
    if (isLogin) {
      return <b>{userName}님으로 로그인 했습니다.</b>;
    } else {
      return <b>Guest님, 로그인해주세요.</b>;
    }
  };

  const myStyle = {
    backgroundColor: 'blue',
    color: 'white',
    fontSize: '40px',
  };

  //주제 배열 데이터 생성
  const topics = [
    {
      id: 1,
      title: 'react',
      content: '리액트는 페이스북개발 ui라이브러리',
    },
    {
      id: 2,
      title: 'angular',
      content: '앵귤러는 구글개발 ui프레임워크',
    },
    {
      id: 3,
      title: 'next.js',
      content: '넥스트제이에스는 버셀개발 웹풀스택 프레임워크',
    },
  ];

  return (
    <Fragment>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.description}>
          <p>
            {/* {isLogin ? (
              <b>{userName}님으로 로그인했습니다.</b>
            ) : (
              <b>로그인해주세요.</b>
            )} */}

            {/* {Hello(isLogin)} */}

            {Greeting()}

            <code className={styles.code}>pages/index.tsx</code>
          </p>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>

            {/* 
            <img
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
            /> */}
          </div>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div>

        <div style={{ color: 'red', backgroundColor: 'black' }}>
          즐거운 React Next.js 코딩 <br />
          JSX 스타일링 방법을 배워보자
        </div>
        <br />

        <div style={myStyle}>스타일 객체 정의사용</div>

        <div className={'sample2'}>스타일 객체 정의사용</div>

        <div className={styles.grid}>
          {topics.map((topic, index) => (
            <a
              href="#"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
              key={topic.id}
            >
              <h2>
                {topic.title} <span>-&gt;</span>
              </h2>
              <p>{topic.content}</p>
            </a>
          ))}
        </div>
      </main>
    </Fragment>
  );
}