// 컴퍼넌트 내에서의 데이터 상태관리를 위한 useState훅
// 현재 컴퍼넌트 생애주기에 따른 관리를 위한 useEffect훅
import { useState, useEffect } from "react";

import Link from "next/link";

interface BlogItem {
  id: number;
  title: string;
  date: string;
}

const originalData: BlogItem[] = [
  { id: 1, title: "블로그 제목1", date: "2021-01-01" },
  { id: 2, title: "블로그 제목2", date: "2021-01-01" },
  { id: 3, title: "블로그 제목3", date: "2021-01-01" },
];

const BlogList = () => {
  // 검색어 키워드 상태 데이터 값 정의 및 초기화
  const [searchWord, setSearchWord] = useState<string>("");

  const [blogs, setBlogs] = useState<BlogItem[]>([]);

  //   현재 컴포넌트 최초로 화면에 랜더링 되는 시점 실행되는 useEffect훅 정의
  //   useEffect('최초 마운팅시 실행되는 콜백함수',
  //   '생애주기 시점 정의 [] 빈배열경우 최초 마운팅되는 시점을말함')
  useEffect(() => {
    console.log("최초 블로그 목록 화면 나타나는 마운팅시점에 실행됨");
    // 최초 마운팅시 백엔드restfulAPI 호출해서 블로그 목록조회
    // 조회해온 블로그 목록 데이터를 setBlogs()함수를 통해 상태 데이터로 저장
    setBlogs(originalData);
    // 해당 컴퍼넌트가 사라지는 시점에 실행되는 콜백 클린업 함수 정의
    return () => {
      console.log("블로그 목록 화면 사라지기전 실행되는 클린업!");
    };
  }, []);

  //   화면내 변화가 일어날때마다 실행되는 훅
  useEffect(() => {
    console.log("화면내에서 상태 데이터가 변경되어 랜더링 일어날때마다샐행");
  });

  //   특정 상태 데이터의(searchWord) 변경 감지해서 프로그래밍 구현하고 싶은경우
  // 감지할 상태값을 []에 넣는다
  useEffect(() => {
    console.log("검색어 변경되어 블로그목록 갱신", searchWord);
    blogSearch();
  }, [searchWord]);

  const blogSearch = () => {
    let searchResult: BlogItem[] = [];

    if (searchWord.length > 0) {
      searchResult = originalData.filter((item) =>
        item.title.includes(searchWord)
      );
      setBlogs(searchResult);
    } else {
      setBlogs(originalData);
    }
  };

  return (
    <div>
      <h1 className="m-4 font-bold">블로그 조회하기</h1>

      <div className="m-4">
        <input
          type="text"
          value={searchWord}
          onChange={(e) => setSearchWord(e.target.value)}
          placeholder="검색어입력해주세요"
        />
        <button onClick={blogSearch} type="button" className="ml-2">
          검색
        </button>
        <br></br>
        <Link href={"/"}>메인이동</Link>
      </div>

      <hr />

      <div className="m-4">
        <table className="w-full">
          <thead>
            <tr>
              <th>글번호</th>
              <th>글제목</th>
              <th>등록일</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BlogList;
