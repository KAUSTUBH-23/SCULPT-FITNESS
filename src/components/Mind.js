import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Mind.css';
import logo from '../images/logo.png';
import Therapy from './TherapySession.json';
import TherapyItem from './TherapyItem';
import { mindImages } from './SliderImages';
import StoreSlider from './StoreSlider';

const Mind = (props) => {
    const [mind_therapy, setTherapy] = useState('');

    const searachTherapy = (event) => {
        setTherapy(event.target.value);
    }

    let therapySearch = Therapy.filter(item => {
        return Object.keys(item).some(key =>
            item[key].toString().toLowerCase().includes(mind_therapy.toString().toLowerCase()))
    })

    return (
        <>
            <div className='mind'>
                <div className='mind-navbar'>
                    <div className='mind-nav'>
                        <Link to='./Home.js' className='mind-logo'> <img src={logo} alt="logo" /></Link>
                    </div>
                </div>
                <div className='mind-slide'>
                    <div className='mind-slide-item'>
                        <StoreSlider data={mindImages} Sliderheight="45vh" />
                    </div>
                </div>
                <div className='mind-main'>
                    <div className='mind-main-top'>
                        <div className='mind-main-title'>
                            <h5>Experts To Help You</h5>
                            <p>Counselling Therapy Sessions With Licensed & Verified Experts</p>
                        </div>
                        <div className='mind-main-search'>
                            <div className="header_center">
                                <form action="https://www.google.com/search" method="get" className="search-bar">
                                    <input type="text" className='therapy-search' value={mind_therapy} placeholder="Enter therapy name...." onChange={searachTherapy.bind(this)} />
                                    <button type="submit"><i className='bx bx-search'></i></button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className='mind-main-content'>
                        <div className='container'>
                            <div className='row my-1'>
                                {
                                    therapySearch.map((element) => {
                                        return (
                                            <div className='col-md-6 my-2' key={element.id}>
                                                <TherapyItem therapyName={element.therapyName} therapyDesp={element.therapyDesp} therapySession={element.therapyTime} price={element.therapyPrice} offerPrice={element.offerPrice} imageUrl={element.firstImage} id={element.id} />
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Mind