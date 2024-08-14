import { useReducer } from "react";
import { countReducer } from "@/util/reducer";
import { CountActionType, ActionType } from "@/interfaces/common";

// 리듀서 함수(관리하는 상태값 매개변수,로직처리타입)
// function countReducer(state: number, action: string): number {
//   switch (action) {
//     case "plus":
//       return state + 1;
//     case "minus":
//       return state - 1;
//     case "init":
//       return 100;
//     default:
//       return state;
//   }
// }

const Reducer = () => {
  // useReducer(리듀서함수,초기 데이터값)
  // 리듀서 함수는 관리하는 상태값과 리듀서 함수를 호출하는 디스패치 함수를 반환합니다
  // 디스패치 함수명은 임의로 지정
  const [count, dispatchCount] = useReducer(countReducer, 100);

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
          onClick={() => dispatchCount({ type: CountActionType.PLUS })}
          className="ml-3 rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          증가
        </button>

        <button
          onClick={() => dispatchCount({ type: CountActionType.MINUS })}
          className="ml-3 rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          감소
        </button>

        <button
          onClick={() => dispatchCount({ type: CountActionType.INIT })}
          className="ml-3 rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          초기화
        </button>
      </div>
    </div>
  );
};

export default Reducer;
