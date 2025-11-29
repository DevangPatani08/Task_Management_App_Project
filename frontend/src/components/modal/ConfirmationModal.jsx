import Button from '../Button';
import Typography from '../Typography';
import Modal from './Modal';

const ConfirmationModal = ({isOpen, onClose, onConfirm, title, message}) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className='p-6'>
                <Typography variant='h5' weight='bold' className='mb-2'>{title}</Typography>
                <Typography variant='p' weight='regular' className='text-neutral-600 mb-2'>{message}</Typography>
                <div className='flex items-center justify-end space-x-3'>
                    <Button type='button' btnType='bgNone' handleClick={onClose}>Cancel</Button>
                    <Button type='button' btnType='danger' handleClick={onConfirm}>Delete</Button>
                </div>
            </div>
        </Modal>
    );
};

export default ConfirmationModal;