import { AppEvents } from "../events";
export interface IAction {
  type: string;
  payload: string | number;
}

export const SetName = (value: string) => ({ type: AppEvents.SET_NAME, payload: value });

export const SetAge = (value: number) => ({ type: AppEvents.SET_AGE, payload: value });
