import { Eye, EyeClosed, Lock, Mail, User } from 'lucide-react';
import React from 'react'
import Typography from './Typography';

const InputField = ({ inType = '', type, name, id, placeholder, onChange, value, icon, showPass, setShowPass, errorMsg, ...props }) => {
    const Icons = { Mail: Mail, User: User, Lock: Lock };
    const Icon = Icons[icon];  

    const togglePassword = () => setShowPass(!showPass);


    
    if (inType === 'P') {
        return (
            <div className='w-full flex flex-col items-start justify-start gap-2'>
                <div className='w-full relative'>
                    <div className='absolute inset-y-0 z-50 left-0 pl-3 flex items-center pointer-events-none'>
                        <Icon className='w-5 h-5 text-neutral-500' />
                    </div>
                    <input type={showPass ? 'text' : type} name={name} id={id} placeholder={placeholder} onChange={onChange} value={value} className='input-field' {...props} />
                    <button type='button' onClick={togglePassword} className='absolute inset-y-0 z-50 right-0 pr-6 flex items-center cursor-pointer'>
                        {showPass ? (
                            <EyeClosed className='w-5 h-5 text-neutral-500'/>
                        ) : (
                            <Eye className='w-5 h-5 text-neutral-500'/>
                        )}
                    </button>
                </div>
                {errorMsg && <span className='mt-1 text-sm text-red-500'>{errorMsg}</span>}
            </div>
        );
    } else {
        return (
            <div className='w-full flex flex-col items-start justify-start gap-0'>
                <div className='w-full relative'>
                    <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                        <Icon className='w-5 h-5 text-neutral-500' />
                    </div>
                    <input type={type} name={name} id={id} placeholder={placeholder} onChange={onChange} value={value} className='input-field' {...props} />
                </div>
                {errorMsg && <span className='mt-1 text-sm text-red-500'>{errorMsg}</span>}
            </div>
        );
    }
}

export default InputField;