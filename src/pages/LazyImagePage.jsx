import React from 'react';
import LazyImageLoader from '../components/LazyImageLoader/LazyImageLoader';
import './LazyImagePage.scss';
import LazyImageOne from './img/image1.png';

const GridPage = () => {

    return (
        <div className="image-page">
            <h1>Lazy Load Images</h1>
            <div className="image-page-container">
                <div className="image-page-holder">
                    <LazyImageLoader 
                        src={LazyImageOne}
                    />
                </div>
                <div className="image-page-holder">
                    <LazyImageLoader 
                        src={LazyImageOne}
                    />
                </div>
                <div className="image-page-holder">
                    <LazyImageLoader 
                        src={LazyImageOne}
                    />
                </div>
                <div className="image-page-holder">
                    <LazyImageLoader 
                        src={LazyImageOne}
                    />
                </div>
            </div>
        </div>
    )
}

export default GridPage