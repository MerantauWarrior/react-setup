import React from 'react';
import styles from './GalleryModal.module.css';

const GalleryModal = (props) => {
  return (
    <div className={styles['gallery-modal']} id="modal" onClick={event => props.clicked(event)}>
      <div className={styles['gallery-modal__content']}>
        {props.number < 1
          ? ""
          : <button className={styles['gallery-modal__prev']} onClick={() => props.btnClick(-1)}>
            <svg width="13" height="21" viewBox="0 0 13 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2.4986 9.32203L1.79149 10.0291L2.4986 10.7362L10.2179 18.4555L10.0293 18.6441L1.41437 10.0291L10.0293 1.41421L10.2179 1.60278L2.4986 9.32203Z"
                fill="#F04650" stroke="#F04650" strokeWidth={2}/>
            </svg>
          </button>}
        {props.number < props.total - 1
          ? <button className={styles['gallery-modal__next']} onClick={() => props.btnClick(1)}>
            <svg width="13" height="21" viewBox="8 0 13 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M18.5014 11.678L19.2085 10.9709L18.5014 10.2638L10.7821 2.54449L10.9707 2.35593L19.5856 10.9709L10.9707 19.5858L10.7821 19.3972L18.5014 11.678Z"
                fill="#F04650" stroke="#F04650" strokeWidth={2}/>
            </svg>
          </button>
          : ""}
        {props.data.type === 'image'
          ? <img src={props.data.url} alt="" className={styles['gallery-modal__item']}/>
          : <video src={props.data.url} className={styles['gallery-modal__item']} controls={true}></video>}
        <div className={styles['gallery-modal__share']}>
          <a href="#" className={styles['gallery-modal__share-link']}>Поделиться</a>
        </div>
      </div>
    </div>
  );
};

export default GalleryModal;
