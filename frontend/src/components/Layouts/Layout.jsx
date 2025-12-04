import { useEffect, useState } from "react";
import Footer from "../Navigation/Footer";
import Header from "../Navigation/Header";
import { useLocation } from "react-router-dom";
import Toaster from 'react-hot-toast';

const Layout = ({ children }) => {
    const [navH, setNavH] = useState(0);
    const location = useLocation();

    useEffect(() => {
        const headerElement = window.document.getElementById('header').offsetHeight;
        if (headerElement) setNavH(headerElement);
    }, []);
    
    return (
        <div className='w-full h-auto min-h-screen flex flex-col items-center justify-start gap-0'>
            <Header />
            <main className='w-full min-h-screen flex flex-col items-center justify-start gap-0' style={{ paddingTop: `${navH}px`}}>
                {children}
            </main>
            {location.pathname !== '/tasks' && <Footer />}
            <Toaster position="bottom-right" reverseOrder={false} />
        </div>
    );
};

export default Layout;