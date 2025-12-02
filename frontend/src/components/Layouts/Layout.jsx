import { useEffect, useState } from "react";
import Footer from "../Navigation/Footer";
import Header from "../Navigation/Header";
import { useLocation } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
            <ToastContainer position="bottom-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick={false} rtl={false} pauseOnFocusLoss draggable={false} pauseOnHover theme="light" />
            <ToastContainer position="bottom-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick={false} rtl={false} pauseOnFocusLoss draggable={false} pauseOnHover theme="colored" />
        </div>
    );
};

export default Layout;