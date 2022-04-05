import CardItem from 'components/CardItem';
import GridSystem from 'components/GridSystem';
import BannerContainer from 'containers/BannerContainer';
import React from 'react';

function Home() {
    return (
        <>
            <BannerContainer />
            <GridSystem />
        </>
    );
}

export default Home;
