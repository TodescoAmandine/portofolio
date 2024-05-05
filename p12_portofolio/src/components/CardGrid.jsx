import React from 'react';
import Card from './Card';
// import image1 from '../assets/img/ohmyfood.png';
// import image2 from '../assets/img/LOGO.png';
// import image3 from '../assets/img/Logo_sophie.png';
import aboutData from '../about.json'; 

const CardGrid = () => {
    console.log(aboutData);
    return (
        <div className='cards__container'>
            {aboutData.map((data, index) => (
                <Card key={index} image={data.image} title={data.title} content={data.content} tags={data.tags} />
            ))}
        </div>
    );
};

export default CardGrid;