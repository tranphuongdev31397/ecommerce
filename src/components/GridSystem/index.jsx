import { Card, Col, Empty, Row, Tabs } from 'antd';
import { productApi } from 'apis/productApi';
import { capitalizeString } from 'common/functions';
import CardItem from 'components/CardItem';
import Loader from 'components/Loader';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './style.scss';
function GridSystem() {
    const tabs = useSelector((state) => state.categoriesReducer.categories);

    const [activeKey, setActiveKey] = useState(tabs[0]);
    const [products, setProducts] = useState();

    const tabList = tabs.map((tab) => {
        return { key: tab, tab: capitalizeString(tab) };
    });

    const onTabChange = (key) => {
        setActiveKey(key);
    };
    useEffect(() => {
        //call API
        const fetchProductInCategory = async () => {
            const responseProduct = await productApi.getInCategory(activeKey);
            setProducts(responseProduct);
        };

        fetchProductInCategory();
        return () => {
            setProducts();
        };
    }, [activeKey]);

    if (!Array.isArray(products)) {
        return <Loader />;
    }
    return (
        <>
            <Card
                bordered={false}
                style={{ width: '100%' }}
                className="mx-auto"
                tabList={tabList}
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
