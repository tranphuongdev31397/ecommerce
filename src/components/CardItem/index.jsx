import { HeartOutlined, SearchOutlined } from '@ant-design/icons';
import { Button, Card, Popover, Rate } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { actAddItem } from 'slices/cartSlice';
import './style.scss';

const { Meta } = Card;

function CardItem({ item }) {
    const { rating, image, title, price, id } = item;

    const detail = <p>Detail</p>;
    const wishlist = <p>Add to wish list</p>;
    const dispatch = useDispatch();
    return (
        <Card
            className="card__item w-full"
            hoverable={true}
            cover={
                <div className="w-full h-full relative">
                    <img
                        className="w-full h-80 object-contain object-center"
                        alt="example"
                        src={image}
                    />
                    <div className="card__item-inHover absolute bottom-0 flex flex-col justify-end w-full h-full bg-opacity-50 h-500 bg-black">
                        <div className="relative gap-4 w-full h-10">
                            <div className="card__item-action w-fit h-fit  absolute  top-0 left-0">
                                <Popover
                                    content={wishlist}
                                    className="relative mx-2"
                                >
                                    <HeartOutlined className="text-lg bg-white text-sky-500 p-1 px-2" />
                                </Popover>
                                <Link to={`/product-detail/${id}`}>
                                    <Popover
                                        content={detail}
                                        className="relative mx-2"
                                    >
                                        <SearchOutlined className="text-lg bg-white text-sky-500 p-1 px-2" />
                                    </Popover>
                                </Link>
                            </div>
                        </div>
                        <Button
                            className="bg-black opacity-100 text-white border-black font-bold mt-4 card__item-btn"
                            size="large"
                            onClick={() => dispatch(actAddItem(item))}
                        >
                            ADD TO CART
                        </Button>
                    </div>
                </div>
            }
        >
            <Meta title={title} description={`$ ${price}`} />
            <Rate allowHalf defaultValue={rating?.rate || 5} disabled />
        </Card>
    );
}
export default CardItem;
