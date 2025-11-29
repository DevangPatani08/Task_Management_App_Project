import { useAuth } from '../../context/AuthContext';
import logo from '../../assets/Logo Light.svg';
import Typography from '../Typography';
import companyName from '../../assets/CompanyText.svg';

const Footer = () => {
    const { user } = useAuth();
    const currentYear = new Date().getFullYear();
    
    return (
        <footer className='w-full h-fit bg-primary-200 px-6 py-10 lg:px-16 lg:py-20'>
            <div className='container mx-auto space-y-12'>
                <div className='w-full flex flex-col md:flex-row items-center justify-between gap-6'>
                    <div className='w-full md:w-5/12 flex flex-col items-center md:items-start justify-start gap-6'>
                        <a href='/' className='-m-1.5 p-1.5'>
                            <span className='sr-only'>My Company</span>
                            <img src={logo} alt="MOMENTUM" className='w-auto h-8 object-cover' />
                        </a>

                        <div className='flex items-center justify-start gap-6 lg:gap-12'>
                            {user && <a href='/tasks' className='w-max text-neutral-600 hover:text-primary-500 transition-colors duration-200 ease-in-out'>My Tasks</a>}
                            <a href='/#why-us' className='w-max text-neutral-600 hover:text-primary-500 transition-colors duration-200 ease-in-out'>Why Us</a>
                            <a href='/#about' className='w-max text-neutral-600 hover:text-primary-500 transition-colors duration-200 ease-in-out'>About Us</a>
                            <a href='/#faqs' className='w-max text-neutral-600 hover:text-primary-500 transition-colors duration-200 ease-in-out'>FAQs</a>
                            <a href='/contact' className='w-max text-neutral-600 hover:text-primary-500 transition-colors duration-200 ease-in-out'>Get in touch</a>
                        </div>
                    </div>
                    <div className='w-full md:w-5/12 flex flex-col items-end justify-end'>
                        <Typography variant='p' weight='bold' className='w-full text-center md:text-left uppercase text-primary-500 mb-4'>Subscribe</Typography>
                        <div className='w-full flex flex-col lg:flex-row gap-4 items-center md:items-start justify-center mb-3'>
                            <input type="email" name="subEmail" id="subEmail" className='bg-white text-neutral-700 text-base px-6 py-3 w-full rounded focus:outline-primary-500 focus:text-neutral-900 focus:outline-1 border-none cursor-pointer transition-colors duration-200 ease-in-out' placeholder='Enter your email' />
                            <button type='submit' className='w-full lg:w-fit flex items-center justify-center text-center text-base text-white font-bold px-6 py-3 bg-primary-500 text-white hover:bg-primary-700 rounded transition-colors duration-200 ease-in'>
                                <span className='w-max'>Subscribe</span>
                            </button>
                        </div>
                        <p className='w-full text-center lg:text-left text-neutral-700 text-xs'>By subscribing you agree to & with our <a href='/' className='font-semibold underline text-neutral-900'>Privacy Policy</a></p>
                    </div>
                </div>
                <div className='w-full flex flex-col items-center justify-start gap-6 lg:gap-16'>
                    <img src={companyName} alt="MOMENTUM" className='w-full h-auto object-cover' />

                    <div className='w-full pt-8 flex flex-col lg:flex-row items-center justify-between gap-2.5 border-t border-neutral-400'>
                        <div className='w-full lg:w-1/2 flex-col lg:flex-row items-baseline justify-center lg:justify-start md:space-x-6'>
                            <a href='/' className='w-full text-center md:w-max md:text-left text-base font-semibold text-neutral-900 underline'>Privacy Policy</a>
                            <a href='/' className='w-full text-center md:w-max md:text-left text-base font-semibold text-neutral-900 underline'>Terms of Service</a>
                            <a href='/' className='w-full text-center md:w-max md:text-left text-base font-semibold text-neutral-900 underline'>Cookies Settings</a>
                        </div>
                        <Typography variant='p' weight='regular' className='w-full lg:w-1/2 text-center lg:text-right text-neutral-900'>&copy; Momentum {currentYear} by Devang Patani. All rights reserved.</Typography>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;