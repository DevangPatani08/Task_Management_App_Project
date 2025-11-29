import { ArrowLeftToLine } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Button from '../Button';

const PageHeader = () => {
    const navigate = useNavigate();
    return (
        <header className='w-full h-fit py-3 px-6 lg:px-20 fixed top-0 inset-x-0 z-50'>
            <nav className='w-full h-fit flex items-center'>
                <Button type='button' handleClick={() => navigate('/')} btnType='bgNone'>
                    <ArrowLeftToLine className='w-5 h-5' />
                    <span>Back</span>
                </Button>
            </nav>
        </header>
    );
};

export default PageHeader;