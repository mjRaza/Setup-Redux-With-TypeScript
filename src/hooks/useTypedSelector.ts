import { RootState } from "./../store/reducers";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
