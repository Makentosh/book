import { createSlice, PayloadAction } from '@reduxjs/toolkit';

enum ModalVariant {
  success = 'success',
  info = 'info',
  warning = 'warning'
}

type ModalType = keyof typeof ModalVariant;

export type initialStateInterface = {
  [key in ModalType]: {
    isOpen: boolean
  };
};

export interface modalActionInterface {
  type: ModalType
}

const initialState: initialStateInterface = {
  success: {
    isOpen: false
  },
  info: {
    isOpen: false
  },
  warning: {
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
