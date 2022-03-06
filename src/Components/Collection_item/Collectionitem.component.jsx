import React from 'react';
import './Collectionitem.style.scss';

export default function Collectionitem({ id, name, price, imageUrl }) {
  return (
    <div className='collectionitem'>
      <div
        className='image'
        style={{
          background: `linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.5)),url(${imageUrl}) no-repeat center center/cover
        `,
        }}
      >
        <h3 className='name'>{name}</h3>
        <h4 className='pric'>{`Price:${price}`}</h4>
      </div>
    </div>
  );
}
