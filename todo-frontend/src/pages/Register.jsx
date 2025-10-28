import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { useAuth } from '../context/AuthContext';

const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const { register } = useAuth();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        
        // Clear error while typing
        if (errors[e.target.name]) {
            setErrors({ ...errors, [e.target.name]: '' });
        }
    };

    const validatePasswordStrength = (password) => {
        const requirements = {
            minLength: password.length >= 8,
            hasUpperCase: /[A-Z]/.test(password),
            hasLowerCase: /[a-z]/.test(password),
            hasNumbers: /\d/.test(password),
            hasSpecialChar: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)
        };

        return requirements;
    };

    const getPasswordStrengthMessage = (requirements) => {
        const messages = [];
        
        if (!requirements.minLength) messages.push('at least 8 characters');
        if (!requirements.hasUpperCase) messages.push('one uppercase letter');
        if (!requirements.hasLowerCase) messages.push('one lowercase letter');
        if (!requirements.hasNumbers) messages.push('one number');
        if (!requirements.hasSpecialChar) messages.push('one special character');
        
        return messages.length > 0 
            ? `Password must contain ${messages.join(', ')}`
            : 'Strong password';
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.username) {
            newErrors.username = 'Username is a required field!...';
        } else if (formData.username.length < 3) {
            newErrors.username = 'Username must be at least 3 characters!...';
        }

        if (!formData.email) {
            newErrors.email = 'Email is a required field!...';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid!...';
        }
        
        if (!formData.password) {
            newErrors.password = 'Password is a required field!...';
        } else {
            const passwordRequirements = validatePasswordStrength(formData.password);
            const isStrongPassword = Object.values(passwordRequirements).every(req => req);
            
            if (!isStrongPassword) {
                newErrors.password = getPasswordStrengthMessage(passwordRequirements);
            }
        }

        if (!formData.confirmPassword) {
            newErrors.confirmPassword = 'Please confirm your password!...';
        } else if (formData.confirmPassword !== formData.password) {
            newErrors.confirmPassword = 'Passwords do not match!...';
        }

        setErrors(newErrors);
        return (Object.keys(newErrors).length === 0);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        setLoading(true);
        try {
            await register({
                username: formData.username,
                email: formData.email,
                password: formData.password
            });
            navigate('/tasks');
        } catch (error) {
            setErrors({ submit: error.message || 'Registration failed. Please try again!...' });
        } finally {
            setLoading(false);
        }
    };

    // Calculate password strength for visual feedback
    const passwordRequirements = formData.password ? validatePasswordStrength(formData.password) : null;
    const passwordStrength = passwordRequirements ? Object.values(passwordRequirements).filter(Boolean).length : 0;
    const maxRequirements = 5;

    return (
        <main className='w-full min-h-screen max-h-screen px-3 md:px-20'>
            <div className='background-custom w-full container h-screen mx-auto flex flex-col items-center justify-center'>
                <div className="w-full h-max py-4 flex items-center justify-start">
                    <Link to='/' className='flex items-center justify-center gap-2 text-base/6 font-bold text-gray-600 py-2 rounded hover:text-indigo-700 transition-all duration-300 ease-in-out'><FaArrowLeftLong /><span>Back</span></Link>
                </div>
                <div className="w-full h-full flex items-center justify-center">
                    <div className='w-full max-w-lg flex flex-col items-start justify-center gap-8'>
                        <h2 className='w-full text-center text-gray-900 text-5xl/12 font-bold'>Register</h2>
                        <form className='w-full flex flex-col items-start justify-start gap-4' onSubmit={handleSubmit}>
                            <div className="w-full flex flex-col items-start justify-start gap-2">
                                <label htmlFor='username' className='w-full text-left text-gray-900 text-lg/7'>Name<span className='text-red-500'>*</span></label>
                                <input type="text" name='username' id='username' autoComplete='username' value={formData.username} onChange={handleChange} placeholder='Jhon Doe' className='w-full p-4 rounded border-gray-400 border-1 focus:outline-none bg-white focus:border-indigo-500 focus:text-gray-700' />
                                {errors.username && <p className='mt-1 text-sm text-red-600'>{errors.username}</p> }
                            </div>
                            <div className="w-full flex flex-col items-start justify-start gap-2">
                                <label htmlFor='email' className='w-full text-left text-gray-900 text-lg/7'>Email<span className='text-red-500'>*</span></label>
                                <input type="email" name='email' id='email' value={formData.email} autoComplete='email' onChange={handleChange} placeholder='jhondoe@gmail.com' className='w-full p-4 rounded border-gray-400 border-1 focus:outline-none bg-white focus:border-indigo-500 focus:text-gray-700' />
                                {errors.email && <p className='mt-1 text-sm text-red-600'>{errors.email}</p> }
                            </div>
                            <div className="w-full flex flex-col items-start justify-start gap-2">
                                <label htmlFor='password' className='w-full text-left text-gray-900 text-lg/7'>Password<span className='text-red-500'>*</span></label>
                                <input type="password" name='password' id='password' autoComplete='new-password' value={formData.password} onChange={handleChange} placeholder='At least 8 characters with uppercase, lowercase, number & special character' className='w-full p-4 bg-white rounded border-gray-400 border-1 focus:outline-none focus:border-indigo-500 focus:text-gray-700' />
                                
                                {/* Password Strength Indicator */}
                                {formData.password && (
                                    <div className="w-full mt-2">
                                        <div className="flex justify-between text-xs mb-1">
                                            <span>Password strength:</span>
                                            <span>{passwordStrength}/{maxRequirements}</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div 
                                                className={`h-2 rounded-full ${
                                                    passwordStrength <= 2 ? 'bg-red-500' :
                                                    passwordStrength <= 3 ? 'bg-yellow-500' :
                                                    passwordStrength <= 4 ? 'bg-blue-500' : 'bg-green-500'
                                                }`}
                                                style={{ width: `${(passwordStrength / maxRequirements) * 100}%` }}
                                            ></div>
                                        </div>
                                        <div className="text-xs text-gray-600 mt-1">
                                            {formData.password && getPasswordStrengthMessage(passwordRequirements)}
                                        </div>
                                    </div>
                                )}
                                
                                {errors.password && <p className='mt-1 text-sm text-red-600'>{errors.password}</p> }
                            </div>
                            <div className="w-full flex flex-col items-start justify-start gap-2">
                                <label htmlFor='confirmPassword' className='w-full text-left text-gray-900 text-lg/7'>Confirm Password<span className='text-red-500'>*</span></label>
                                <input type="password" name='confirmPassword' id='confirmPassword' autoComplete='new-password' value={formData.confirmPassword} onChange={handleChange} placeholder='Confirm your password' className='w-full p-4 bg-white rounded border-gray-400 border-1 focus:outline-none focus:border-indigo-500 focus:text-gray-700' />
                                {errors.confirmPassword && <p className='mt-1 text-sm text-red-600'>{errors.confirmPassword}</p> }
                            </div>
                            {errors.submit && (
                                <div className='rounded-md bg-red-50 p-4'>
                                    <div className='text-sm text-red-700'>{errors.submit}</div>
                                </div>
                            )}
                            <button type="submit" className='w-full bg-indigo-500 text-base/6 font-bold text-white px-6 py-3 rounded hover:bg-indigo-700 transition-all duration-300 ease-in-out' disabled={loading}>
                                {loading ? "Creating account..." : "Register Now" }
                            </button>
                            <p className='w-full h-max text-center py-4'>Already have an account? <Link to='/login' className='text-indigo-500 underline font-medium'>Login Now</Link></p>
                        </form>
                    </div>
                </div>
                <p className='w-full h-max text-center text-base/6 text-gray-900 py-6'>© 2026 Devang Patani. All rights reserved.</p>
            </div>
        </main>
    );
};

export default Register;