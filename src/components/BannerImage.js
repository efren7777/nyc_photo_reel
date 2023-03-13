import React from 'react';
import './master.css';

function BannerImage () {
    return(
        <div>
            <img className='banner' src={require("../pics/ev_small.jpg")} alt="Supposed to be a banner"/>
            <img className='banner' src={require("../pics/ash_ethan_ev_small.jpg")} alt="Supposed to be a banner"/>

        </div>
    )
}

export default BannerImage;

