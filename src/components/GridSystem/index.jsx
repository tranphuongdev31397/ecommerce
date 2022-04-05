import { Card, Col, Empty, Row } from 'antd';
import { productApi } from 'apis/productApi';
import { capitalizeString } from 'common/functions';
import CardItem from 'components/CardItem';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

function GridSystem() {
    const tabs = useSelector((state) => state.categoriesReducer.categories);
    console.log(tabs[0]);
    const [activeKey, setActiveKey] = useState(tabs[0]);
    const [products, setProducts] = useState([] || null);

    const tabList = tabs.map((tab) => {
        return { key: tab, tab: capitalizeString(tab) };
    });

    const onTabChange = (key) => {
        setActiveKey(key);
    };
    console.log(products);
    useEffect(() => {
        //call API
        const fetchProductInCategory = async () => {
            const responseProduct = await productApi.getInCategory(activeKey);
            setProducts(responseProduct);
        };

        fetchProductInCategory();

        return () => {
            console.log('unmounted');
        };
    }, [activeKey]);

    if (tabs.length === 0) {
        return <div>Loading</div>;
    }
    return (
        <>
            <Card
                style={{ width: '100%' }}
                className="mx-auto"
                tabList={tabList}
                bordered="false"
                activeTabKey={activeKey}
                onTabChange={(key) => {
                    onTabChange(key);
                }}
            >
                <Row gutter={[16, 16]}>
                    {products?.length !== 0 && products !== undefined ? (
                        products.map((item, idx) => {
                            return (
                                <Col
                                    span={6}
                                    key={item?.id || idx}
                                    className="w-full"
                                >
                                    <CardItem item={item} />
                                </Col>
                            );
                        })
                    ) : (
                        <Empty
                            className="mx-auto"
                            image={Empty.PRESENTED_IMAGE_SIMPLE}
                        />
                    )}
                </Row>
            </Card>
        </>
    );
}

export default GridSystem;
