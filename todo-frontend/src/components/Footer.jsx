import React from 'react';
import logo from '../assets/Logo Light.svg';
import companyName from '../assets/CompanyText.svg';

const Footer = () => {
    return (
        <footer className='w-full h-fit bg-indigo-200 px-6 py-10 lg:px-16 lg:py-20'>
            <div className="container mx-auto space-y-12">
                <div className="w-full flex flex-col md:flex-row items-start justify-between gap-6">
                    <div className='w-full md:w-5/12 flex flex-col items-center md:items-start justify-start gap-6'>
                        <a href="/" className='-m-1.5 p-1.5'>
                            <span className='sr-only'>Your Company</span>
                            <img src={logo} alt="Momentum" className='h-10 w-auto' />
                        </a>
                        <div className='flex items-center justify-start gap-x-6 lg:gap-x-12'>
                            <a className='w-max hover:text-indigo-500 transition-all duration-300 ease-in-out' href="#why-us">Why Us</a>
                            <a className='w-max hover:text-indigo-500 transition-all duration-300 ease-in-out' href="#about">About Us</a>
                            <a className='w-max hover:text-indigo-500 transition-all duration-300 ease-in-out' href="#faqs">FAQs</a>
                            <a className='w-max hover:text-indigo-500 transition-all duration-300 ease-in-out' href="#get-in-touch">Get in touch</a>
                        </div>
                    </div>
                    <div className='w-full md:w-5/12 flex flex-col items-end justify-end'>
                        <p className='w-full text-base/6 text-center md:text-left font-bold text-indigo-500 mb-4'>Subsrcibe</p>
                        <div className='w-full flex flex-col lg:flex-row items-center md:items-start justify-start gap-4 mb-3'>
                            <input type="email" name="subscribeEmail" id="subscribeEmail" placeholder='Enter your email' className='bg-white text-gray-700 text-base/6 px-6 py-3 w-full rounded focus:outline-indigo-500 focus:text-gray-900 focus:outline-1 border-none cursor-pointer' />
                            <button type="submit" className='w-full lg:w-fit flex items-center justify-center gap-2 text-center text-base/6 text-white font-bold px-6 py-3 bg-indigo-500 hover:bg-indigo-700 transition-all duration-300 ease-in-out rounded'>
                                <span className='w-max'>Subscribe</span>
                            </button>
                        </div>
                        <p className='w-full text-center lg:text-left text-gray-700 font-normal text-xs/4'>By subscribing you agree to with our <a href='/' className='font-semibold underline text-gray-900'>Privacy Policy</a></p>
                    </div>
                </div>
                <div className='w-full flex flex-col items-center justify-start gap-6 lg:gap-16'>
                    <img src={companyName} alt="Momentum" className='w-full h-auto' />

                    <div className='w-full pt-8 flex flex-col lg:flex-row items-center justify-between gap-2.5 border-t border-gray-400'>
                        <div className='w-full lg:w-1/2 flex flex-col md:flex-row items-center justify-center lg:justify-start md:space-x-6'>
                            <a href="/" className="w-full text-center md:w-max md:text-left text-base/6 font-semibold text-gray-900 underline">Privacy Policy</a>
                            <a href="/" className="w-full text-center md:w-max md:text-left text-base/6 font-semibold text-gray-900 underline">Terms of Service</a>
                            <a href="/" className="w-full text-center md:w-max md:text-left text-base/6 font-semibold text-gray-900 underline">Cookies Settings</a>
                        </div>
                        <p className='w-full lg:w-1/2 text-base/6 text-center lg:text-right text-gray-900'>© 2026 Devang Patani. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;