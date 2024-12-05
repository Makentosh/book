'use client';
import React from 'react';
import Modal from '../Modal';
import './SuccessModal.scss';
import { useDispatch, useSelector } from 'react-redux';
import { closeModalSuccess } from '../../actions/modalActions';
import { RootState } from '../../store/rootReducer';
import SuccessModalContent from './SuccessModalContent';


const SuccessModal = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.modal.success.isOpen);

  let handleClose = () => {
    dispatch(closeModalSuccess());
  };

  return (
      <Modal isOpen={ isOpen }
             onRequestClose={ handleClose }>
        <SuccessModalContent/>
      </Modal>
  );
};

export default SuccessModal;
