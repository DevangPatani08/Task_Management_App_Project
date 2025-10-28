import React, { useState } from 'react';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const { login } = useAuth();
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });

        // clear all error on start
        if (errors[e.target.name]) {
            setErrors({ ...errors, [e.target.name]: '' });
        }
    };

    // Form Validations
    const validateForm = () => {
        const newErrors = {};

        if (!formData.email) {
            newErrors.email = 'Email is a required field!...';
        } else if (!/\S+@\S+\.\S+/.test((formData.email))) {
            newErrors.email = 'Invalid Email Address!...';
        }

        if (!formData.password) {
            newErrors.password = 'Password is a required field!...';
        }

        setErrors(newErrors);

        return (Object.keys(newErrors).length === 0);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        setLoading(true);
        try {
            await login(formData);
            navigate('/tasks');
        } catch (error) {
            setErrors({
                submit: error.message || 'Login failed. Please try again!...'
            });
        } finally {
            setLoading(false);
        }
    };
    
    return (
        <main className='w-full min-h-screen max-h-screen px-3 md:px-20'>
            <div className='background-custom w-full container h-screen mx-auto flex flex-col items-center justify-center'>
                <div className="w-full h-max py-4 flex items-center justify-start">
                    <Link to='/' className='flex items-center justify-center gap-2 text-base/6 font-bold text-gray-600 py-2 rounded hover:text-indigo-700 transition-all duration-300 ease-in-out'><FaArrowLeftLong /><span>Back</span></Link>
                </div>
                <div className="w-full h-full flex items-center justify-center">
                    <div className='w-full max-w-lg flex flex-col items-start justify-center gap-8'>
                        <h2 className='w-full text-center text-gray-900 text-5xl/12 font-bold'>Login</h2>
                        <form className='w-full flex flex-col items-start justify-start gap-4' onSubmit={handleSubmit}>
                            <div className="w-full flex flex-col items-start justify-start gap-2">
                                <label for='email' className='w-full text-left text-gray-900 text-lg/7'>Email<span className='text-red-500'>*</span></label>
                                <input type="email" name='email' id='email' autoComplete='email' value={formData.email} onChange={handleChange} placeholder='jhondoe@gmail.com' className={`w-full p-4 bg-white rounded border-1 focus:outline-none focus:border-indigo-500 focus:text-gray-700 ${errors.email ? 'border-red-500' : 'border-gray-400'}`} />
                                {errors.email && (<p className='mt-1 text-sm text-red-600 text-left'>{errors.email}</p>)}
                            </div>
                            <div className="w-full flex flex-col items-start justify-start gap-2">
                                <label for='password' className='w-full text-left text-gray-900 text-lg/7'>Password<span className='text-red-500'>*</span></label>
                                <input type="password" name='password' id='password' autoComplete='current-password' value={formData.password} onChange={handleChange} placeholder='At least 8 characters' className={`w-full p-4 bg-white rounded border-1 focus:outline-none focus:border-indigo-500 focus:text-gray-700 ${errors.email ? 'border-red-500' : 'border-gray-400'}`} />
                                {errors.password && (<p className='mt-1 text-sm text-red-600 text-left'>{errors.password}</p>)}
                            </div>
                            {errors.submit && (
                                <div className='rounded-md bg-red-50 p-4'>
                                    <div className="text-sm text-red-700">{errors.submit}</div>
                                </div>
                            )}
                            <button type="submit" className='w-full bg-indigo-500 text-base/6 font-bold text-white px-6 py-3 rounded hover:bg-indigo-700 transition-all duration-300 ease-in-out' disabled={loading}>
                                {loading ? 'Logging in...' : 'Login'}
                            </button>
                            <p className='w-full h-max text-center py-4'>Don’t have an account? <Link to='/register' className='text-indigo-500 underline font-medium'>Create a account</Link></p>
                        </form>
                    </div>
                </div>
                <p className='w-full h-max text-center text-base/6 text-gray-900 py-6'>© 2026 Devang Patani. All rights reserved.</p>
            </div>
        </main>
    );
};

export default Login;