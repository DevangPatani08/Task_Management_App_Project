import React from 'react';
import Modal from './Modal';

const ConfirmationModal = ({ isOpen, onClose, onConfirm, title, message }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className="p-6">
                <h2 className='text-xl font-bold mb-2'>{title}</h2>
                <p className='text-gray-600 mb-6'>{message}</p>
                <div className="flex justify-end space-x-3">
                    <button onClick={onClose} type='button' className='px-4 py-2 border border-gray-400 rounded hover:bg-gray-50'>Cancel</button>
                    <button onClick={onConfirm} type='button' className='px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600'>Confirm</button>
                </div>
            </div>
        </Modal>
    );
};

export default ConfirmationModal;