import { Button, Rate, Tabs } from 'antd';
import { productApi } from 'apis/productApi';
import { capitalizeString } from 'common/functions';
import ImageZoom from 'components/ImageZoom';
import Loader from 'components/Loader';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { actAddItem } from 'slices/cartSlice';
//const from ui

function ProductDetailCtn() {
    const { TabPane } = Tabs;

    const { productId } = useParams();
    const [product, setProduct] = useState();
    const defaultValue = 0;

    const dispatch = useDispatch();
    useEffect(() => {
        const fetchProductDetail = async () => {
            const response = await productApi.getProductDetail(productId);
            setProduct(response);
        };
        fetchProductDetail();
    }, []);
    if (!product) {
        return <Loader />;
    }
    return (
        <div className="productDetail">
            <div className="productDetail__container flex flex-auto productDetail mx-40 justify-around">
                <div className="productDetail__image w-1/4 z-1">
                    <ImageZoom image={product.image} className="z-1" />
                </div>
                <div className="productDetail__box  w-2/4 flex flex-col ">
                    <div className="productDetail__info border-b-2 border-b-slate-300">
                        <p className="my-2 font-bold text-3xl">
                            {product.title}
                        </p>

                        <p className="my-2 font-bold text-2xl">
                            {product.price}$
                        </p>

                        <p className="my-2">
                            <Rate
                                allowHalf
                                defaultValue={
                                    product?.rating.rate || defaultValue
                                }
                                tooltips={
                                    !product ||
                                    (product.rating.rate === 0 && [
                                        'Not Rating'
                                    ])
                                }
                                disabled
                            />
                        </p>
                        <p className="my-2 font-bold text-xl">Size</p>
                        <p className="my-2 font-bold text-xl">Color</p>
                        <p className="my-2 font-bold text-xl">
                            Category:
                            <Link
                                to="/shopping"
                                state={product.category}
                                className="mx-2 my-2 font-normal text-sky-500"
                            >
                                {capitalizeString(product.category)}
                            </Link>
                        </p>
                    </div>
                    <div className="productDetail__action my-4">
                        <Button
                            className="mx-2"
                            type="default"
                            size="large"
                            onClick={() => dispatch(actAddItem(product))}
                        >
                            Add to cart
                        </Button>
                        <Button className="mx-2" type="default" size="large">
                            Wishlist
                        </Button>
                    </div>
                </div>
            </div>

            <div className="productDetail__description my-10">
                <Tabs defaultActiveKey="1" centered size="large">
                    <TabPane tab="Description" key="1">
                        {product.description}
                    </TabPane>
                    <TabPane tab="Review" key="2">
                        Content of Tab Pane 2
                    </TabPane>
                </Tabs>
            </div>
        </div>
    );
}
export default ProductDetailCtn;
