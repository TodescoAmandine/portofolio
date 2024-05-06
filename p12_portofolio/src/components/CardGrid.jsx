import React from 'react';
import Card from './Card';



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