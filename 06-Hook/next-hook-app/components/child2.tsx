// 전역 메세지 데이터 출력
import { useContext } from "react";
import { AppContext } from "@/pages/_app";

const Child2 = ({ children }: { children: React.ReactNode }) => {
  const { msg, setMsg } = useContext(AppContext);

  return (
    <div className="bg-red-200 h-[400px]">
      Child2 : {msg}{" "}
      <button
        onClick={() => {
          setMsg("변경완료!!");
        }}
      >
        전역메세지 변경하기
      </button>
      <div>{children}</div>
    </div>
  );
};

export default Child2;
