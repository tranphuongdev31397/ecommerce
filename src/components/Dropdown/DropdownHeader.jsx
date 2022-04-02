import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import React, { useState } from 'react';

function DropdownHeader({ menuArr, dropdownTitle }) {
    const [defaultValue, setDefaultValue] = useState({
        title: menuArr[0].title,
        icon: menuArr[0]?.icon || null
    });

    function handleChangeDropdown(menuItem) {
        //onClick is props (function) of the menuArr
        setDefaultValue(menuItem);
    }
    const menu = (
        <Menu>
            {menuArr.map((menuItem, idx) => {
                return (
                    <Menu.Item key={idx} icon={menuItem?.icon}>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={menuItem?.menuLink}
                            onClick={() => {
                                handleChangeDropdown(menuItem);
                            }}
                        >
                            {menuItem.title || menuItem}
                        </a>
                    </Menu.Item>
                );
            })}
        </Menu>
    );
    return (
        <Dropdown overlay={menu} trigger={['click', 'hover']}>
            <a
                className="ant-dropdown-link justify-center items-center flex"
                onClick={(e) => e.preventDefault()}
            >
                {dropdownTitle || (
                    <>
                        {defaultValue?.icon}
                        {defaultValue.title}
                    </>
                )}
                <DownOutlined className="ml-2" />
            </a>
        </Dropdown>
    );
}

export default DropdownHeader;
