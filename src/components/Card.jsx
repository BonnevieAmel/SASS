import './Card.scss';
import React from 'react';
import PropTypes from "prop-types";

const Card = ({manga}) => {
  return (
    <div className="card">
      <figure>
        {manga.imgSrc === undefined ? <>
        <p>???</p>
        <figcaption>{manga.name}</figcaption></> 
        : 
        <>
        <img src= {manga.imgSrc}/><figcaption>{manga.name}</figcaption></>}
        </figure>
      <div className="card-text">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
        </p>
      </div>
    </div>
  );
};




Card.propTypes = {
  manga: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
  }).isRequired,
};
export default Card;
