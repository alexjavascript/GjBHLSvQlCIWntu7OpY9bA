import { useStore } from "react-redux";
import { AppStore } from "../lib/store/store";

export const useAppStore = useStore.withTypes<AppStore>();