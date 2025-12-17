import { useAuth } from '../../context/AuthContext';
import logo from '../../assets/Logo Light.svg';
import Typography from '../Typography';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
    const { user } = useAuth();
    const currentYear = new Date().getFullYear();
    
    <div className="min-h-screen w-full relative"></div>

    return (
        <footer className='w-full h-fit px-6 py-10 lg:px-16 lg:pt-20 lg:pb-10 bg-primary-100'>
        {/* <footer className='w-full h-fit px-6 py-10 lg:px-16 lg:pt-20 lg:pb-10 ' style={{ background: "radial-gradient(125% 125% at 50% 0%, oklch(98.4% 0.003 247.858) 40%, oklch(58.5% 0.233 277.117) 100%)" }}> */}
            <div className='container mx-auto space-y-12 z-2'>
                <div className='flex items-center justify-between'>
                    <a href='/' className='-m-1.5 p-1.5'>
                        <span className='sr-only'>My Company</span>
                        <img src={logo} alt="MOMENTUM" className='w-auto h-8 object-cover' />
                    </a>

                    <div className='flex items-center justify-center gap-6 lg:gap-12'>
                        {user && <a href='/tasks' className='w-max font-medium text-neutral-600 hover:text-primary-600 transition-colors duration-200 ease-in-out'>My Tasks</a>}
                        <a href='/#why-us' className='w-max font-medium text-neutral-600 hover:text-primary-600 transition-colors duration-200 ease-in-out'>Why Us</a>
                        <a href='/#about' className='w-max font-medium text-neutral-600 hover:text-primary-600 transition-colors duration-200 ease-in-out'>About Us</a>
                        <a href='/#faqs' className='w-max font-medium text-neutral-600 hover:text-primary-600 transition-colors duration-200 ease-in-out'>FAQs</a>
                        <a href='/contact' className='w-max font-medium text-neutral-600 hover:text-primary-600 transition-colors duration-200 ease-in-out'>Get in touch</a>
                    </div>

                    <div className='flex items-center justify-end gap-2'>
                        <Link to='/' className='p-2 rounded-full hover:text-white hover:bg-primary-500 transition-colors duration-200 ease-in-out'><Facebook className='w-5.5 h-5.5 stroke-[1.25px]' /></Link>
                        <Link to='/' className='p-2 rounded-full hover:text-white hover:bg-primary-500 transition-colors duration-200 ease-in-out'><Linkedin className='w-5.5 h-5.5 stroke-[1.25px]' /></Link>
                        <Link to='/' className='p-2 rounded-full hover:text-white hover:bg-primary-500 transition-colors duration-200 ease-in-out'><Instagram className='w-5.5 h-5.5 stroke-[1.25px]' /></Link>
                        <Link to='/' className='p-2 rounded-full hover:text-white hover:bg-primary-500 transition-colors duration-200 ease-in-out'><Twitter className='w-5.5 h-5.5 stroke-[1.25px]' /></Link>
                    </div>
                </div>
                <div className='w-full pt-8 flex flex-col lg:flex-row items-center justify-center gap-2.5 border-t border-neutral-400'>
                    <Typography variant='p' weight='regular' className='w-full text-center text-neutral-800'>&copy; Momentum {currentYear} by Devang Patani. All rights reserved.</Typography>
                </div>
            </div>
        </footer>
    );
};

export default Footer;