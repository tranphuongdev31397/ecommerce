import { Col, Row, Typography } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';

function InforShip() {
    const personal = useSelector(
        (state) => state.checkOutReducer.paymentInformation.personal
    );
    const { Title, Text } = Typography;
    return (
        <div>
            <p>
                Hi <span className="font-bold">{personal.name}</span>, please
                check your address and phone number, so that we can deliver to
                you as soon as possible, thanks
            </p>

            <Title level={5} className="my-2">
                Phone Number:{' '}
                <Text italic className="font-normal">
                    {personal?.phoneNumber}
                </Text>
            </Title>

            <Title level={4} className="text-left">
                Address
            </Title>
            <Row gutter={[16, 16]} className="text-left">
                <Col span={24}>
                    <Title level={5}>
                        Country:{' '}
                        <Text italic className="font-normal">
                            {personal?.address?.country}
                        </Text>
                    </Title>
                </Col>
                <Col span={24}>
                    <Title level={5}>
                        City:{' '}
                        <Text italic className="font-normal">
                            {personal?.address?.city}
                        </Text>
                    </Title>
                </Col>
                <Col span={24}>
                    <Title level={5}>
                        District:{' '}
                        <Text italic className="font-normal">
                            {personal?.address?.district}
                        </Text>
                    </Title>
                </Col>
                <Col span={24}>
                    <Title level={5}>
                        Address Number:{' '}
                        <Text italic className="font-normal">
                            {personal?.address?.addressNumber}
                        </Text>
                    </Title>
                </Col>
            </Row>
        </div>
    );
}

export default InforShip;
