import { Form, Input } from 'antd';
import React, { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';

function PersonalInformationForm({ form, setHasSkip }) {
    const initValues = useSelector(
        (state) => state.registerReducer.registerValues
    );
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
        setHasSkip(true);

        return () => {
            setHasSkip(false);
        };
    }, []);
    console.log(initValues);
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
                <Input addonBefore={['+84']} style={{ width: '100%' }} />
            </Form.Item>
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
                <Input style={{ width: '100%' }} />
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
                <Input style={{ width: '100%' }} />
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
                <Input style={{ width: '100%' }} />
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
                <Input style={{ width: '100%' }} />
            </Form.Item>
        </Form>
    );
}

export default memo(PersonalInformationForm);
