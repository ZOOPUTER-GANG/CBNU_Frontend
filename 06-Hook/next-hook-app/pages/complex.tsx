import Child1 from "@/components/child1";
import Child2 from "@/components/child2";
import Child31 from "@/components/child3-1";
import Child32 from "@/components/child3-2";
import Child4 from "@/components/child4";

// 전역 메세지 데이터 출력
import { useContext } from "react";
import { AppContext } from "./_app";

const Complex = () => {
  const { msg, setMsg } = useContext(AppContext);

  return (
    <div>
      <h1 className="bg-red-900 h-[800px]">컴플렉스 컴포넌트 : {msg}</h1>
      <Child1>
        <Child2>
          <Child31>
            <Child4 />
          </Child31>
          <Child32>
            <Child4 />
          </Child32>
        </Child2>
      </Child1>
    </div>
  );
};

export default Complex;
