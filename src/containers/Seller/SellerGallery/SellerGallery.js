import React, {Component} from 'react';
import Gallery from '../../../components/Gallery/Gallery';

const GalleryDataArray = [
  {
    thumb: 'img/seller-page/gallery-1.jpg',
    url: 'img/seller-page/gallery-big-1.jpg',
    type: 'image'
  },
  {
    thumb: 'img/seller-page/gallery-2.jpg',
    url: 'img/stock-footage-panda-baby-bear-going-to-sleep-on-the-tree.mp4',
    type: 'video'
  },
  {
    thumb: 'img/seller-page/gallery-3.jpg',
    url: 'img/seller-page/gallery-big-1.jpg',
    type: 'image'
  },
  {
    thumb: 'img/seller-page/gallery-1.jpg',
    url: 'img/seller-page/gallery-big-1.jpg',
    type: 'image'
  },
  {
    thumb: 'img/seller-page/gallery-1.jpg',
    url: 'img/seller-page/gallery-big-1.jpg',
    type: 'image'
  },
  {
    thumb: 'img/seller-page/gallery-2.jpg',
    url: 'img/stock-footage-panda-baby-bear-going-to-sleep-on-the-tree.mp4',
    type: 'video'
  },
  {
    thumb: 'img/seller-page/gallery-3.jpg',
    url: 'img/seller-page/gallery-big-1.jpg',
    type: 'image'
  },
  {
    thumb: 'img/seller-page/gallery-1.jpg',
    url: 'img/seller-page/gallery-big-1.jpg',
    type: 'image'
  },
  {
    thumb: 'img/seller-page/gallery-1.jpg',
    url: 'img/seller-page/gallery-big-1.jpg',
    type: 'image'
  },
  {
    thumb: 'img/seller-page/gallery-2.jpg',
    url: 'img/stock-footage-panda-baby-bear-going-to-sleep-on-the-tree.mp4',
    type: 'video'
  },
  {
    thumb: 'img/seller-page/gallery-3.jpg',
    url: 'img/seller-page/gallery-big-1.jpg',
    type: 'image'
  },
  {
    thumb: 'img/seller-page/gallery-1.jpg',
    url: 'img/stock-footage-panda-baby-bear-going-to-sleep-on-the-tree.mp4',
    type: 'video'
  }
];

class SellerGallery extends Component {
  state = {
    galleryData: [],
    loaded: false
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({galleryData: GalleryDataArray, loaded:true})
    }, 500)
  }

  render() {
    return (
      <React.Fragment>
        <div className="title">Мастерская</div>
        {
          this.state.loaded === false
            ? 'Loading gallery...'
            : <Gallery data={this.state.galleryData}/>
        }
      </React.Fragment>
    );
  }
}

export default SellerGallery;