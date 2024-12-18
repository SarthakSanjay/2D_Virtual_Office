import { useAuth0 } from '@auth0/auth0-react';
import { Navigate } from 'react-router';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    const { isAuthenticated } = useAuth0();

    return isAuthenticated ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
