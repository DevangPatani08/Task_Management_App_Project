import { useEffect, useState } from 'react';
import Typography from './Typography';
import { ChevronDown } from 'lucide-react';


const Accordion = ({faqs}) => {
    const [openIndex, setOpenIndex] = useState(0);

    useEffect(() => { setOpenIndex(0); }, [faqs]);

    const handleToggle = (index) => setOpenIndex(openIndex === index ? -1 : index);

    return (
        <div className='w-full md:max-w-2xl h-max flex flex-col items-start justify-center gap-6 overflow-hidden'>
            {faqs && faqs.map((item, i) => (
                <div key={i} className='w-full bg-white rounded-md shadow-lg overflow-hidden'>
                    <button className='flex justify-between items-center w-full p-6 cursor-pointer' onClick={() => handleToggle(i)}>
                        <Typography variant='p' weight='medium' className='text-left'>{item.question}</Typography>
                        <ChevronDown className={`w-8 h-8 transition-transform duration-300 ease-in-out ${openIndex === i ? 'rotate-180' : ''}`} />
                    </button>
                    <div className={`grid transition-all duration-200 ease-in-out ${openIndex === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                        <div className='overflow-hidden'>
                            <Typography variant='p' weight='regular' className='px-6 pb-6 text-left text-neutral-600'>{item.answer}</Typography>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Accordion;