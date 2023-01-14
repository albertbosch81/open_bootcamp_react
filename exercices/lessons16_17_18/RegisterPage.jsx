import { Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import RegisterFormik from '../../components/pure/forms/registerFormik';

const RegisterPage = () => {

    const navigate = useNavigate();
    function toLogin(){
        navigate('/login')
    }

    return (
        <div>
            <h1>Register</h1>
            <RegisterFormik></RegisterFormik>
            <p className='my-5'>
                <span>Are you registered?</span>
                <Button variant='contained' className='ms-3' onClick={toLogin}>Login</Button>
            </p>
        </div>
    );
}

export default RegisterPage;
