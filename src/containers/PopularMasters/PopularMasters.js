import React, {Component} from 'react';
import PopularMaster from '../../components/PopularMaster/PopularMaster';
import InfiniteScroll from 'react-infinite-scroll-component'

import {popularMasterData} from '../../../dummyData';

class PopularMasters extends Component {
  state = {
    dataLoaded: false,
    data: [],
    position: 0,
    hasMore: true
  };

  fetchMoreData = () => {
    if (this.state.data.length >= 28) {
      this.setState({ hasMore: false });
      return;
    }
    setTimeout(() => {
      this.setState(prevState => ({
        data: prevState.data.concat(popularMasterData.slice(prevState.position, prevState.position+2)),
        position: prevState.position+2
      }));
    }, 1000);
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({data: popularMasterData.slice(0, 2), dataLoaded: true, position: 2});
    }, 1500);
  }
  render() {
    return (
      <React.Fragment>
        {this.state.dataLoaded === false
          ? <div>Мы ещё не загрузили Мастеров... Ждите... Тут был бы спинер, если бы я не ленился)</div>
          : <InfiniteScroll
            dataLength={this.state.data.length}
            next={this.fetchMoreData}
            hasMore={this.state.hasMore}
            scrollThreshold={0.95}
            loader={<h4>Загружаю мастеров...</h4>}
            endMessage={
              <p style={{ textAlign: "center" }}>
                <b>Всё! Популярные Мастера закончились</b>
              </p>
            }
          >
            {this.state.data.map((masterData, index)=> {
              return(
                <PopularMaster key={index} data={masterData}/>
              );
            })}
          </InfiniteScroll>}
      </React.Fragment>
    );
  }
}

export default PopularMasters;


