//Типизированные Dispatch и Selector для подсказок

import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../store/store";
import { bindActionCreators } from "redux";
import { RootState } from "../store/reducers";
import actionsCreators from "../store/actions/index";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useAppDispatches = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actionsCreators, dispatch);
};
