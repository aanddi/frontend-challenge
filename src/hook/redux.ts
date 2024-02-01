import { useSelector } from "react-redux";
import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { AppDuspatch, AppStore, TypeRootState } from "store/store";

export const useTypedDispatch = () => useDispatch<AppDuspatch>()
export const useTypedSelector: TypedUseSelectorHook<TypeRootState> = useSelector 