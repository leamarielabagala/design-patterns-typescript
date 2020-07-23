import { AppEvents } from "../events";
import { IAction } from "../actions";

export const reducer = function(state = {}, action: IAction) {
  let newState

  switch (action.type) {
    case AppEvents.SET_NAME: {
      newState = {
        ...state,
        name: action.payload,
      };
      break;
    }
    case AppEvents.SET_AGE: {
      newState = {
        ...state,
        age: action.payload,
      };
      break;
    }

    default:
      newState = state;
      break;
  }

  return newState;
}
