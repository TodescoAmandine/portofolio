import React from 'react';

const Card = ({ image, title, content,tags }) => {
    return (
        <div className='card'>
            <img className='card__image' src={image} alt="" />
            <div className='card__content'>
                <div> 
                    <h3 className='card__content--h3'>{title}</h3>
                        <p className='card__content--p'>{content}</p>
                </div>
                    <p className='card__content--link'>View in Github <i className="fa-solid fa-arrow-up"></i></p>
                    <p className='cards_content--tags'>{tags}</p>
            </div>
        </div>
    );
};

export default Card;