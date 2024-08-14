// useState 기본 사용법 알아보기
import { useState } from "react";

const Count = () => {
  const [count, setCount] = useState<number>(0);

  const plusCount = () => {
    setCount(count + 1);
  };

  const minusCount = () => {
    setCount(count - 1);
  };

  const initCount = () => {
    setCount(0);
  };

  return (
    <div className="p-10">
      {/* 현재 카운트값 표시영역 */}
      <div className="text-center">
        <h1>현재 카운트 값</h1>
        <br />
        <h1>{count}</h1>
        <br />
      </div>
      {/* 카운트 값 증감/초기화 버튼영역 */}
      <div className="text-center">
        <button
          onClick={() => {
            setCount(count + 1);
          }}
          className="ml-3 rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          증가
        </button>

        <button
          onClick={minusCount}
          className="ml-3 rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          감소
        </button>

        <button
          onClick={initCount}
          className="ml-3 rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          초기화
        </button>
      </div>
    </div>
  );
};

export default Count;
