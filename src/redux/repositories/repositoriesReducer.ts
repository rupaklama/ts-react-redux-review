import { ActionType } from "./repositoriesAction";
import { Action } from "./repositoriesAction";

interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

const INITIAL_STATE = {
  loading: false,
  error: null,
  data: [],
};

const repositoriesReducer = (state: RepositoriesState = INITIAL_STATE, action: Action): RepositoriesState => {
  switch (action.type) {
    case ActionType.SEARCH_REPOSITORIES:
      return {
        ...state,
        loading: true,
      };
    case ActionType.SEARCH_REPOSITORIES_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };

    case ActionType.SEARCH_REPOSITORIES_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default repositoriesReducer;
