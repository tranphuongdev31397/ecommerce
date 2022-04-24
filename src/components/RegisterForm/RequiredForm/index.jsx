import { Form, Input } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';

function RequiredForm({ form }) {
    const initValues = useSelector(
        (state) => state.registerReducer.registerValues
    );
    return (
        <Form
            form={form}
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            autoComplete="off"
            initialValues={{ ...initValues, confirm: initValues.password }}
        >
            <Form.Item
                label="Email"
                name="email"
                rules={[
                    { required: true, message: 'Please input your E-mail!' },
                    { type: 'email', message: 'The input is not valid E-mail!' }
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[
                    { required: true, message: 'Please input your password!' }
                ]}
                hasFeedback
            >
                <Input.Password />
            </Form.Item>
            <Form.Item
                name="confirm"
                label="Confirm Password"
                dependencies={['password']}
                hasFeedback
                rules={[
                    {
                        required: true,
                        message: 'Please confirm your password!'
                    },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }
                            return Promise.reject(
                                new Error(
                                    'The two passwords that you entered do not match!'
                                )
                            );
                        }
                    })
                ]}
            >
                <Input.Password />
            </Form.Item>
            <Form.Item
                label="Full Name"
                name="name"
                rules={[
                    { required: true, message: 'Please input your username!' }
                ]}
            >
                <Input />
            </Form.Item>
        </Form>
    );
}

export default RequiredForm;
