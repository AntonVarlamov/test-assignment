import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UserState = {
  email: string;
  nickname: string;
  mobile: string;
  name: string;
  sername: string;
  sex: "man" | "woman" | "";
  advantages: string[];
  checkboxes: Record<string, boolean>;
  radio: Record<string, boolean>;
  about: string;
};

const initialState: UserState = {
  email: "antonvarlamov1997@gmail.com",
  mobile: "+79120283642",
  nickname: "",
  name: "",
  sername: "",
  sex: "",
  advantages: [""],
  checkboxes: { 1: false, 2: false, 3: false },
  radio: { 1: false, 2: false, 3: false },
  about: "",
};

const useSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUserInfo(state, action: PayloadAction<Partial<UserState>>) {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateUserInfo } = useSlice.actions;
export default useSlice.reducer;
