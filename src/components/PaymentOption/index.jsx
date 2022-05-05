import { Radio } from 'antd';
import React, { useState } from 'react';
import { Typography } from 'antd';
const { Title } = Typography;
function PaymentOptions({ options }) {
    const [contentState, setContentState] = useState(options[0].value);

    const handleChangeContent = (e) => {
        setContentState(e.target.value);
    };

    return (
        <>
            <Radio.Group
                defaultValue={contentState}
                buttonStyle="solid"
                onChange={handleChangeContent}
                className="flex"
            >
                {options?.map((option, idx) => {
                    return (
                        <Radio.Button
                            className="w-1/2"
                            value={option.value}
                            key={option.value}
                        >
                            <div className="icon-center">
                                {option.icon}
                                <div>{option.title}</div>
                            </div>
                        </Radio.Button>
                    );
                })}
            </Radio.Group>

            <div className="p-4 w-full h-full">
                {options.map((option) => {
                    return option.value === contentState && option.content;
                })}
            </div>
        </>
    );
}

export default PaymentOptions;
