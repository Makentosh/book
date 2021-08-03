import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface initialStateInterface {
  [key: string]: {
    isOpen: boolean
  }
}

export interface modalActionInterface {
  type: string
}

const initialState: initialStateInterface = {
  success: {
    isOpen: false
  },
  info: {
    isOpen: false
  }
};

export const slice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    open: (state, { payload }: PayloadAction<modalActionInterface>) => {
      state[payload.type].isOpen = true;
    },
    close: (state, { payload }: PayloadAction<modalActionInterface>) => {
      state[payload.type].isOpen = false;
    }
  }
});


export const { open, close } = slice.actions;

export default slice.reducer;
