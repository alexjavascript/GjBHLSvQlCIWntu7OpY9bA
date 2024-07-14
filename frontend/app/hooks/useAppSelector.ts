import { useSelector } from "react-redux";
import { AppStore } from "../lib/store/store";

export const useAppSelector = useSelector.withTypes<ReturnType<AppStore['getState']>>();