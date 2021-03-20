import { ActionType } from "../action-types";
import { Action } from "../action";
import axios from "axios";
import { Dispatch } from "redux";

export const searchRepository = (term: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionType.SEARCH_REPO });
    try {
      const { data } = await axios.get(
        "http://registry.npmjs.org/-/v1/search",
        {
          params: {
            text: term,
          },
        }
      );
      const newData = data.objects.map((x: any) => x.package.name);
      dispatch({ type: ActionType.SEARCH_REPO_SUCCES, payload: newData });
    } catch (error) {
      dispatch({ type: ActionType.SEARCH_REPO_ERROR, payload: error.message });
    }
  };
};
