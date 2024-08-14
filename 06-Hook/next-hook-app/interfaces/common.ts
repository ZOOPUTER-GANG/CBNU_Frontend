// 카운트 상태값 로직 처리 유형 열거형 정의
export enum CountActionType {
  PLUS = "plus",
  MINUS = "minus",
  INIT = "init",
}

export interface ActionType {
  type: CountActionType;
}
