import { AppEvents } from "../events";
import { IAction } from "../actions";

export const reducer = function(state = {}, action: IAction) {
  let newState

  switch (action.type) {
    case AppEvents.FETCH_USER: {
      newState = {
        ...state,
        user: action.payload,
        post: null,
      };
      break;
    }
    case AppEvents.FETCH_POST: {
      newState = {
        ...state,
        post: action.payload,
        user: null,
      };
      break;
    }

    default:
      newState = state;
      break;
  }

  return newState;
}
