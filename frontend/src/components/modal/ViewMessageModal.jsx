import Modal from './Modal';
import { X } from 'lucide-react';
import Typography from '../Typography';

const ViewMessageModal = ({isOpen, title, message, onClose}) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className='p-6 flex flex-col items-center justify-center gap-0'>
                <div className='w-full flex items-center justify-between mb-6'>
                    <Typography variant='h5' weight='semibold'>{title}</Typography>
                    <X className='w-8 h-8 text-neutral-500' onClick={onClose} />
                </div>
                <div className='w-full max-h-60 min-h-50 overflow-y-scroll border border-neutral-400 rounded-md p-3 bg-neutral-50'>
                    <Typography variant='p' weight='medium'>{message}</Typography>
                </div>
            </div>
        </Modal>
    );
};

export default ViewMessageModal;
