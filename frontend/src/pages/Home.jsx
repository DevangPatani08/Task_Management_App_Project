import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Typography from '../components/Typography';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { data } from '../data/data.json';
import { ListChecks, CalendarDays, ShieldUser, Users, CircleCheckBig, Earth, Star, Linkedin, Facebook, Twitter } from 'lucide-react';
import Accordion from '../components/Accordion';

const Home = () => {
    const navigate = useNavigate();
    const whyIcon = { ListChecks: ListChecks, CalendarDays: CalendarDays, ShieldUser: ShieldUser };
    const aboutIcon = { Users: Users, CircleCheckBig: CircleCheckBig, Earth: Earth, Star: Star };

    return (
        <div className='w-full flex-1'>
            {/* hero section */}
            <section className='section'>
                <div className="wrapper">
                    {/* heading */}
                    {/* line 1 */}
                    <div className='w-full flex items-center justify-center flex-wrap'>
                        <div className='w-fit lg:w-max h-fit flex items-center justify-center gap-0'>
                            <Typography variant='h1' weight='bold'>Stop Juggling</Typography>
                            <DotLottieReact src='https://lottie.host/4b3148df-4e4c-4537-93c9-9d0885ce6532/m9uj411IcR.lottie' loop autoplay className='h-20 md:h-30 w-auto object-cover -mx-8' />
                        </div>
                        <Typography variant='h1' weight='bold'>your tasks,</Typography>
                    </div>
                    
                    {/* line 2 */}
                    <Typography variant='h1' weight='bold' className='w-full text-center'>Start building Your Momentum. Find Your</Typography>
                    
                    {/* line 3 */}
                    <div className='w-full flex items-center justify-center flex-wrap'>
                        <div className='w-fit lg:w-max h-fit flex items-center justify-center gap-0'>
                            <Typography variant='h1' weight='bold'>Flow and</Typography>
                            <DotLottieReact src='https://lottie.host/b94836c3-a7e0-4005-bea0-aa910942d79d/AwYkBYdL4h.lottie' loop autoplay className='h-16 md:h-30 w-auto object-cover mx-1' />
                        </div>
                        <Typography variant='h1' weight='bold'>Master Your Day.</Typography>
                    </div>

                    {/* subtext */}
                    <Typography variant='p' weight='medium' className='w-full container mx-auto text-center mt-6 mb-8 text-neutral-600'>The intuitive task manager that helps you build work-flows, crush deadlines, and achieve your goals.</Typography>
                </div>
                
                {/* CTA */}
                <div className='w-full md:max-w-md flex flex-col md:flex-row gap-4 md:gap-10 h-fit items-center justify-center mt-6'>
                    <Button type='button' btnType='secondaryFW' handleClick={() => navigate('/#how-it-works')}>Explore More</Button>
                    <Button type='button' btnType='primaryFW' handleClick={() => navigate('/login')}>Get Started</Button>
                </div>
            </section>

            {/* Process section */}
            <section id="how-it-works" className='section'>
                <div className="wrapper gap-10 lg:gap-20">
                    {/* heading */}
                    <div className="heading-center">
                        <Typography variant='p' weight='medium' className='w-full text-center text-primary-600 uppercase'>How it works</Typography>
                        <Typography variant='h2' weight='bold' className='w-full text-center'>Build your momentum in four simple steps.</Typography>
                        <Typography variant='p' weight='regular' className='w-full text-center text-neutral-600'>From a scattered list to a clear plan of action. Momentum helps you capture, organize, and conquer your tasks with a natural, flowing rhythm.</Typography>
                    </div>

                    {/* content grid */}
                    <div className="grid-c4">
                        {data.how && data.how.map((item, i) => (
                            <div key={i} className='how-box'>
                                <div className='bg-primary-500 text-white p-2 flex items-center justify-center rounded-full aspect-square text-center mb-6'>
                                    <Typography variant='h5' weight='bold'>{item.step}</Typography>
                                </div>
                                <Typography variant='h4' weight='semibold' className='text-center'>{item.title}</Typography>
                                <Typography variant='p' weight='regular' className='text-center text-neutral-600'>{item.text}</Typography>

                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            {/* Why us section */}
            <section id="why-us" className='section'>
                <div className="wrapper gap-10 lg:gap-20">
                    {/* heading */}
                    <div className="heading-center">
                        <Typography variant='p' weight='medium' className='w-full text-center text-primary-600 uppercase'>Why choose Momentum?</Typography>
                        <Typography variant='h2' weight='bold' className='w-full text-center'>Find Clarity, Achieve More, and Finaly Master Your Day.</Typography>
                        <Typography variant='p' weight='regular' className='w-full text-center text-neutral-600'>Because productivity isn't about doing more-it's about doing what matters. Momentum provides the clarity and tools to focus your energy, so you can achieve more with less efforts.</Typography>
                    </div>

                    {/* content grid */}
                    <div className="grid-c3">
                        {data.whyus && data.whyus.map((item, i) => {
                            let Icon = whyIcon[item.icon];

                            return (
                                <div key={i} className='why-box'>
                                    <Icon className='w-10 h-10 text-primary-500' />
                                    <Typography variant='h4' weight='semibold' className='text-center mt-6'>{item.title}</Typography>
                                    <Typography variant='p' weight='regular' className='text-center text-neutral-600'>{item.text}</Typography>
                                </div>
                            );
                        })}
                    </div>

                    <div className='w-full flex h-fit items-center justify-center'>
                        <Button type='button' btnType='primary' handleClick={() => navigate('/login')}>Build Your Momentum Now!</Button>
                    </div>
                </div>
            </section>

            {/*  About Section */}
            <section id="about" className="section">
                <div className="container mx-auto flex flex-col lg:flex-row justify-center items-center gap-6 md:gap-12">
                    <div className="w-full lg:w-1/2 flex flex-col items-start justify-start">
                        <Typography variant='p' weight='medium' className='w-full text-center lg:text-left text-primary-600 uppercase'>About</Typography>
                        <Typography variant='h2' weight='bold' className='w-full lg:w-4/5 text-center lg:text-left mb-2'>Our driving force</Typography>
                        <Typography variant='p' weight='regular' className='w-full lg:w-4/5 text-center lg:text-left text-neutral-600'>Fueled by the frustration of overwhelming task managers, we created Momentum. Our purpose is simple: to provide the clarity and tools you need to stop juggling tasks and start building real, meaningful momentum towards your goals.</Typography>
                        <Typography variant='p' weight='semibold' className='w-full lg:w-4/5 mt-10 text-left text-primary-500 bg-primary-200 p-6 border-l-4 border-primary-500 rounded-lg'>"Sophistication lies in the flow, not the friction. Momentum is powerful enough to organize your ambitions, yet intuitive enough to get out of your way and let you build your flow."</Typography>
                    </div>
                    <div className='w-full grid grid-cols-2 gap-6 lg:w-1/2'>
                        {data.about && data.about.map((item, i) => {
                            const Icon = aboutIcon[item.icon];

                            return (
                                <div key={i} className='about-box'>
                                    <div className={`${item.color} p-5 aspect-square rounded-full`}>
                                        <Icon className='w-8 h-8'/>
                                    </div>
                                    <Typography variant='h6' weight='bold' className='w-full text-center mt-4'>{item.title}</Typography>
                                    <Typography variant='p' weight='regular' className='w-full text-center text-neutral-600'>{item.text}</Typography>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* team section */}
            <section id='team' className="section">
                <div className="wrapper gap-10 lg:gap-20">
                    {/* heading */}
                    <div className="heading-center">
                        <Typography variant='p' weight='medium' className='w-full text-center text-primary-600 uppercase'>Our team</Typography>
                        <Typography variant='h2' weight='bold' className='w-full text-center'>The Minds Behind Momentum</Typography>
                        <Typography variant='p' weight='regular' className='w-full text-center text-neutral-600'>We're a diverse group of designers, developers, and productive nerds united by one simple mission: tohelp you find focus and achieve your goals.</Typography>
                    </div>

                    <div className="grid-c4">
                        {data.team && data.team.map((item, i) => (
                            <div key={i} className='team-box'>
                                <img src={item.img} alt={item.name} />
                                <div className="team-box-container">
                                    <div className="team-box-wrapper">
                                        <Typography variant='h6' weight='bold' className='w-full text-center'>{item.name}</Typography>
                                        <Typography variant='p' weight='medium' className='w-full text-center text-neutral-500'>{item.position}</Typography>
                                    </div>
                                    <Typography variant='p' weight='regular' className='w-full text-center text-neutral-600'>{item.description}</Typography>
                                </div>
                                <div className="team-box-social">
                                    <Button type='button' btnType='iconsBgNone' handleClick={() => navigate(`${item.linkedIn}`)}>
                                        <Linkedin className='w-6 h-6' />
                                    </Button>
                                    <Button type='button' btnType='iconsBgNone' handleClick={() => navigate(`${item.facebook}`)}>
                                        <Facebook className='w-6 h-6' />
                                    </Button>
                                    <Button type='button' btnType='iconsBgNone' handleClick={() => navigate(`${item.twitter}`)}>
                                        <Twitter className='w-6 h-6' />
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            {/* CTA section */}
            <section id='cta' className="section bg-linear-[108deg] from-primary-500 to-purple-500 text-white">
                <div className='wrapper gap-10'>
                    <div className='w-full flex flex-col justify-center items-center gap-2'>
                        <Typography variant='h2' weight='bold' className='text-center my-4'>Ready to boost your Productivity?</Typography>
                        <Typography variant='p' weight='regular' className='text-center text-neutral-200'>Join thousands of users who have transformed their task management with Momentum.</Typography>
                    </div>
                    <div className='w-full flex h-max items-center justify-center'>
                        <Button type='button' btnType='white' handleClick={() => navigate('/register')}>Create Your Account Now!</Button>
                    </div>
                </div>
            </section>

            {/* FAQs section */}
            <section id='faqs' className="section">
                <div className='wrapper gap-10 lg:gap-20'>
                    <div className="heading-center">
                        <Typography variant='p' weight='medium' className='w-full text-center text-primary-600 uppercase'>FAQs</Typography>
                        <Typography variant='h2' weight='bold' className='w-full text-center'>Get Back to your Momentum</Typography>
                        <Typography variant='p' weight='regular' className='w-full text-center text-neutral-600'>Find quick answers to common questions about your account, features, and more so you can return to what matters most.</Typography>
                    </div>
                    
                    {/* Accordion component */}
                    <Accordion faqs={data.faqs} />
                </div>
            </section>
            {/* <section>
                <div className='w-full flex flex-col justify-center items-center bg-primary-100 p-20'>
                        <Typography variant='h4' weight='semibold' className='w-full text-center'>Still have questions?</Typography>
                        <Typography variant='p' weight='regular' className='w-full text-center text-neutral-600 mt-4 mb-6'>We are only a message away! Lets talk it out.</Typography>
                        <Button type='button' btnType='primary' handleClick={() => { navigate('/contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Get in touch</Button>
                    </div>
            </section> */}
        </div>
    );
};

export default Home;