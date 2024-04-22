import React from 'react';
import ReactModal from 'react-modal';

function BoiteDeConfirmationCom({ isOpen, handleClose, handleConfirm }) {
    return (
        <ReactModal className={'BoiteDeConfirmationCom'}
            isOpen={isOpen}
            onRequestClose={handleClose}
            contentLabel="Confirmation-Commentaire"
            shouldCloseOnOverlayClick={true}
        >
            <div>
                <h6>Confirmez-vous l'envoi de ce commentaire ?</h6>
                <div className='LesBoutonsConfirm'>
                    <button className='OuiConfirm' onClick={handleConfirm}>Oui</button>
                    <button className='NonConfirm' onClick={handleClose}>Non</button>
                </div>
            </div>
        </ReactModal>
    );
}

export default BoiteDeConfirmationCom;
