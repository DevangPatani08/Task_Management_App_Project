import { tv } from 'tailwind-variants';

const btnStyles = tv({
    base: 'capitalize flex gap-2 items-center justify-center font-medium transition-all duration-200 ease-in-out cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-none',

    variants: {
        btnType: {
            white: 'w-max px-6 py-3 bg-white text-primary-500 hover:shadow-xl rounded-sm',
            primary: 'w-max px-6 py-3 bg-primary-500 text-white hover:bg-primary-700 rounded-sm',
            secondary: 'w-max px-6 py-3 bg-transparent border-1 border-neutral-400 text-neutral-800 hover:bg-neutral-200 rounded-sm',
            danger: 'w-max px-6 py-3 bg-red-600 text-red-50 hover:bg-red-700 rounded-sm',
            warning: 'w-max px-6 py-3 bg-yellow-500 text-yellow-50 hover:bg-amber-500 rounded-sm',
            success: 'w-max px-6 py-3 bg-green-500 text-green-50 hover:bg-green-700 rounded-sm',
            bgNone: 'w-max px-6 py-3 bg-transparent text-neutral-600 hover:text-primary-700',
            primaryFW: 'w-full px-6 py-3 bg-primary-500 text-white hover:bg-primary-700 rounded-sm',
            secondaryFW: 'w-full px-6 py-3 bg-transparent border-1 border-neutral-400 text-neutral-800 hover:bg-neutral-200 rounded-sm',
            dangerFW: 'w-full px-6 py-3 bg-red-600 text-red-50 hover:bg-red-700 rounded-sm',
            warningFW: 'w-full px-6 py-3 bg-yellow-500 text-yellow-50 hover:bg-amber-500 rounded-sm',
            successFW: 'w-full px-6 py-3 bg-green-500 text-green-50 hover:bg-green-700 rounded-sm',
            bgNoneFW: 'w-full px-6 py-3 bg-transparent text-neutral-600 hover:text-primary-700',
            iconsBgNone: 'p-2.5 bg-transparent text-neutral-600 hover:text-primary-700',
            iconsPrimary: 'p-2.5 bg-primary-200 text-primary-800 hover:bg-primary-500 hover:text-white rounded-full',
            iconsSecondary: 'p-2.5 border border-neutral-300 text-neutral-900 hover:bg-neutral-100 rounded-full',
            iconsDanger: 'p-2.5 bg-red-200 text-red-600 hover:bg-red-600 hover:text-white rounded-full',
            iconsWarn: 'p-2.5 bg-yellow-200 text-amber-700 hover:bg-amber-400 hover:text-white rounded-full',
            iconsSuccess: 'p-2.5 bg-green-200 text-green-600 hover:bg-green-600 hover:text-white rounded-full',
            iconsSquare: '-m-2.5 p-2.5 bg-transparent border-1 border-neutral-400 text-neutral-800 hover:bg-neutral-200 rounded-sm'
        }
    }
});

const Button = ({ children, type, btnType, handleClick, disabled, ...props }) => {
    const variant = btnType || 'primary';
    const dis = disabled || false;

    return (<button type={type} onClick={handleClick} className={btnStyles({ btnType: variant })} disabled={dis} {...props}>{children}</button>);
};

export default Button;