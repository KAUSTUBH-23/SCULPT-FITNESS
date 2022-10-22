import React, { useState } from 'react'
import './Care.css'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'
import { careImages } from './SliderImages';
import StoreSlider from './StoreSlider';
import CareItem from './CareItem'
import LabTest from './CareLabTest.json'

const Care = (props) => {
    const [care_test, setTest] = useState('');

    const searachTest = (event) => {
        setTest(event.target.value);
    }

    let testSearch = LabTest.filter(item => {
        return Object.keys(item).some(key =>
            item[key].toString().toLowerCase().includes(care_test.toString().toLowerCase()))
    })

    return (
        <>
            <div className='care'>
                <div className='care-navbar'>
                    <div className='care-nav'>
                        <Link to='./Home.js' className='care-logo'> <img src={logo} alt="logo" /></Link>
                    </div>
                </div>
                <div className='care-slide'>
                    <div className='care-slide-item'>
                        <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_1360:150/dpr_2/image/vm/7ffbda78-70e5-4107-bc7b-d66ee23916fb.png" alt="logo" />
                        <StoreSlider data={careImages} Sliderheight="42vh" />
                    </div>
                </div>
                <div className='care-main'>
                    <div className='care-main-top'>
                        <div className='care-main-title'>
                            <h2>Lab Tests</h2>
                            <p>Assess and monitor your health from the comfort of your home now</p>
                        </div>
                        <div className='care-main-search'>
                            <div className="care-header-center">
                                <form className="care-search-bar">
                                    <input type="text" className='care-search' value={care_test} placeholder="Enter test name...." onChange={searachTest.bind(this)} />
                                    <button type="submit"><i className='bx bx-search'></i></button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className='care-main-content'>
                        <div className='care-main-item'>
                            <div className='container'>
                                <div className='row my-1'>
                                    {testSearch.map((element) => {
                                        return (
                                            // *IMPORTANT - whenever we use map to iterate we need to pass a unique key value to each iteration
                                            <div className='col-md-3 my-5' key={element.id}>
                                                <CareItem price={element.price} offerPrice={element.offerPrice} imageUrl={element.mainImageURL} id={element.id} />
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Care