import React from 'react';
import Typography from '../components/Typography';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

const PageNotFound = () => {
    const navigate = useNavigate();
    return (
        <div className='w-full flex-1 flex flex-col items-center justify-center gap-0 text-center'>
            <Typography variant='h4' weight='bold' className='text-primary-500'>404</Typography>
            <Typography variant='h1' weight='bold'>Page not found</Typography>
            <Typography variant='p' weight='medium' className='text-neutral-400 text-pretty mt-4'>Sorry, we couldn't find the page you're looking for.</Typography>

            <div className='mt-6 flex items-center justify-center gap-6'>
                <Button type='button' btnType='primary' handleClick={() => { navigate('/');  window.scrollTo({top: 0, behavior: 'smooth'})}}>Go to home</Button>
                <Button type='button' btnType='secondary' handleClick={() => { navigate('/contact');  window.scrollTo({top: 0, behavior: 'smooth'})}}>Get Support</Button>
            </div>
        </div>
    );
};

export default PageNotFound;