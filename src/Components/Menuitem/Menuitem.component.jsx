import React from 'react';
import './Menuitem.style.scss';
import { useParams, useNavigate } from 'react-router-dom';

const Menuitem = ({ title, link, img, id }) => {
  const item = useParams();
  const navigate = useNavigate();
  return (
    <div
      onClick={(e) => {
        navigate(`/collection/${link}`);
        e.preventDefault();
      }}
      style={{
        background: `linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.3)),url(${img}) no-repeat center center/cover`,
      }}
      className={`menuitem size-${id}`}
    >
      <div className='text'>
        <h1>{title}</h1>
        <span>SHOP NOW</span>
      </div>
    </div>
  );
};

export default Menuitem;
