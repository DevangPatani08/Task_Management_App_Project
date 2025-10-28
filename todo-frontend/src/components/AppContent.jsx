import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Home from '../pages/Home';
import Login from '../pages/Login';
import PageNotFound from '../pages/PageNotFound';
import Register from '../pages/Register';
import Contact from '../pages/Contact';
import Tasks from '../pages/Tasks';


const AppContent = () => {
    const location = useLocation();

	const showNavbarRoutes = ["/", "/contact", "/tasks", "/*"];
	const shouldDisplayNavbar = showNavbarRoutes.includes(location.pathname) || !['/login', '/register'].includes(location.pathname);

	return (
		<div className="min-h-screen bg-gray-50 overflow-x-hidden">
			{shouldDisplayNavbar && <Navbar />}
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/tasks" element={<Tasks />} />
				<Route path="/*" element={<PageNotFound />} />
			</Routes>
		</div>
	);
};

export default AppContent;