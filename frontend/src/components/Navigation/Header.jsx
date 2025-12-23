import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import logo from '../../assets/Logo Light.svg';
import { useAuth } from '../../context/AuthContext';
import Button from '../Button';
import { LogOut, Menu, X } from 'lucide-react';

const Header = () => {
    const { user, logout } = useAuth();
    const [activeLink, setActiveLink] = useState('home');
    const navigate = useNavigate();
    const location = useLocation();

    const sectionId = ['home', 'how-it-works', 'why-us', 'about', 'faqs', 'contact', 'tasks'];

    useEffect(() => {
        if (location.pathname === '/') {
            const options = { root: null, rootMargin: '-20% 0px -60% 0px', threshold: 0 };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) setActiveLink(entry.target.id);
                });
            }, options);

            sectionId.forEach(id => {
                const element = document.getElementById(id);
                if (element) observer.observe(element);
            });

            return (() => observer.disconnect());
        } else {
            const currentPage = location.pathname.replace('/', '');
            setActiveLink(currentPage);
        }
    }, [location.pathname]);

    const handleSectionClick = (e, sectionId) => {
        e.preventDefault();

        const id = sectionId.replace('#', '');

        setActiveLink(id);

        const element = document.getElementById(id);

        if (element) {
            const setOffset = element.offsetTop - document.getElementById('header').style.height;
            window.scrollTo({ top: setOffset, behavior: 'smooth' });
        } else {
            navigate('/');
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) {
                    const setOffset = element.offsetTop - document.getElementById('header').style.height;
                    window.scrollTo({ top: setOffset, behavior: 'smooth' });
                }
            }, 100);
        }
    };

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    const isActive = (linkId) => {
        return (activeLink === linkId.replace('#', ''));
    };

    const handlePageChange = (path) => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setActiveLink(path.replace('/', ''));
        navigate(path);
    };

    return (
        <header id='header' className='fixed top-0 inset-x-0 z-50 bg-white shadow-md py-4 px-6 lg:px-16'>
            <nav aria-label='Global' className='flex items-center justify-between container mx-auto'>
                <div className="flex lg:flex-1">
                    <Link to='/' className='-m-1.5 p-1.5' onClick={() => setActiveLink('home')}>
                        <span className='sr-only'>My Company</span>
                        <img src={logo} alt="MOMENTUM" className='w-auto h-8 object-cover' />
                    </Link>
                </div>

                <div className='hidden xl:flex xl:gap-12'>
                    <HashLink to='/' onClick={() => { handlePageChange('/'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className={`transition-colors duration-200 ease-in-out ${isActive('home') ? 'text-primary-500 font-semibold' : 'text-neutral-600 hover:text-primary-500'}`}>Home</HashLink>
                    {user && <HashLink to='/tasks' onClick={() => handlePageChange('/tasks')} className={`transition-colors duration-200 ease-in-out ${isActive('tasks') ? 'text-primary-500 font-semibold' : 'text-neutral-600 hover:text-primary-500'}`}>My Tasks</HashLink>}
                    <HashLink to='/#how-it-works' onClick={(e) => handleSectionClick(e, 'how-it-works')} className={`transition-colors duration-200 ease-in-out ${isActive('how-it-works') ? 'text-primary-500 font-semibold' : 'text-neutral-600 hover:text-primary-500'}`}>Process</HashLink>
                    <HashLink to='/#why-us' onClick={(e) => handleSectionClick(e, 'why-us')} className={`transition-colors duration-200 ease-in-out ${isActive('why-us') ? 'text-primary-500 font-semibold' : 'text-neutral-600 hover:text-primary-500'}`}>Why Us</HashLink>
                    <HashLink to='/#about' onClick={(e) => handleSectionClick(e, 'about')} className={`transition-colors duration-200 ease-in-out ${isActive('about') ? 'text-primary-500 font-semibold' : 'text-neutral-600 hover:text-primary-500'}`}>About Us</HashLink>
                    <HashLink to='/#faqs' onClick={(e) => handleSectionClick(e, 'faqs')} className={`transition-colors duration-200 ease-in-out ${isActive('faqs') ? 'text-primary-500 font-semibold' : 'text-neutral-600 hover:text-primary-500'}`}>FAQs</HashLink>
                    <HashLink to='/contact' onClick={() => handlePageChange('/contact')} className={`transition-colors duration-200 ease-in-out ${isActive('contact') ? 'text-primary-500 font-semibold' : 'text-neutral-600 hover:text-primary-500'}`}>Get in touch</HashLink>
                </div>

                <div className='hidden xl:flex xl:flex-1 justify-end items-center gap-6'>
                    {user ? (
                        <Button type='button' btnType='bgNone' handleClick={handleLogout}>
                            <span>Logout</span>
                            <LogOut className='w-5 h-5'/>
                        </Button>
                    ) : (
                        <Button type='button' btnType='primary' handleClick={() => navigate('/login')}>
                            Get Started
                        </Button>
                    )}
                </div>

                <div className='flex xl:hidden'>
                    <Button type='button' btnType='iconsSquare' command='show-modal' commandfor='mobile-menu'>
                        <span className='sr-only'>Open main menu</span>
                        <Menu className='w-5 h-5' />
                    </Button>
                </div>
            </nav>
            <el-dialog>
                <dialog id='mobile-menu' className='backdrop:bg-transparent xl:hidden'>
                    <div tabIndex='0' className='fixed inset-0 focus:outline-none'>
                        <el-dialog-panel className='fixed inset-y-0 right-0 z-50 p-6 w-full overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-neutral-900/10'>
                            <div className='flex items-center justify-between'>
                                <a href='/' className='-m-1.5 p-1.5 cursor-pointer'>
                                    <span className='sr-only'>My Company</span>
                                    <img src={logo} alt='MOMENTUM' className='w-auto h-8 object-cover'/>
                                </a>

                                <Button type='button' btnType='iconsBgNone' command='close' commandfor='mobile-menu'>
                                    <span className='sr-only'>Close</span>
                                    <X className='w-8 h-8'/>
                                </Button>
                            </div>
                            <div className='mt-6 flow-root'>
                                <div className='-my-6 divide-y divide-neutral-400'>
                                    <div className='space-y-2 py-6'>
                                        <a href='/' className={`-mx-3 block rounded-md px-3 py-2 text-base font-semibold transition-colors duration-200 ease-in-out ${isActive('home') ? 'text-white bg-primary-500 hover:bg-primary-400' : 'text-neutral-600 hover:text-primary-800 hover:bg-primary-50'}`}>Home</a>
                                        {user && <a href='/tasks' className={`-mx-3 block rounded-md px-3 py-2 text-base font-semibold transition-colors duration-200 ease-in-out ${isActive('tasks') ? 'text-white bg-primary-500 hover:bg-primary-400' : 'text-neutral-600 hover:text-primary-800 hover:bg-primary-50'}`}>My Tasks</a>}
                                        <a href='/#how-it-works' className={`-mx-3 block rounded-md px-3 py-2 text-base font-semibold transition-colors duration-200 ease-in-out ${isActive('how-it-works') ? 'text-white bg-primary-500 hover:bg-primary-400' : 'text-neutral-600 hover:text-primary-800 hover:bg-primary-50'}`}>Process</a>
                                        <a href='/#why-us' className={`-mx-3 block rounded-md px-3 py-2 text-base font-semibold transition-colors duration-200 ease-in-out ${isActive('why-us') ? 'text-white bg-primary-500 hover:bg-primary-400' : 'text-neutral-600 hover:text-primary-800 hover:bg-primary-50'}`}>Why Us</a>
                                        <a href='/#about' className={`-mx-3 block rounded-md px-3 py-2 text-base font-semibold transition-colors duration-200 ease-in-out ${isActive('about') ? 'text-white bg-primary-500 hover:bg-primary-400' : 'text-neutral-600 hover:text-primary-800 hover:bg-primary-50'}`}>About Us</a>
                                        <a href='/#faqs' className={`-mx-3 block rounded-md px-3 py-2 text-base font-semibold transition-colors duration-200 ease-in-out ${isActive('faqs') ? 'text-white bg-primary-500 hover:bg-primary-400' : 'text-neutral-600 hover:text-primary-800 hover:bg-primary-50'}`}>FAQs</a>
                                        <a href='/contact' className={`-mx-3 block rounded-md px-3 py-2 text-base font-semibold transition-colors duration-200 ease-in-out ${isActive('contact') ? 'text-white bg-primary-500 hover:bg-primary-400' : 'text-neutral-600 hover:text-primary-800 hover:bg-primary-50'}`}>Get in touch</a>
                                    </div>
                                    <div className='py-6'>
                                        {user ? (
                                            <Button type='button' btnType='bgNoneFW' handleClick={handleLogout}>
                                                <span>Logout</span>
                                                <LogOut className='w-5 h-5'/>
                                            </Button>
                                        ) : (
                                            <Button type='button' btnType='primaryFW' handleClick={() => navigate('/login')}>
                                                Get Started
                                            </Button>
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

export default Header;