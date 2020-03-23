import React from 'react';

const GalleryItem = (props) => {
  return (
    <div className={
      props.data.type === 'video' ? "gallery__item gallery__item--video": "gallery__item gallery__item--image"
    }>
      <a href={props.data.url} className="gallery__link" onClick={(event) => props.clicked(event, props.number)}>
        <img src={props.data.thumb} alt="" className="gallery__img"/>
      </a>
    </div>
  );
};

export default GalleryItem;
