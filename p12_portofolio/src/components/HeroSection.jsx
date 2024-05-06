import React from 'react';


const Banner = ({title, imgbanner, about}) => {
    return (
        <section id='hero'>
        <div id='banner'>
            <h1 id='tag'>{title}</h1>
            <p id='about'>{about}</p>
               <img src={imgbanner} id="imgbanner" alt="paysage" />
        </div>
        </section>
    );
};

export default Banner;
