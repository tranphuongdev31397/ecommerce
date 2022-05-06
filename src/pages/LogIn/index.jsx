import { Button, Checkbox, Form, Input } from 'antd';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import {
    logInWithEmailAndPassword,
    signInWithGoogle
} from 'config/firebase/firebase-function';
import { auth } from 'config/firebase/firebase';
import './style.scss';
import Loader from 'components/Loader';
import { PATH_IMG } from 'constant';
import { useDispatch } from 'react-redux';
import UsersServices from 'services/UsersServices';
import { actSetCurrentUser } from 'slices/authSlice';
import { actSetCartUser } from 'slices/cartSlice';

function LoginPage() {
    const [user, loading] = useAuthState(auth);
    const [errorFirebase, setErrorFirebase] = useState();
    const dispatch = useDispatch();
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
    const fetchCurrentUser = async (id) => {
        //Set currentUser cart
        try {
            const docSnap = await UsersServices.getUser(id);
            dispatch(actSetCurrentUser(docSnap.data()));
            dispatch(actSetCartUser(docSnap.data().cart));
        } catch (err) {
            console.log(err);
        }
    };
    useEffect(() => {
        if (loading) {
            // maybe trigger a loading screen
            return <Loader />;
        }
        if (user) {
            fetchCurrentUser(user.uid);
            Navigate('/');
        }
    }, [user, loading]);

    return (
        <div className="relative">
            <div className="login-page">
                <div className="login-box">
                    <div className="illustration-wrapper">
                        <img
                            src={PATH_IMG + 'loginImg.jpg'}
                            alt="Login"
                            className="w-full pr-10"
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
