import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type stepsState = {
  main: boolean;
  step1: boolean;
  step2: boolean;
};

const initialState: stepsState = {
    main: false,
    step1: false,
    step2: false
};

const useSlice = createSlice({
    name: "steps",
    initialState,
    reducers: {
        disableStep(state, action: PayloadAction<keyof stepsState>) {
            state[action.payload] = false
        },
        enableStep(state, action: PayloadAction<keyof stepsState>) {
            state[action.payload] = true
        },
    },
});

export const { disableStep, enableStep } = useSlice.actions;
export default useSlice.reducer;
