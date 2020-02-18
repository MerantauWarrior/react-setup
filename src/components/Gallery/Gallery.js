import React, {Component} from 'react';
import GalleryItem from './GalleryItem/GalleryItem';
import GalleryModal from './GalleryModal/GalleryModal';

class Gallery extends Component {

  state = {
    galleryItems: this.props.data,
    modalItem: null,
    modal: false
  };

  itemClickHandler = (number) => {
    event.preventDefault();
    this.setState({modalItem: number, modal: true});
  };

  modalClickHandler = (event) => {
    if (event.target === document.getElementById('modal')) {
      this.setState({modal: false})
    }
  };

  btnClickHandler = (value) => {
    this.setState((prevState) => {
      return {modalItem: prevState.modalItem + value};
    })
  };

  render() {
    const GalleryData = this.state.galleryItems.map((item, index) => {
      return <GalleryItem key={'gallery-' + index + Math.random()} data={item} number={index}
                          clicked={this.itemClickHandler}/>;
    });
    return (
      <React.Fragment>
        <div className="gallery seller-gallery__gallery">
          {GalleryData}
        </div>
        {this.state.modal === true
          ? document.body.classList.add('ovh')
          : document.body.classList.remove('ovh')}
        {this.state.modal === false ? "" :
          <GalleryModal data={this.state.galleryItems[this.state.modalItem]}
                        clicked={this.modalClickHandler}
                        btnClick={this.btnClickHandler}
                        number={this.state.modalItem}
                        total={this.state.galleryItems.length}/>}
      </React.Fragment>
    );
  }
}

export default Gallery;