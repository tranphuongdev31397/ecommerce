import { Col, Menu, Row } from 'antd';
import { productApi } from 'apis/productApi';
import { capitalizeString } from 'common/functions';
import CardItem from 'components/CardItem';
import Loader from 'components/Loader';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

function ShoppingContainer() {
    const categories = useSelector(
        (state) => state.categoriesReducer.categories
    );
    const stateFromRouter = useLocation();
    console.log(stateFromRouter);
    const [products, setProducts] = useState();
    const [categoryTab, setCategoryTab] = useState(
        stateFromRouter?.state || 'all'
    );

    useEffect(() => {
        const fetchAllProducts = async () => {
            const response = await productApi.getAll();
            setProducts(response);
        };
        const fetchProductByCategory = async () => {
            const response = await productApi.getInCategory(categoryTab);
            setProducts(response);
        };

        if (categoryTab === 'all') {
            fetchAllProducts();
        } else {
            fetchProductByCategory();
        }
    }, [categoryTab]);

    if (!products) {
        return <Loader />;
    }

    return (
        <div className="flex flex-auto flex-row justify-start">
            <div className="shopping__leftSide flex flex-column">
                <div className="shopping__item">
                    <div className="item__title border-b-sky-500 border-b-2 text-center p-4 font-bold text-xl">
                        Categories
                    </div>
                    <div className="item__content py-4">
                        <Menu
                            defaultSelectedKeys={
                                stateFromRouter?.state || 'all'
                            }
                        >
                            <Menu.Item
                                className=""
                                key="all"
                                onClick={() => setCategoryTab('all')}
                            >
                                All
                            </Menu.Item>
                            {Array.isArray(categories) &&
                                categories.map((category, idx) => {
                                    return (
                                        <Menu.Item
                                            key={category}
                                            className=""
                                            onClick={() =>
                                                setCategoryTab(category)
                                            }
                                        >
                                            {capitalizeString(category)}
                                        </Menu.Item>
                                    );
                                })}
                        </Menu>
                    </div>
                </div>
            </div>
            <div className="shopping__rightSide p-10">
                {/* Tool here */}
                <div className="shopping__products">
                    <Row gutter={[16, 16]}>
                        {Array.isArray(products) &&
                            products.map((item, idx) => {
                                return (
                                    <Col span={6} key={item.id}>
                                        <CardItem item={item} />
                                    </Col>
                                );
                            })}
                    </Row>
                </div>
            </div>
        </div>
    );
}
export default ShoppingContainer;
