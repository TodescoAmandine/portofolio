import React from 'react';

const Modal = ({ closeModal, card }) => {
    return (
        <div className='modal'>
            <button className='modal__close' onClick={closeModal}>Close</button>
            <h2 className='modal__title'>{card.title}</h2>
            <img className='modal__image' src={card.image} alt={card.title} />
            <p className='modal__content'>{card.content}</p>
            <ul className='modal__tags'>
                {card.tags.map((tag, index) => (
                    <li key={index}>{tag}</li>
                ))}
            </ul>
        </div>
    );
};

export default Modal;