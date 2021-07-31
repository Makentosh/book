import { createSlice, PayloadAction  } from "@reduxjs/toolkit";

export interface initialStateT {
    success: {
        isOpen: boolean
    }
    info: {
        isOpen: boolean
    }
}

export interface modalAction {
    type: string
}

const initialState: initialStateT  = {
    success: {
        isOpen: false
    },
    info: {
        isOpen: false
    }
}

export const slice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        open: (state, {payload: {type}}: PayloadAction<modalAction>) => {
            // @ts-ignore
            state[type].isOpen = true;
        },
        close: (state, { payload }: PayloadAction<modalAction>) => {
            // @ts-ignore
            state[payload.type].isOpen = false;
        }
    }
});


export const { open, close } = slice.actions;

export default slice.reducer;
