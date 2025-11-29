import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import InputField from '../components/InputField';
import Button from '../components/Button';
import Typography from '../components/Typography';
import { useAuth } from '../context/AuthContext';

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [showPass, setShowPass] = useState(false);
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });

        if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: '' });
    };

    const validateForm = () => {
        const errs = {};

        if (!formData.email) {
            errs.email = 'Email is a required field!...';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errs.email = 'Enter a valid email address!...';
        }

        if (!formData.password) {
            errs.password = 'Password is a required field!...';
        }

        setErrors(errs);

        return (Object.keys(errs).length === 0);
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        setLoading(true);
        setErrors({});

        try {
            await login({ email: formData.email, password: formData.password });
            navigate('/tasks');
            window.scrollTo({ top: 0, behavior: 'instant' });
        } catch (error) {
            setErrors({ submit: error.response?.data?.method || error.message || 'Login failed. Please try again!...' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='w-full flex-1 background-custom section'>
            <div className='wrapper flex-1 flex items-center justify-center'>
                <div className='w-full flex flex-col items-center justify-start max-w-lg gap-6 p-6 backdrop-blur-lg rounded-md shadow-lg'>
                    <Typography variant='h2' weight='bold' className='w-full text-center'>Login</Typography>
                    <form onSubmit={handleSubmit} className='w-full flex flex-col items-start justify-center gap-4.5'>
                        
                        <InputField type='email' name='email' id='email' value={formData.email} onChange={handleChange} placeholder='Enter your email' icon='Mail' errorMsg={errors.email} required />

                        <InputField inType='P' type='password' name='password' id='password' value={formData.password} onChange={handleChange} placeholder='Enter your password' icon='Lock' errorMsg={errors.password} showPass={showPass} setShowPass={setShowPass} required />
                        
                        <Button type='submit' btnType='primaryFW' disabled={loading}>
                            {loading ? 'Logging in!...' : 'Login Now'}
                        </Button>
                        <Typography variant='p' weight='regular' className='w-full h-max text-center py-4'>Don't have an account! <Link to='/register' className='text-primary-500 underline font-semibold'>Register Now</Link></Typography>
                        
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

export default Login;