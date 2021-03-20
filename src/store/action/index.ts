import { ActionType } from "../action-types";

interface IsearchRepoAction {
  type: ActionType.SEARCH_REPO;
}

interface IsearchRepoSuccesAction {
  type: ActionType.SEARCH_REPO_SUCCES;
  payload: string[];
}

interface IsearchRepoErrorAction {
  type: ActionType.SEARCH_REPO_ERROR;
  payload: string;
}
export type Action =
  | IsearchRepoAction
  | IsearchRepoSuccesAction
  | IsearchRepoErrorAction;
