import { AppEvents } from "../events";
import { IAction } from "../actions";

export const reducer = function(state = {}, action: IAction) {
  let newState

  switch (action.type) {
    case AppEvents.LOAD_USERS: {
      newState = {
        ...state,
        users: action.payload,
      };
      break;
    }
    case AppEvents.LOAD_POSTS: {
      newState = {
        ...state,
        posts: action.payload,
      };
      break;
    }

    default:
      newState = state;
      break;
  }

  return newState;
}
