// Inside of Redux Type Definition file, there’s actually an Interface for it to define what the Dispatch function is.
// We don’t have to create Custom Interface ourself, instead we are going to IMPORT interface 'Dispatch' from there
// to use it to Annotate Dispatch in Action Creators.
import { Dispatch } from "redux";

import axios from "axios";

// enum object fot actoin types
export enum ActionType {
  SEARCH_REPOSITORIES = "SEARCH_REPOSITORIES",
  SEARCH_REPOSITORIES_SUCCESS = "SEARCH_REPOSITORIES_SUCCESS",
  SEARCH_REPOSITORIES_ERROR = "SEARCH_REPOSITORIES_ERROR",
}

// actions interfaces
interface SearchRepositoriesAction {
  type: ActionType.SEARCH_REPOSITORIES;
}

interface SearchRepositoriesSuccessAction {
  type: ActionType.SEARCH_REPOSITORIES_SUCCESS;
  payload: string[];
}

interface SearchRepositoriesErrorAction {
  type: ActionType.SEARCH_REPOSITORIES_ERROR;
  payload: string;
}

// type union
export type Action = SearchRepositoriesAction | SearchRepositoriesSuccessAction | SearchRepositoriesErrorAction;

// action creators
// With Redux thunk, we can return a function to handle async request
// note - we also have access to 'dispatch' func inside of action creator to manually dispatch an action
export const searchRepositories = (term: string) => {
  // we need to provide Type Annotation for 'dispatch'
  // Using Default Dispatch Interface inside of Redux Type Definition file
  // and our 'Action' - type alias from above to return only our define Action types - correct ones
  return async (dispatch: Dispatch<Action>) => {
    // dispatch an action right away
    dispatch({
      type: ActionType.SEARCH_REPOSITORIES,
    });

    try {
      const { data } = await axios.get("https://registry.npmjs.org/-/v1/search", {
        // query params
        params: {
          text: term,
        },
      });

      const names = data.objects.map((object: any) => object.package.name);

      // dispatch another action
      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
        payload: names,
      });
    } catch (err) {
      if (err instanceof Error) {
        dispatch({
          type: ActionType.SEARCH_REPOSITORIES_ERROR,
          payload: err.message,
        });
      }
    }
  };
};
