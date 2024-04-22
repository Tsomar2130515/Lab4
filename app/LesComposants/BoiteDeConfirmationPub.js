import React from 'react';
import ReactModal from 'react-modal';

function BoiteDeConfirmationPub({ isOpen, handleClose, handleConfirm }) {
    return (
        <ReactModal className={'BoiteDeConfirmation'}
            isOpen={isOpen}
            onRequestClose={handleClose}
            contentLabel="Confirmation-Ajout-Publication"
            shouldCloseOnOverlayClick={true}
        >
            <div>
                <h6>Confirmez-vous l'envoi de cette publication ?</h6>
                <div className='LesBoutonsConfirm'>
                    <button className='OuiConfirm' onClick={handleConfirm}>Oui</button>
                    <button className='NonConfirm' onClick={handleClose}>Non</button>
                </div>
            </div>
        </ReactModal>
    );
}

export default BoiteDeConfirmationPub;
