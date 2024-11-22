import { open, close } from '../store/modalSlice';
import { INFO, SUCCESS } from '../components/Constants';
import { AppDispatch } from '../store/rootReducer';

export const openModalSuccess = () => (dispatch: AppDispatch) => {
  dispatch(open({ type: SUCCESS }));
};

export const closeModalSuccess = () => (dispatch: AppDispatch) => {
  dispatch(close({ type: SUCCESS }));
};

export const openModalInfo = () => (dispatch: AppDispatch) => {
  dispatch(open({ type: INFO }));
};

export const closeModalInfo = () => (dispatch: AppDispatch) => {
  dispatch(close({ type: INFO }));
};
