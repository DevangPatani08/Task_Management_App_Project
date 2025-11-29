import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({children}) => {
    const { user, loading } = useAuth();

    if (loading) {
        return(
            <div className="flex-1 flex justify-center items-center">
                <div className="loading-spinner"></div>
            </div>
        );
    } else {
        return (user ? children : <Navigate to='/login' replace />);
    }
};

export default ProtectedRoute;