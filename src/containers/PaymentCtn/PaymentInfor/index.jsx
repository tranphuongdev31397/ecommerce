import React from 'react';
import { Tabs } from 'antd';
import {
    AppleOutlined,
    AndroidOutlined,
    ShoppingCartOutlined,
    InfoCircleOutlined
} from '@ant-design/icons';
import './style.scss';
import Order from './Order';
import InforShip from './InforShip';
const { TabPane } = Tabs;

function PaymentInfor() {
    return (
        <Tabs defaultActiveKey="1" className="w-full " id="payment__tabs">
            <TabPane
                className="p-4"
                tab={
                    <span className="w-1/2">
                        <ShoppingCartOutlined />
                        Order
                    </span>
                }
                key="1"
            >
                <Order />
            </TabPane>
            <TabPane
                className="p-4"
                tab={
                    <span>
                        <InfoCircleOutlined />
                        Information Shipping
                    </span>
                }
                key="2"
            >
                <InforShip />
            </TabPane>
        </Tabs>
    );
}

export default PaymentInfor;
