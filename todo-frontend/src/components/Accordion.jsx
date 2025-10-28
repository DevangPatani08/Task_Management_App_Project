import { useEffect, useState } from 'react';
import { FaChevronDown } from "react-icons/fa6";

const Accordion = ({faqs}) => {
    const [openIndex, setOpenIndex] = useState(0);

    useEffect(() => {
        setOpenIndex(0);
    }, [faqs]);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    }

    return (
        <div className='w-full md:max-w-2xl h-max flex flex-col items-start justify-center gap-6 overflow-hidden'>
            {faqs && faqs.map((faq, index) => (
                <div key={index} className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
                    <button className="flex justify-between items-center w-full p-6 cursor-pointer" onClick={() => handleToggle(index)}>
                        <p className="text-lg/7 font-medium text-gray-900 text-left">{faq.question}</p>
                        <FaChevronDown  className={`text-gray-900 transition-transform duration-300 ease-in-out ${ openIndex === index ? 'rotate-180' : ''}`} />
                    </button>
                    <div className={`grid transition-all duration-300 ease-in-out ${openIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                        <div className="overflow-hidden">
                            <div className="px-6 pb-6 text-gray-600">
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Accordion;