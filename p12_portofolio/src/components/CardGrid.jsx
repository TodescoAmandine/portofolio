import React from 'react';
import Card from './Card';
import { useNavigate } from 'react-router-dom';


import aboutData from '../about.json'; 

const CardGrid = () => {
    const navigate = useNavigate();

    const handleCardClick = (data) => {
        navigate(`/projects/${data.id}`);
    };
    console.log(aboutData);
    return (
        <div className='cards__container'>
            {aboutData.map((data, index) => (
                <Card key={index} image={data.image} title={data.title} content={data.content} tags={data.tags} onClick={() => handleCardClick(data)} />
            ))}
        </div>
    );
};

export default CardGrid;