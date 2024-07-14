import { useDispatch } from "react-redux";
import { AppStore } from "../lib/store/store";

export const useAppDispatch = useDispatch.withTypes<AppStore['dispatch']>();

