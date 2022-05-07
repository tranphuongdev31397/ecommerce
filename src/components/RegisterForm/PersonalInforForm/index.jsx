import { Form, Input } from 'antd';
import React, { memo, useEffect } from 'react';

function PersonalInformationForm({
    form,
    setHasSkip = null,
    isRegister = true,
    initValues = null,
    isDisable = false
}) {
    const formItemLayout = {
        labelCol: {
            xs: { span: 24 },
            sm: { span: 8 }
        },
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 16 }
        }
    };

    useEffect(() => {
        if (setHasSkip) {
            setHasSkip(true);
        }
        return () => {
            if (setHasSkip) {
                setHasSkip(false);
            }
        };
    }, []);
    useEffect(() => {
        form.resetFields();
    }, [initValues]);
    return (
        <Form
            initialValues={initValues}
            {...formItemLayout}
            form={form}
            name="registerInfo"
            scrollToFirstError
        >
            <Form.Item
                name="phoneNumber"
                label="Phone Number"
                rules={[
                    {
                        required: true,
                        message: 'Please input your phone number!'
                    }
                ]}
            >
                <Input
                    addonBefore={['+84']}
                    style={{ width: '100%' }}
                    disabled={isDisable}
                />
            </Form.Item>
            {!isRegister ? (
                <Form.Item
                    name="name"
                    label="Your name"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your name!'
                        }
                    ]}
                >
                    <Input style={{ width: '100%' }} disabled={isDisable} />
                </Form.Item>
            ) : (
                <></>
            )}

            <h4 className="font-bold text-base text-left">Address: </h4>
            <Form.Item
                name={['address', 'country']}
                label="Country"
                rules={[
                    {
                        required: true,
                        message: 'Please input your country'
                    }
                ]}
            >
                <Input style={{ width: '100%' }} disabled={isDisable} />
            </Form.Item>
            <Form.Item
                name={['address', 'city']}
                label="City"
                rules={[
                    {
                        required: true,
                        message: 'Please input your city'
                    }
                ]}
            >
                <Input style={{ width: '100%' }} disabled={isDisable} />
            </Form.Item>
            <Form.Item
                name={['address', 'district']}
                label="District"
                rules={[
                    {
                        required: true,
                        message: 'Please input your district'
                    }
                ]}
            >
                <Input style={{ width: '100%' }} disabled={isDisable} />
            </Form.Item>
            <Form.Item
                name={['address', 'addressNumber']}
                label="Address Number"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Address Number'
                    }
                ]}
            >
                <Input style={{ width: '100%' }} disabled={isDisable} />
            </Form.Item>
        </Form>
    );
}

export default memo(PersonalInformationForm);
