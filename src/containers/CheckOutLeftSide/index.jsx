import { Collapse } from 'antd';
import LoginForm from 'components/LoginForm';
import React from 'react';
import Coupon from './Coupon';

function CheckOutLeftSide() {
    function callback(key) {
        console.log(key);
    }
    const { Panel } = Collapse;

    const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can`;
    return (
        <Collapse defaultActiveKey={['1']} onChange={callback}>
            <Panel header="Have a Coupon" key="1">
                <Coupon />
            </Panel>
            <Panel header="Login" key="2" className="mx-auto ">
                <LoginForm />
            </Panel>
            <Panel header="Shipping Address" key="3">
                <p>{text}</p>
            </Panel>
        </Collapse>
    );
}

export default CheckOutLeftSide;
