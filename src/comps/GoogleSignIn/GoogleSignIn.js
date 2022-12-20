import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const GoogleSignIn = () => {
    const { providerLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSingIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate(from, { replace: true })
            })
    }
    return (
        <div className="w-full">
            <input onClick={handleGoogleSingIn} type="submit" value={'In With Google'} />
        </div>
    );
};

export default GoogleSignIn;