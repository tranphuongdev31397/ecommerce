import PageBanner from 'components/PageBanner';
import ShoppingContainer from 'containers/ShoppingContainer';
import React from 'react';

function Shopping() {
    return (
        <>
            <PageBanner
                titlePage={'Shopping'}
                bgImg={'images/pageBanner.jpg'}
            />
            <div className="mx-auto container my-10">
                <ShoppingContainer />
            </div>
        </>
    );
}
export default Shopping;
