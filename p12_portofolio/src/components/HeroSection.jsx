import React from 'react';


const Banner = ({title, imgbanner, about}) => {
    return (
        <div id='banner'>
            <h1 id='tag'>{title}</h1>
            <p id='about'>{about}</p>
               <img src={imgbanner} id="imgbanner" alt="paysage" />
        </div>
    );
};

export default Banner;
