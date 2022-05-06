import RegisterCtn from 'containers/Register';
import React from 'react';
import { Link } from 'react-router-dom';

function RegisterPage() {
    return (
        <div
            style={{ background: '#d9edff', width: '100vw', height: '100vh' }}
            className="flex justify-center items-center"
        >
            <div>
                <RegisterCtn />
            </div>
            <div className="absolute top-4 left-4">
                <Link to="/" className="uppercase text-black text-lg">
                    Back to Home
                </Link>
            </div>
        </div>
    );
}

export default RegisterPage;
