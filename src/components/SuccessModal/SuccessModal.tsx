import React from 'react';
import Modal from '../Modal';
import {useDispatch, useSelector} from 'react-redux';
import {closeModalSuccess} from '../../actions/modalActions';
import {RootState} from '../../reducer/rootReducer'

const SuccessModal = ({...props}) => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.modal.success.isOpen);
  // const description = useSelector(state => state.modal.success.payload);

  let handleClose = () => {
    dispatch(closeModalSuccess());
  };

  return (
      <Modal isOpen={ isOpen }
             onRequestClose={ handleClose }
             title={ 'Спасибо!' }>
          <div>SUCCESS</div>
        {/*<SuccessRequestDescription description={ description }/>*/}
      </Modal>
  );
};

export default SuccessModal;
