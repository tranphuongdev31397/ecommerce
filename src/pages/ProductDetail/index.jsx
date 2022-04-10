import PageBanner from 'components/PageBanner';
import { PATH_IMG } from 'constant';
import ProductDetailCtn from 'containers/ProductDetail';
import React from 'react';

function ProductDetail() {
    return (
        <>
            <PageBanner
                titlePage={'Detail'}
                bgImg={PATH_IMG + 'pageBanner.jpg'}
            />
            <div className="mx-auto container my-10">
                <ProductDetailCtn />
            </div>
        </>
    );
}

export default ProductDetail;
