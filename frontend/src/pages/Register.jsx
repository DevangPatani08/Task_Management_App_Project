import React, { useState } from 'react';
import InputField from '../components/InputField';
import Typography from '../components/Typography';
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/Button';

const Register = () => {
    const [formData, setFormData] = useState({ username: '', email: '', password: '', confirmPassword: '' });
    const [errors, setErrors] = useState({});
    const [showPass, setShowPass] = useState(false);
    const [showConfirmPass, setShowConfirmPass] = useState(false);
    const [loading, setLoading] = useState(false);
    const { register } = useAuth();
    const navigate = useNavigate();
    const maxReq = 5;
    
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        
        if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: '' });
    };

    const validPassStr = (password) => {
        const req = {
            minLen: password.length >= 8,
            hasUpper: /[A-Z]/.test(password),
            hasLower: /[a-z]/.test(password),
            hasNumber: /\d/.test(password),
            hasSpChar: /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password),
        };
        
        return (req);
    };
    
    const passReq = formData.password ? validPassStr(formData.password) : null;
    const passStrength = passReq ? Object.values(passReq).filter(Boolean).length : 0;

    const getPassStrMsg = (req) => {
        const msg = [];
        if (!req.minLen) msg.push('Password must be at least 8 characters long');
        if (!req.hasUpper) msg.push('one uppercase letter is required');
        if (!req.hasLower) msg.push('one lowercase letter is required');
        if (!req.hasNumber) msg.push('one numerical value is required');
        if (!req.hasSpChar) msg.push('one special character is required');

        return (msg.length > 0 ? `Password must container ${msg.join(', ')}` : 'Password is strong enough');
    };

    const validateForm = () => {
        const errs = {};

        // username validation
        if (!formData.username) {
            errs.username = 'Name is a required field!...';
        } else if (formData.username.length < 3) {
            errs.username = 'Name must be at least 3 characters!...';
        }
        
        // email validation
        if (!formData.email) {
            errs.email = 'Email is a required field!...';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errs.email = 'Enter a valid email!...';
        }
        
        // password validation
        if (!formData.password) {
            errs.password = 'Password is a required field!...';
        } else {
            const passReq = validPassStr(formData.password);
            const isStrong = Object.values(passReq).every(req => req);
            
            if (!isStrong) {
                errs.password = getPassStrMsg(passReq);
            }
        }
        // confirm password validation
        if (!formData.confirmPassword) {
            errs.confirmPassword = 'Confirming your password is mandatory!...';
        } else if (formData.confirmPassword !== formData.password) {
            errs.confirmPassword = 'Both password entries must match!...';
        }

        setErrors(errs);
        return (Object.keys(errs).length === 0)
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        setLoading(true);
        setErrors({});

        try {
            await register({
                username: formData.username,
                email: formData.email,
                password: formData.password,
                confirmPassword: formData.confirmPassword
            });
            navigate('/tasks');
            window.scrollTo({ top: 0, behavior: 'instant' });
        } catch (error) {
            setErrors({ submit: error.response?.data?.message || error.message || 'Registration failed. Please try again later!...' });
        } finally {
            setLoading(false);
        }
    };


    return (
        <div className='w-full flex-1 background-custom section'>
            <div className='wrapper flex-1 flex items-center justify-center'>
                <div className='w-full flex flex-col items-center justify-start max-w-lg gap-6 p-6 backdrop-blur-lg rounded-md shadow-lg'>
                    <Typography variant='h2' weight='bold' className='w-full text-center'>Register</Typography>
                    <form onSubmit={handleSubmit} className='w-full flex flex-col items-start justify-center gap-4.5'>
                        
                        <InputField type='text' name='username' id='username' value={formData.username} onChange={handleChange} placeholder='Full Name (Jhon Doe)' icon='User' errorMsg={errors.username} required />
                        
                        <InputField type='email' name='email' id='email' value={formData.email} onChange={handleChange} placeholder='Enter Email (jhon.doe@gmail.com)' icon='Mail' errorMsg={errors.email} required />
                        
                        <div className='w-full flex flex-col items-start justify-start'>
                            <InputField inType='P' type='password' name='password' id='password' value={formData.password} onChange={handleChange} placeholder='Enter Password' icon='Lock' errorMsg={errors.password} showPass={showPass} setShowPass={setShowPass} required />
                            {formData.password && (
                                <div className='w-full mt-2'>
                                    <div className='flex justify-between text-xs mb-1'>
                                        <span>Password Strength:</span>
                                        <span>{passStrength}/{maxReq}</span>
                                    </div>
                                    <div className='w-full h-2 rounded-full bg-neutral-200'>
                                        <div className={`h-2 rounded-full ${passStrength <= 2 ? 'bg-red-500' : passStrength <= 3 ? 'bg-yellow-500' : passStrength <= 4 ? 'bg-blue-500' : 'bg-green-500'}`} style={{width: `${((passStrength/maxReq) * 100)}%`}}></div>
                                    </div>
                                    <div className='text-sx text-neutral-600 mt-1'>{formData.password && getPassStrMsg(passReq)}</div>
                                </div>
                            )}
                        </div>

                        <InputField inType='P' type='password' name='confirmPassword' id='confirmPassword' value={formData.confirmPassword} onChange={handleChange} placeholder='Confirm your password' icon='Lock' errorMsg={errors.confirmPassword} showPass={showConfirmPass} setShowPass={setShowConfirmPass} required />
                        
                        <Button type='submit' btnType='primaryFW' disabled={loading}>
                            {loading ? 'Creating your account now!...' : 'Register Now'}
                        </Button>
                        <Typography variant='p' weight='regular' className='w-full h-max text-center py-4'>Already have an account! <Link to='/login' className='text-primary-500 underline font-semibold'>Login Now</Link></Typography>

                        {errors.submit && (
                            <div className='mt-1 w-full h-fit rounded-md bg-red-50 p-4 border border-red-500 flex items-center justify-center'>
                                <span className='text-red-700 text-sm font-semibold'>{errors.submit}</span>
                            </div>
                        )}
                    </form>
                </div>
                
            </div>
        </div>
    );
};

export default Register;