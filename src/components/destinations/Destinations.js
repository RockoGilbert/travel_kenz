import React from 'react'
import "./DestinationsStyles.css"

import BoraBora from '../../assets/borabora.jpg'
import BoraBora2 from '../../assets/borabora2.jpg'
import KeyWest from '../../assets/keywest.jpg'
import Maldives from '../../assets/maldives.jpg'
import Maldives2 from '../../assets/maldives2.jpg'
import Maldives3 from '../../assets/maldives3.jpg'



function Destinations() {
    return (
        <div className="destinations">
            <div className="container">
                <h1> All-Inclusive Resorts</h1>
                <p>On the Caribbean&aposs Best Beaches</p>
                <div className="img-container">
                    <img className="span-3 image-grid-row-2" src={BoraBora} alt="/" />
                    <img src={BoraBora2} alt="/" />
                    <img src={KeyWest} alt="/" />
                    <img src={Maldives} alt="/" />
                    <img src={Maldives2} alt="/" />
                    <img src={Maldives3} alt="/" />

                </div>

            </div>



        </div>
    )
}

export default Destinations