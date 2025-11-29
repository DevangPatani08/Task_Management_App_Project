import Typography from '../Typography.jsx';

const PageFooter = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className='w-full h-fit py-4 px-6 lg:px-20 fixed bottom-0 inset-x-0 z-50 flex items-center justify-center'>
            <Typography variant='p' className='w-full h-max text-center text-neutral-600'>&copy; Momentum {currentYear} by Devang Patani. All rights reserved.</Typography>
        </footer>
    );
};

export default PageFooter;