import { useNavigate } from 'react-router-dom';

// project imports
import useAuth from 'hooks/useAuth';
import { GuardProps } from 'types';
import { useEffect } from 'react';

// ==============================|| AUTH GUARD ||============================== //

/**
 * Authentication guard for routes
 * @param {PropTypes.node} children children element/node
 */
const AuthGuard = ({ children }: GuardProps) => {
    const { isLoggedIn } = useAuth();

    const navigate = useNavigate();

    const serviceToken = localStorage.getItem('serviceToken');
    console.log('kkkkkkkkkkkkkkkkkkkk', isLoggedIn);
    useEffect(() => {
        if (!isLoggedIn && !serviceToken) {
            navigate('/', { replace: true });
        }
        //  else if (isLoggedIn || serviceToken) {
        //     navigate('/dashboard/default');
        // }
    }, [isLoggedIn, navigate, serviceToken]);

    return children;
};

export default AuthGuard;
