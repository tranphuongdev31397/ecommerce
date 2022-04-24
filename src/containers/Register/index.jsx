import React, { useEffect } from 'react';
import { Steps, Button, message } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import './style.scss';
import RequiredForm from 'components/RegisterForm/RequiredForm';
import PersonalInformationForm from 'components/RegisterForm/PersonalInforForm';
import { useDispatch, useSelector } from 'react-redux';
import { actSetRegisterValues } from 'pages/Register/registerSlice';
import { registerWithEmailAndPassword } from 'config/firebase/firebase-function';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from 'config/firebase/firebase';
import Loader from 'components/Loader';
import DoubleCheck from 'components/RegisterForm/DoubleCheck';

const { Step } = Steps;

function RegisterCtn() {
    const [current, setCurrent] = React.useState(0);
    const [hasSkip, setHasSkip] = React.useState(false);
    const [user, loading] = useAuthState(auth);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSuccessFunction = () => {
        navigate('/');
        dispatch(actSetRegisterValues({ isReset: true }));
    };
    const registerValue = useSelector(
        (state) => state.registerReducer.registerValues
    );
    const next = (isSkip = false) => {
        if (current === 0) {
            form.validateFields().then((value) => {
                delete value.confirm;
                dispatch(actSetRegisterValues({ values: value }));
                form.resetFields();
                setCurrent(current + 1);
            });
        } else if (current === 1 && isSkip) {
            form.resetFields();

            setCurrent(current + 1);
        } else if (current === 1) {
            form.validateFields().then((value) => {
                form.resetFields();
                dispatch(actSetRegisterValues({ values: value }));
                console.log(value);
                setCurrent(current + 1);
            });
        }
    };

    const prev = () => {
        form.resetFields();
        setCurrent(current - 1);
    };
    const [form] = useForm();

    const steps = [
        {
            title: 'Required Information',
            content: <RequiredForm form={form} />
        },
        {
            title: 'Personal Information',
            content: (
                <PersonalInformationForm form={form} setHasSkip={setHasSkip} />
            )
        },
        {
            title: 'Double Check',
            content: <DoubleCheck />
        }
    ];

    // useEffect(() => {
    //     if (loading) {
    //         // maybe trigger a loading screen
    //         return <Loader />;
    //     }
    //     if (user) Navigate('/');
    // }, [user, loading]);
    return (
        <div className="bg-white p-10 shadow-lg rounded-lg">
            <Steps current={current}>
                {steps.map((item, idx) => (
                    <Step key={item.title} title={item.title} />
                ))}
            </Steps>
            {hasSkip && (
                <h3 className="font-bold mt-4">You can skip this box</h3>
            )}
            <div className="steps-content">{steps[current].content}</div>
            <div className="steps-action">
                {current < steps.length - 1 && (
                    <Button
                        className="bg-sky-500"
                        type="primary"
                        onClick={() => next()}
                    >
                        Next
                    </Button>
                )}
                {current < steps.length - 1 && hasSkip && (
                    <Button
                        className="bg-sky-500 mx-2"
                        type="primary"
                        onClick={() => next(true)}
                    >
                        Skip
                    </Button>
                )}
                {current === steps.length - 1 && (
                    <Button
                        className="bg-sky-500"
                        type="primary"
                        onClick={async () => {
                            const response = await registerWithEmailAndPassword(
                                registerValue,
                                handleSuccessFunction
                            );

                            if (response.hasOwnProperty('message')) {
                                if (response.message) {
                                    message.error(response.message);
                                }
                            }
                        }}
                    >
                        Done
                    </Button>
                )}
                {current > 0 && (
                    <Button className="mx-1" onClick={() => prev()}>
                        Previous
                    </Button>
                )}
            </div>
        </div>
    );
}

export default RegisterCtn;
