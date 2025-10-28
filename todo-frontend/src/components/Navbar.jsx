import logo from '../assets/Logo Light.svg';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { IoIosLogOut } from "react-icons/io";

const Navbar = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <header className='inset-x-0 top-0 z-50 bg-white shadow-sm fixed'>
            <nav aria-label='Global' className='flex items-center justify-between p-6 lg:px-16 container mx-auto'>
                <div className="flex lg:flex-1">
                    <a href="/" className='-m-1.5 p-1.5'>
                        <span className='sr-only'>Your Company</span>
                        <img src={logo} alt="Momentum" className='h-8 w-auto' />
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button type='button' command='show-modal' commandfor='mobile-menu' className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'>
                        <span className='sr-only'>Open main menu</span>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" data-slot="icon" aria-hidden="true" className="size-6">
                            <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
                <div className='hidden lg:flex lg:gap-x-12'>
                    {user && <a className='hover:text-indigo-500 transition-all duration-300 ease-in-out' href="/tasks">My Tasks</a>}
                    <a className='hover:text-indigo-500 transition-all duration-300 ease-in-out' href="/#how-it-works">Process</a>
                    <a className='hover:text-indigo-500 transition-all duration-300 ease-in-out' href="/#why-us">Why Us</a>
                    <a className='hover:text-indigo-500 transition-all duration-300 ease-in-out' href="/#about">About Us</a>
                    <a className='hover:text-indigo-500 transition-all duration-300 ease-in-out' href="/#faqs">FAQs</a>
                    <a className='hover:text-indigo-500 transition-all duration-300 ease-in-out' href="/contact">Get in touch</a>
                </div>
                {user ? (
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center gap-6">
                        <button type='button' className="flex items-center justify-center gap-1 text-base/6 font-bold text-gray-600 px-6 py-3 rounded hover:text-indigo-700 cursor-pointer transition-all duration-300 ease-in-out" onClick={handleLogout}>Logout <IoIosLogOut size={20} /></button>
                    </div>
                ): (
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center">
                        <Link to="/login" className="flex items-center justify-center gap-1 text-base/6 font-bold text-white bg-indigo-500 px-6 py-3 rounded hover:bg-indigo-700 transition-all duration-300 ease-in-out">Get Started</Link>
                    </div>
                )}
            </nav>
            <el-dialog>
                <dialog id='mobile-menu' className='backdrop:bg-transparent lg:hidden'>
                    <div tabIndex="0" className="fixed inset-0 focus:outline-none">
                        <el-dialog-panel className='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
                            <div className="flex items-center justify-between">
                                <Link to="/" className='-m-1.5 p-1.5'>
                                    <span className='sr-only'>Your Company</span>
                                    <img src={logo} alt="Momentum" className='h-8 w-auto' />
                                </Link>
                                <button type="button" command='close' commandfor='mobile-menu' className='-m-2.5 rounded-md p-2.5 text-gray-700'>
                                    <span className='sr-only'>Close</span>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" data-slot="icon" aria-hidden="true" className="size-6">
                                        <path d="M6 18 18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>
                            <div className="mt-6 flow-root">
                                <div className="-my-6 divide-y divide-gray-400">
                                    <div className="space-y-2 py-6">
                                        <a className='-mx-3 block rounded-lg px-3 py-2 text-base/6 font-semibold text-gray-900 hover:bg-indigo-50 hover:text-indigo-800 transition-all duration-300 ease-in-out' href="/">Home</a>
                                        { user && <a className='-mx-3 block rounded-lg px-3 py-2 text-base/6 font-semibold text-gray-900 hover:bg-indigo-50 hover:text-indigo-800 transition-all duration-300 ease-in-out' href="/tasks">My Tasks</a> }
                                        <a className='-mx-3 block rounded-lg px-3 py-2 text-base/6 font-semibold text-gray-900 hover:bg-indigo-50 hover:text-indigo-800 transition-all duration-300 ease-in-out' href="/#how-it-works">Process</a>
                                        <a className='-mx-3 block rounded-lg px-3 py-2 text-base/6 font-semibold text-gray-900 hover:bg-indigo-50 hover:text-indigo-800 transition-all duration-300 ease-in-out' href="/#why-us">Why Us</a>
                                        <a className='-mx-3 block rounded-lg px-3 py-2 text-base/6 font-semibold text-gray-900 hover:bg-indigo-50 hover:text-indigo-800 transition-all duration-300 ease-in-out' href="/#about">About Us</a>
                                        <a className='-mx-3 block rounded-lg px-3 py-2 text-base/6 font-semibold text-gray-900 hover:bg-indigo-50 hover:text-indigo-800 transition-all duration-300 ease-in-out' href="/#faqs">FAQs</a>
                                        <a className='-mx-3 block rounded-lg px-3 py-2 text-base/6 font-semibold text-gray-900 hover:bg-indigo-50 hover:text-indigo-800 transition-all duration-300 ease-in-out' href="/contact">Get in touch</a>
                                    </div>
                                    <div className="py-6">
                                        {user ? (
                                            <button type='button' className="w-full flex items-center justify-center gap-1 text-base/6 font-bold text-gray-600 px-6 py-3 rounded hover:text-indigo-700 cursor-pointer transition-all duration-300 ease-in-out" onClick={handleLogout}>Logout <IoIosLogOut size={20} /></button>
                                        ): (
                                            <a href="/login" className="-mx-3 flex items-center justify-center gap-1 rounded-lg text-base/6 font-bold text-center text-white bg-indigo-500 px-6 py-3 hover:bg-indigo-700 transition-all duration-300 ease-in-out">Get Started</a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </el-dialog-panel>
                    </div>
                </dialog>
            </el-dialog>
        </header>
    );
};

export default Navbar;