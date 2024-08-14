// 전역 메세지 데이터 출력
import { useContext } from "react";
import { AppContext } from "@/pages/_app";

const Child4 = () => {
  const { msg, setMsg } = useContext(AppContext);

  return <div className="bg-blue-500 h-[100px]">Child4 : {msg}</div>;
};

export default Child4;
