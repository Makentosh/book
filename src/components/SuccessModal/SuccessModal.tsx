"use client"
import React from 'react';
import Modal from '../Modal';
import './SuccessModal.scss';
import { useDispatch, useSelector } from 'react-redux';
import { closeModalSuccess } from '../../actions/modalActions';
import { RootState } from '../../reducer/rootReducer';

const SuccessModal = ({ ...props }) => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.modal.success.isOpen);

  let handleClose = () => {
    dispatch(closeModalSuccess());
  };

  return (
      <Modal isOpen={ isOpen }
             onRequestClose={ handleClose }
             title={ 'Thanks!' }>
        <div className={'success-modal__description'}>We will contact you shortly.</div>
      </Modal>
  );
};

export default SuccessModal;
