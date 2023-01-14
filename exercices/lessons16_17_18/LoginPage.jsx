import { Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import LoginFormik from '../../components/pure/forms/loginFormik';

const LoginPage = () => {

    const navigate = useNavigate();
    function toRegister(){
        navigate('/register')
    }

    return (
        <div>
            <h1>Login page</h1>
            <LoginFormik></LoginFormik>
            <p className='my-5'>
                <span>You are not registered?</span> 
                <Button variant='contained' className='ms-3' onClick={toRegister}>Register</Button>
            </p>
            
        </div>
    );
}

export default LoginPage;
