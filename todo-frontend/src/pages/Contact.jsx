import React from 'react';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { FaVideo, FaEnvelope, FaPhone } from 'react-icons/fa6';

const Contact = () => {
    return (
        <div>
            <main className='w-full min-h-screen'>
                <section className='w-full h-max px-3 md:px-16 py-10 md:py-28 bg-transparent mt-20 md:mt-25'>
                    <div className="container mx-auto flex flex-col lg:flex-row justify-center items-start gap-20">
                        <div className="w-full h-max">
                            <div className='w-full flex flex-col items-start justify-start gap-8'>
                                <div className='w-full flex flex-col justify-start items-start'>
                                    <h6 className='w-full text-left text-gray-900 font-medium capitalize text-lg/7'>Get In Touch</h6>
                                    <h2 className='w-full text-left text-gray-900 font-bold text-5xl/12 mt-4 mb-6'>Tell Us Whats On Your Mind!</h2>
                                    <p className='w-full text-left text-gray-600 text-base/6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                                </div>
                                <form className='w-full h-max flex flex-col justify-start items-start gap-6'>
                                    <div className="w-full flex flex-col items-center justify-start gap-2">
                                        <label for='contact_name' className='w-full text-left text-gray-900 text-lg/7'>Name<span className='text-red-500'>*</span></label>
                                        <input type="text" name='contact_name' id='contact_name' placeholder='Jhon Doe' className='w-full p-4 bg-white rounded border-gray-400 border-1 focus:outline-none focus:border-indigo-500 focus:text-gray-700' />
                                    </div>
                                    <div className="w-full flex flex-col items-center justify-start gap-2">
                                        <label for='contact_email' className='w-full text-left text-gray-900 text-lg/7'>Email<span className='text-red-500'>*</span></label>
                                        <input type="text" name='contact_email' id='contact_email' placeholder='jhondoe@gmail.com' className='w-full p-4 bg-white rounded border-gray-400 border-1 focus:outline-none focus:border-indigo-500 focus:text-gray-700' />
                                    </div>
                                    <div className="w-full flex flex-col items-center justify-start gap-2">
                                        <label for='contact_message' className='w-full text-left text-gray-900 text-lg/7'>Message<span className='text-red-500'>*</span></label>
                                        <textarea name="contact_message" id="contact_message" cols="30" rows="10" placeholder='Message' className='w-full p-4 bg-white rounded border-gray-400 border-1 focus:outline-none focus:border-indigo-500 focus:text-gray-700'></textarea>
                                    </div>
                                    <button type="submit" className='w-fit bg-indigo-500 text-base/6 font-bold text-white px-6 py-3 rounded hover:bg-indigo-700 transition-all duration-300 ease-in-out'>Submit</button>
                                </form>
                            </div>
                        </div>
                        <div className="w-full h-fit flex justify-center items-center">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3761.627371765292!2d72.80495937594267!3d19.471626239432045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7a9f4fcf0ad47%3A0xe114fbbb6c86ebd1!2sBachraj%20Landmark%2C%20Evershine%20Globle%20City%2C%20Dongarpada%2C%20Rustomjee%20Global%20City%2C%20Virar%20West%2C%20Virar%2C%20Maharashtra%20401303!5e0!3m2!1sen!2sin!4v1760245835111!5m2!1sen!2sin" loading="lazy" className='w-full h-[400px] lg:h-[750px]'></iframe>
                        </div>
                    </div>
                </section>
                <section className='w-full h-max px-3 md:px-16 py-10 md:py-28 flex flex-col justify-center items-center'>
                    <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-12">
                        <div className="col-span-1 flex flex-col items-start justify-center lg:justify-start gap-6">
                            <div className="w-full flex items-start justify-center lg:justify-start">
                                <FaEnvelope size={48} className='text-indigo-500' />
                            </div>
                            <h4 className='w-full text-center lg:text-left text-gray-900 text-3xl/9 font-bold'>Email</h4>
                            <p className='w-full text-center lg:text-left text-gray-600 text-base/6'>Drop us a line! Our team reads every message and aims to respond within 24 hours.</p>
                            <Link to='/' className='w-full text-center lg:text-left text-blue-500 text-base/6 underline'>devang.patani0806@gmail.com</Link>
                        </div>
                        <div className="col-span-1 flex flex-col items-start justify-center lg:justify-start gap-6">
                            <div className="w-full flex items-start justify-center lg:justify-start">
                                <FaVideo size={48} className='text-indigo-500' />
                            </div>
                            <h4 className='w-full text-center lg:text-left text-gray-900 text-3xl/9 font-bold'>Live Chat</h4>
                            <p className='w-full text-center lg:text-left text-gray-600 text-base/6'>Get instant answers from our team during business hours.</p>
                            <Link to='/' className='w-full text-center lg:text-left text-blue-500 text-base/6 underline' >+91 97572-46416</Link>
                        </div>
                        <div className="col-span-1 flex flex-col items-start justify-center lg:justify-start gap-6">
                            <div className="w-full flex items-start justify-center lg:justify-start">
                                <FaPhone size={48} className='text-indigo-500' />
                            </div>
                            <h4 className='w-full text-center lg:text-left text-gray-900 text-3xl/9 font-bold'>Phone</h4>
                            <p className='w-full text-center lg:text-left text-gray-600 text-base/6'>Prefer to talk it out? Schedule a call with our support team.</p>
                            <Link to='/' className='w-full text-center lg:text-left text-blue-500 text-base/6 underline'>+91 97572-46416</Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Contact;