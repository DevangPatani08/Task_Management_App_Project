import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layouts/Layout.jsx';
import Home from './pages/Home.jsx';
import PageLayout from './components/Layouts/PageLayout.jsx';
import PageNotFound from './pages/PageNotFound.jsx';
import { AuthProvider } from './context/AuthContext.jsx';
import Contact from './pages/Contact.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Tasks from './pages/Tasks.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout><Home /></Layout>}></Route>
          <Route path="/contact" element={<Layout><Contact /></Layout>}></Route>
          <Route path="/login" element={<PageLayout><Login /></PageLayout>}></Route>
          <Route path="/register" element={<PageLayout><Register /></PageLayout>}></Route>
          <Route path="/tasks" element={<ProtectedRoute><Layout><Tasks /></Layout></ProtectedRoute>}></Route>
          <Route path="/*" element={<PageLayout><PageNotFound /></PageLayout>}></Route>
        </Routes>
      </Router> 
    </AuthProvider>
  );
};

export default App;