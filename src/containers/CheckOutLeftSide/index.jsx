import { Button, Collapse, Switch } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import LoginForm from 'components/LoginForm';
import PersonalInforForm from 'components/RegisterForm/PersonalInforForm';
import { actSetPersonalInformation } from 'pages/CheckOut/checkOutSlice';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Coupon from './Coupon';

function CheckOutLeftSide() {
    const { Panel } = Collapse;
    const currentUser = useSelector((state) => state.authReducer.currentUser);
    const personalInformation = useSelector(
        (state) => state.checkOutReducer.paymentInformation?.personal
    );

    const [form] = useForm();
    const applyInformation = useRef();

    const [isSwitch, setIsSwitch] = useState(false);
    const [isSubmit, setIsSubmit] = useState(false);
    const dispatch = useDispatch();

    const handleSubmitInformation = () => {
        console.log('click');
        form.validateFields()
            .then((values) => {
                dispatch(actSetPersonalInformation(values));
                setIsSubmit(true);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <Collapse defaultActiveKey={['1']}>
            <Panel header="Have a Coupon" key="1">
                <Coupon />
            </Panel>
            {Object.keys(currentUser).length === 0 &&
            currentUser.constructor === Object ? (
                <Panel header="Login" key="2" className="mx-auto ">
                    <LoginForm />
                </Panel>
            ) : (
                ''
            )}
            <Panel header="Shipping Information" key="3">
                {Object.keys(currentUser).length === 0 &&
                currentUser.constructor === Object ? (
                    ''
                ) : (
                    <>
                        <h3 className="font-bold my-2">
                            Would you like to use your information?
                        </h3>
                        <Switch
                            className="my-2"
                            onChange={(checked) => {
                                setIsSwitch(checked);
                            }}
                            checked={isSwitch}
                            defaultChecked={isSwitch}
                        />
                    </>
                )}

                <PersonalInforForm
                    form={form}
                    initValues={isSwitch ? currentUser : personalInformation}
                    isRegister={false}
                    isDisable={isSwitch || isSubmit}
                />
                <p className="my-2 text-yellow-500 text-center italic">
                    Please confirm your information
                </p>
                {!isSubmit ? (
                    <Button
                        className="w-full"
                        ref={applyInformation}
                        type="default"
                        onClick={handleSubmitInformation}
                    >
                        Confirm your information
                    </Button>
                ) : (
                    <Button
                        className="w-full"
                        type="default"
                        onClick={() => {
                            setIsSubmit(false);
                            setIsSwitch(false);
                        }}
                    >
                        Edit your information
                    </Button>
                )}
            </Panel>
        </Collapse>
    );
}

export default CheckOutLeftSide;
