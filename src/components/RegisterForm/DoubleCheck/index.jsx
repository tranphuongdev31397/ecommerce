import { EyeFilled, EyeInvisibleFilled } from '@ant-design/icons';
import { Col, Input, Row, Typography } from 'antd';
import { stringToPassType } from 'common/functions';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
const { Title, Text } = Typography;
function DoubleCheck() {
    const [showPass, setShowPass] = useState(false);
    const registerValues = useSelector(
        (state) => state.registerReducer.registerValues
    );

    return (
        <div>
            <h3 className="font-bold text-lg">
                Please double check your Register Information
                <Title level={4} className="text-left">
                    Register
                </Title>
                <Row gutter={[16, 16]} className="text-left ">
                    <Col span={12}>
                        <Title level={5}>
                            Email:{' '}
                            <Text italic className="font-normal">
                                {registerValues.email}
                            </Text>
                        </Title>
                    </Col>
                    <Col span={12}>
                        <Title level={5} className="flex">
                            Password:{' '}
                            <Text italic className="w-full ml-2">
                                {showPass ? (
                                    <span className="font-normal flex items-center justify-between w-full">
                                        <span> {registerValues.password}</span>
                                        <span
                                            onClick={() => setShowPass(false)}
                                        >
                                            <EyeInvisibleFilled />
                                        </span>
                                    </span>
                                ) : (
                                    <span className="font-normal flex items-center justify-between w-full">
                                        <span>
                                            {stringToPassType(
                                                registerValues.password
                                            )}
                                        </span>
                                        <span>
                                            <EyeFilled
                                                onClick={() =>
                                                    setShowPass(true)
                                                }
                                            />
                                        </span>
                                    </span>
                                )}
                            </Text>
                        </Title>
                    </Col>
                    <Col span={12}>
                        <Title level={5}>
                            Your name:{' '}
                            <Text italic className="font-normal">
                                {registerValues.name}
                            </Text>
                        </Title>
                    </Col>
                    <Col span={12}>
                        <Title level={5}>
                            Phone Number:{' '}
                            <Text italic className="font-normal">
                                {registerValues?.phoneNumber}
                            </Text>
                        </Title>
                    </Col>
                </Row>
                <Title level={4} className="text-left">
                    Address
                </Title>
                <Row gutter={[16, 16]} className="text-left">
                    <Col span={12}>
                        <Title level={5}>
                            Country:{' '}
                            <Text italic className="font-normal">
                                {registerValues?.address?.country}
                            </Text>
                        </Title>
                    </Col>
                    <Col span={12}>
                        <Title level={5}>
                            City:{' '}
                            <Text italic className="font-normal">
                                {registerValues?.address?.city}
                            </Text>
                        </Title>
                    </Col>
                    <Col span={12}>
                        <Title level={5}>
                            District:{' '}
                            <Text italic className="font-normal">
                                {registerValues?.address?.district}
                            </Text>
                        </Title>
                    </Col>
                    <Col span={12}>
                        <Title level={5}>
                            Address Number:{' '}
                            <Text italic className="font-normal">
                                {registerValues?.address?.addressNumber}
                            </Text>
                        </Title>
                    </Col>
                </Row>
            </h3>
        </div>
    );
}

export default DoubleCheck;
