import React from 'react';
import './Modal.scss';
import ReactModal from 'react-modal';

interface ReactModalTypes {
  size?: string;
  children?: React.ReactNode;
  title?: string;
  isOpen: boolean;
  onRequestClose: () => void;
}

ReactModal.setAppElement('body');


const Modal: React.FC<ReactModalTypes> = ({
                                            size,
                                            children = null,
                                            title = null,
                                            isOpen = false,
                                            onRequestClose = () => {
                                            },
                                            ...props
                                          }) => {

  return (
      <ReactModal isOpen={ isOpen }
                  { ...props }
                  closeTimeoutMS={ 500 }
                  ariaHideApp={false}
                  onRequestClose={ onRequestClose }
                  className={ `modal 
                  ${ size ? `modal--${ size }` : '' }` }
                  overlayClassName="overlay">
        <div className="modal__content">
          <div className="modal__close"
               onClick={ onRequestClose }/>

          <div className="modal__body">
            { children }
          </div>
        </div>
      </ReactModal>
  );
};

export default Modal;
