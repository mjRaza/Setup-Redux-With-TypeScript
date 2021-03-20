import { Action } from "../action/index";
import { ActionType } from "../action-types";

interface IState {
  data: string[];
  loading: boolean;
  error: string | null;
}
const initialState = {
  data: [],
  loading: false,
  error: null,
};
export default (state: IState = initialState, action: Action): IState => {
  switch (action.type) {
    case ActionType.SEARCH_REPO:
      return { loading: true, error: null, data: [] };
    case ActionType.SEARCH_REPO_SUCCES:
      return { loading: false, error: null, data: action.payload };
    case ActionType.SEARCH_REPO_ERROR:
      return { loading: false, error: action.payload, data: [] };

    default:
      return state;
  }
};
