import React from 'react';
import { Link } from 'react-router-dom';
import './Store.css';
import { slideImages } from './SliderImages';
import Sport_Men from './Sport_Men.json';
import SportCard from './SportCard';
import StoreSlider from './StoreSlider';
import StoreNavbar from './StoreNavbar';

const Store = (props) => {

    return (
        <>
            <div className='store'>

                <StoreNavbar />
                <StoreSlider data={slideImages} Sliderheight="45vh" />

                {/*  ------------------- Main Page Starts ---------------------- */}
                <div className='store-main'>
                    {/*  ------------------- Best Seller Start ---------------------- */}
                    <div className='store-main-bs'>
                        <div className='store-main-titles'>
                            <div className='store-tag store-hover'>
                                {/* <div className='store-tag-hover'></div> */}
                                <Link to={'/store/menTshirt'}><h2><i>BESTSELLERS</i></h2></Link>
                            </div>
                            <span>LOVED BY CULT MEMBERS</span>
                        </div>
                        <div className='store-main-bs-slider'>
                            <SportCard data={Sport_Men} />
                        </div>
                    </div>
                    {/*  ------------------- Best Seller Ens ---------------------- */}

                    {/*  ------------------- Just Launched Ens ---------------------- */}
                    <div className='store-main-bs'>
                        <div className='store-main-titles'>
                            <div className='store-tag store-hover'>
                                <Link to={'/store/menTshirt'}><h2><i>BESTSELLERS</i></h2></Link>
                            </div>
                            <span>LOVED BY CULT MEMBERS</span>
                        </div>
                        <div className='store-main-bs-slider'>
                            <SportCard data={Sport_Men} />
                        </div>
                    </div>
                    {/*  ------------------- Just Launched Ens ---------------------- */}

                </div>
                {/* -------------------- Main Page Ends ---------------------- */}
            </div>
        </>
    )
}

export default Store