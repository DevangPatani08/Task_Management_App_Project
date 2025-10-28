import React from 'react';
import Footer from '../components/Footer';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import Accordion from '../components/Accordion';
import { data } from '../data/data.json';

const Home = () => {
    return (
        <div>
            <main className='w-full min-h-screen'>
                <section id='home' className='w-full h-max px-3 md:px-16 py-10 md:py-28 bg-transparent mt-20 md:mt-25'>
                    <div className="container mx-auto flex flex-col justify-center items-start">
                        <div className='w-full flex items-center justify-center flex-wrap'>
                            <div className='w-fit lg:w-max h-fit flex items-center justify-center'>
                                <h1 className='w-max text-2xl/8 md:text-6xl/15 font-bold text-gray-900'>Stop Juggling</h1>
                                <DotLottieReact className='h-20 md:h-30 w-auto -mx-8' src="https://lottie.host/4b3148df-4e4c-4537-93c9-9d0885ce6532/m9uj411IcR.lottie" loop autoplay />
                            </div>
                            <h1 className='w-fit text-2xl/8 md:text-6xl/15 font-bold text-gray-900'>Your Tasks,</h1>
                        </div>
                        <h1 className='w-full text-2xl/8 md:text-6xl/15 font-bold text-center text-gray-900'>Start Building Your Momentum. Find Your</h1>
                        <div className='w-full flex items-center justify-center flex-wrap'>
                            <div className='w-fit lg:w-max h-fit flex items-center justify-center'>
                                <h1 className='w-max text-2xl/8 md:text-6xl/15 font-bold text-gray-900'>Flow and</h1>
                                <DotLottieReact className='h-16 md:h-30 w-auto' src="https://lottie.host/b94836c3-a7e0-4005-bea0-aa910942d79d/AwYkBYdL4h.lottie" loop autoplay />
                            </div>
                            <h1 className='w-fit text-2xl/8 md:text-6xl/15 font-bold text-gray-900'> Master Your Day.</h1>
                        </div>
                        <p className='w-full container mx-auto text-center mt-6 mb-8 text-xl/8 text-gray-600 font-medium'>The intuitive task manager that helps you build momentum, crush deadlines, and achieve your goals.</p>
                        <div className='w-full flex h-fit items-center justify-center'>
                            <Link to="/login" className="flex items-center justify-center gap-1 text-base/6 font-bold text-white bg-indigo-500 px-6 py-3 rounded hover:bg-indigo-700 transition-all duration-300 ease-in-out">Get Started</Link>
                        </div>
                    </div>
                </section>

                <section id='how-it-works' className='w-full h-max px-3 md:px-16 py-10 md:py-28 bg-transparent flex flex-col justify-center items-center'>
                    <div className="container mx-auto flex flex-col justify-center items-center gap-10 lg:gap-20">
                        <div className='w-full lg:max-w-3xl flex flex-col justify-center items-center'>
                            <h6 className='w-full text-center text-lg/7 md:text-xl/8 font-semibold text-gray-900 capitalize'>How it works</h6>
                            <h2 className='w-full text-center text-xl/8 md:text-5xl/12 font-bold text-gray-900 mt-4 mb-6'> Build Your Momentum in Four Simple Steps.</h2>
                            <p className='w-full text-center text-base/6 font-normal text-gray-600'>From a scattered list to a clear plan of action. Momentum helps you capture, organize, and conquer your tasks with a natural, flowing rhythm.</p>
                        </div>
                        <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-12'>
                            {data.how && data.how.map((item, index) => (
                                <div key={index} className="col-span-1 flex flex-col items-center justify-start gap-6 p-6">
                                    <h4 className='bg-indigo-100 rounded-full p-4 w-fit aspect-square text-indigo-500 text-3xl/9 font-semibold flex items-center justify-center'>{item.step}</h4>
                                    <h4 className='w-full text-center text-3xl/9 text-shadow-gray-900 font-semibold'>{item.title}</h4>
                                    <p className='w-full text-center text-base/6 text-gray-600'>{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section id='why-us' className='w-full h-max px-3 md:px-16 py-10 md:py-28 bg-transparent flex flex-col justify-center items-center'>
                    <div className="container mx-auto flex flex-col justify-center items-center gap-10 lg:gap-20">
                        <div className='w-full lg:max-w-3xl flex flex-col justify-center items-center'>
                            <h6 className='w-full text-center text-lg/7 md:text-xl/8 font-semibold text-gray-900 capitalize'>Why Choose Momentum?</h6>
                            <h2 className='w-full text-center text-xl/8 md:text-5xl/12 font-bold text-gray-900 mt-4 mb-6'>Find Clarity, Achieve More, and Finally Master Your Day.</h2>
                            <p className='w-full text-center text-base/6 font-normal text-gray-600'>Because productivity isn't about doing more—it's about doing what matters. Momentum provides the clarity and tools to focus your energy, so you can achieve more with less stress.</p>
                        </div>
                        <div className='w-full grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-12'>
                            {data.whyUs && data.whyUs.map((item, index) => (
                                <div key={index} className="col-span-1 flex flex-col items-center justify-start gap-6 p-6 hover:bg-white hover:translate-y-[-2px] rounded-lg transition-all duration-300 ease-in-out cursor-pointer">
                                    <div className='bg-indigo-500 rounded-full p-4 w-fit aspect-square text-white flex items-center justify-center'><span className="material-symbols-rounded icon">{item.icon}</span></div>
                                    <h4 className='w-full text-center text-3xl/9 text-shadow-gray-900 font-semibold'>{item.title}</h4>
                                    <p className='w-full text-center text-base/6 text-gray-600'>{item.text}</p>
                                </div>
                            ))}
                        </div>
                        <div className='w-full flex h-fit items-center justify-center'>
                            <Link to="/login" className="flex items-center justify-center gap-1 text-base/6 font-bold text-white bg-indigo-500 px-6 py-3 rounded hover:bg-indigo-700 transition-all duration-300 ease-in-out">Build Your Momentum Now!</Link>
                        </div>
                    </div>
                </section>
                
                <section id='about' className='w-full h-max px-3 md:px-16 py-10 md:py-28 bg-transparent flex flex-col justify-center items-center gap-20'>
                    <div className="container mx-auto flex flex-col lg:flex-row justify-center items-center gap-6 md:gap-12">
                        <div className='w-full lg:w-1/2 flex flex-col items-start justify-start'>
                            <h2 className='w-full text-center lg:text-left text-xl/8 md:text-5xl/12 font-bold text-shadow-gray-900 mb-4'>Our Driving Force</h2>
                            <p className='w-full lg:w-4/5 text-center lg:text-left text-sm/5 md:text-base/6 text-shadow-gray-600'>Fueled by the frustration of overwhelming task managers, we created Momentum. Our purpose is simple: to provide the clarity and tools you need to stop juggling tasks and start building real, meaningful momentum toward your goals.</p>
                            <h6 className='w-full lg:w-4/5 mt-16 text-left text-base/6 md:text-lg/7 text-indigo-500 bg-indigo-200 font-semibold p-6 border-l-4 border-indigo-500 rounded-lg italic'>“Sophistication lies in the flow, not the friction. Momentum is powerful enough to organize your ambitions, yet intuitive enough to get out of your way and let you build velocity.”
                            </h6>
                        </div>
                        <div className='w-full lg:w-1/2 grid grid-cols-2 gap-6'>
                            {data.about && data.about.map((item, index) => (
                                <div key={index} className='col-span-1 hover:bg-white hover:shadow-md rounded-lg flex flex-col items-center justify-center gap-4 p-6 transition-all duration-300 ease-in-out cursor-pointer'>
                                    <div className={`w-fit aspect-square flex items-center justify-center p-3 rounded-full ${item.color}`}><span className="material-symbols-rounded icon">{item.icon}</span></div>
                                    <h6 className="w-full text-center text-xl/8 font-bold text-gray-900">{item.title}</h6>
                                    <p className="w-full text-center text-lg/7 text-gray-600">{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                
                <section id='team' className='w-full h-max px-3 md:px-16 py-10 md:py-28 bg-transparent flex flex-col justify-center items-center'>
                    <div className="container mx-auto flex flex-col justify-center items-center gap-10 lg:gap-20">
                        <div className='w-full lg:max-w-3xl flex flex-col justify-center items-center'>
                            <h6 className='w-full text-center text-lg/7 md:text-xl/8 font-semibold text-gray-900 capitalize'>Our Team</h6>
                            <h2 className='w-full text-center text-xl/8 md:text-5xl/12 font-bold text-gray-900 mt-4 mb-6'>The Minds Behind the Momentum.</h2>
                            <p className='w-full text-center text-base/6 font-normal text-gray-600'>We're a diverse group of designers, developers, and productivity nerds united by one simple mission: to help you find focus and achieve your goals.</p>
                        </div>
                        <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12'>
                            {data.team && data.team.map((item, index) => (
                                <div key={index} className="col-span-1 flex flex-col items-center justify-start gap-6">
                                    <img src={item.img} alt={item.name} className='w-32 aspect-square rounded-full object-cover' />
                                    <div className='w-full flex flex-col items-center justify-center gap-4'>
                                        <div className='w-full flex flex-col items-center justify-center gap-0'>
                                            <h6 className='w-full text-center text-xl/8 capitalize text-shadow-gray-900 font-semibold'>{item.name}</h6>
                                            <p className='w-full text-center text-lg/7 text-gray-600'>{item.position}</p>
                                        </div>
                                        <p className='w-full text-center text-base/6 text-gray-600'>{item.description}</p>
                                    </div>
                                    <div className='w-full flex items-center justify-center gap-2'>
                                        <Link to={item.linkedIn} className='p-2 rounded text-gray-700 hover:text-white hover:bg-indigo-500 transition-all duration-300 ease-in-out'>
                                            <FaLinkedinIn size={24} />
                                        </Link>
                                        <Link to={item.twitter} className='p-2 rounded text-gray-700 hover:text-white hover:bg-indigo-500 transition-all duration-300 ease-in-out'>
                                            <FaXTwitter size={24} />
                                        </Link>
                                        <Link to={item.facebook} className='p-2 rounded text-gray-700 hover:text-white hover:bg-indigo-500 transition-all duration-300 ease-in-out'>
                                            <FaFacebookF size={24} />
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section id='cta' className='w-full h-max px-3 md:px-16 py-10 md:py-28 flex flex-col justify-center items-center bg-linear-[108deg] from-indigo-500 to-purple-500'>
                    <div className="container mx-auto flex flex-col justify-center items-center gap-10">
                        <div className='w-full flex flex-col justify-center items-center gap-2'>
                            <h2 className='w-full text-center text-xl/8 md:text-5xl/12 font-bold text-white mt-4 mb-6'>Ready to Boost Your Productivity?</h2>
                            <p className='w-full text-center text-base/6 md:text-lg/7 text-gray-200'>Join thousands of users who have transformed their task management with Momentum.</p>
                        </div>
                        <div className='w-full flex h-max items-center justify-center'>
                            <Link to="/login" className="text-base/6 font-bold text-indigo-500 bg-white px-6 py-3 rounded hover:shadow-xl transition-all duration-300 ease-in-out capitalize">Create Your Account Now!</Link>
                        </div>
                    </div>
                </section>

                <section id='faqs' className='w-full h-max px-3 md:px-16 py-10 md:py-28 bg-transparent flex flex-col justify-center items-center'>
                    <div className="container mx-auto flex flex-col justify-center items-center gap-10 lg:gap-20">
                        <div className='w-full lg:max-w-3xl flex flex-col justify-center items-center'>
                            <h6 className='w-full text-center text-lg/7 md:text-xl/8 font-semibold text-gray-900 capitalize'>FAQs</h6>
                            <h2 className='w-full text-center text-xl/8 md:text-5xl/12 font-bold text-gray-900 mt-4 mb-6'>Get Back to Your Momentum</h2>
                            <p className='w-full text-center text-base/6 font-normal text-gray-600'>Find quick answers to common questions about your account, features, and more so you can return to what matters most.</p>
                        </div>

                        <Accordion faqs={data.faqs} />

                        <div className="w-full flex flex-col justify-center items-center">
                            <h4 className="w-full text-center text-lg/7 md:text-3xl/9 font-semibold text-gray-900">Still have questions?</h4>
                            <p className="w-full text-center text-base/6 text-gray-600 mt-4 mb-6">We are only a message away! Lets talk it out.</p>
                            <Link onClick={() => window.scrollTo(0,0)} to="/contact" className="text-base/6 font-bold text-white bg-indigo-500 px-6 py-3 rounded hover:bg-indigo-700 transition-all duration-300 ease-in-out capitalize">Get In Touch</Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Home;