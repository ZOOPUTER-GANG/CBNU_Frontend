// 리액트 훅은 use 접두사로 시작하는 재사용 가능한 함수를 말한다

// 프로그래밍 적으로 라우팅 처리와 정보를 관리하는 useRouter훅 참조
// 라우팅 주소내 정보 추출과 로직을 위한 페이지 이동처리시 주로 사용하는 훅
import { useRouter } from "next/router";
import { useState } from "react";

import { BlogType } from "@/interface/blog";

const Blog = () => {
  const router = useRouter();

  const [blog, setBlog] = useState<BlogType>({
    id: 1,
    title: "1번게시물제목",
    content: "2번게시물내용",
    viewCnt: 1,
    display: true,
    createdAt: "2021-10-10",
    updatedAt: "2021-10-10",
  });

  //   라우팅 주소 파라메터 방식 이나 쿼리스트링 방식으로 전달된 정보
  console.log("URL주소에서 추출한 게시글 고유번호", router.query.id);
  return (
    <div>
      단일 블로그 페이지 번호 : {router.query.id} <br />
      글번호 : {blog.id} <br />
      제목: {blog.title} <br />
      <button onClick={() => router.push("/blogs")}>목록이동</button>
    </div>
  );
};

export default Blog;
