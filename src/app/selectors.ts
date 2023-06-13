import { RootState } from "./store";

export const userInfoSelector = (state: RootState) => ({ ...state.userInfo });

