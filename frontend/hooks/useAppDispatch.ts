import { useDispatch } from "react-redux";
import { AppStore } from "../store/store";

export const useAppDispatch = useDispatch.withTypes<AppStore['dispatch']>();

