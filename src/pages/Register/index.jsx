import RegisterCtn from 'containers/Register';
import React from 'react';

function RegisterPage() {
    return (
        <div
            style={{ background: '#d9edff', width: '100vw', height: '100vh' }}
            className="flex justify-center items-center"
        >
            <div>
                <RegisterCtn />
            </div>
        </div>
    );
}

export default RegisterPage;
