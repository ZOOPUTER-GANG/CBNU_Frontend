import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { BlogType } from "@/interface/blog";

const BlogList = () => {
  const router = useRouter();
  const [blogs, setBlogs] = useState<BlogType[]>([
    {
      id: 1,
      title: "1번게시물제목",
      content: "2번게시물내용",
      viewCnt: 1,
      display: true,
      createdAt: "2021-10-10",
      updatedAt: "2021-10-10",
    },
    {
      id: 2,
      title: "2번게시물제목",
      content: "2번게시물내용",
      viewCnt: 4,
      display: true,
      createdAt: "2021-10-10",
      updatedAt: "2021-10-10",
    },
  ]);

  const moveDetail = () => {
    router.push("/blogs/new");
  };

  return (
    <div className="h-[700px]">
      <h1>블로깅 목록</h1>
      <button onClick={moveDetail}>신규게시글 작성</button>

      <table className="w-full">
        <thead>
          <tr>
            <th>글번호</th>
            <th>글제목</th>
            <th>글내용</th>
            <th>조회수</th>
            <th>작성날짜</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map((blog) => (
            <tr key={blog.id}>
              <td>{blog.id}</td>
              <td>
                <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
              </td>
              <td>{blog.content}</td>
              <td>{blog.viewCnt}</td>
              <td>{blog.display}</td>
              <td>{blog.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BlogList;
