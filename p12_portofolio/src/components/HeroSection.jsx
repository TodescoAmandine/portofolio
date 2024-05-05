import React from 'react';


const Banner = ({title, imgbanner}) => {
    return (
        <div id='banner'>
            <h1 id='tag'>{title}</h1>
            <p id='about'>I'm a web junior developper. For me the web is a place where I can express my creativity and my passion for technology. I'm always looking for new challenges and I'm ready to learn new things. I'm a hard worker.
                </p>
               <img src={imgbanner} id="imgbanner" alt="paysage" />
        </div>
    );
};

export default Banner;
