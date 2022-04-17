import { Button, Checkbox, Form, Input } from 'antd';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import {
    auth,
    logInWithEmailAndPassword,
    signInWithGoogle,
    uiConfig
} from 'config/firebase/firebase';
import './style.scss';
import Loader from 'components/Loader';

function LoginPage() {
    const [user, loading, error] = useAuthState(auth);
    const [errorFirebase, setErrorFirebase] = useState();
    const onFinish = async (values) => {
        const { email, password } = values;
        const response = await logInWithEmailAndPassword(email, password);
        if (response.hasOwnProperty('message')) {
            if (response.message) {
                setErrorFirebase('Email/Password incorrect.');
            }
        } else {
            setErrorFirebase();
        }
    };
    const Navigate = useNavigate();
    const onFinishFailed = (errorInfo) => {
        setErrorFirebase();
    };

    useEffect(() => {
        if (loading) {
            // maybe trigger a loading screen
            return <Loader />;
        }
        if (user) Navigate('/');
    }, [user, loading]);

    return (
        <div className="relative">
            <div className="login-page">
                <div className="login-box">
                    <div className="illustration-wrapper">
                        <img
                            src="https://mixkit.imgix.net/art/preview/mixkit-left-handed-man-sitting-at-a-table-writing-in-a-notebook-27-original-large.png?q=80&auto=format%2Ccompress&h=700"
                            alt="Login"
                        />
                    </div>

                    <Form
                        name="login-form"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                    >
                        <p className="form-title">Welcome back</p>
                        <p>Login with Google</p>
                        <Button onClick={signInWithGoogle}>GOOGLE</Button>
                        <p>OR</p>
                        <p>Login with your account</p>

                        <p className="font-bold text-red-500 text-center">
                            {errorFirebase}
                        </p>
                        <Form.Item
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your email!'
                                },
                                {
                                    type: 'email',
                                    message: 'The input is not valid E-mail!'
                                }
                            ]}
                        >
                            <Input
                                placeholder="Email"
                                size="large"
                                className="p-3"
                            />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!'
                                }
                            ]}
                        >
                            <Input.Password
                                placeholder="Password"
                                size="large"
                            />
                        </Form.Item>

                        <Form.Item name="remember" valuePropName="checked">
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <Form.Item>
                            <Button
                                type="default"
                                htmlType="submit"
                                className="login-form-button"
                            >
                                LOGIN
                            </Button>
                        </Form.Item>
                        <div>
                            <Link to="/reset">Forgot Password?</Link>
                        </div>

                        <div className="">
                            <p className="m-0 my-4 font-bold text-base">
                                Don't have account?
                            </p>
                            <Link to="/register">
                                <Button
                                    type="primaty"
                                    htmlType="submit"
                                    className="m-0 login-form-button bg-sky-500 text-white hover:bg-white hover:text-black"
                                >
                                    REGISTER NOW
                                </Button>
                            </Link>
                        </div>
                    </Form>
                </div>
            </div>
            <div className="absolute top-4 left-4">
                <Link to="/" className="uppercase text-black text-lg">
                    Back to Home
                </Link>
            </div>
        </div>
    );
}

export default LoginPage;
