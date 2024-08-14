import { CountActionType, ActionType } from "@/interfaces/common";

export function countReducer(state: number, action: ActionType): number {
  const { type } = action;

  switch (type) {
    case CountActionType.PLUS:
      return state + 1;
    case CountActionType.MINUS:
      return state - 1;
    case CountActionType.INIT:
      return 100;
    default:
      return state;
  }
}
