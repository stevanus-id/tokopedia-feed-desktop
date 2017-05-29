import React, { Component } from 'react';
import '../FeedView.css';

import FeedEmpty from '../../../components/FeedEmpty'
import FeedProduct from '../../../components/FeedProduct'
import FeedHotList from '../../../components/FeedHotList'
import FeedOfficialStore from '../../../components/FeedOfficialStore'
import FeedOfficialStoreProduct from '../../../components/FeedOfficialStoreProduct'
import FeedInspiration from '../../../components/FeedInspiration'

class FeedView extends Component {
  constructor (props) {
    super(props)
  }

  render() {
    return (
      <div className='feed'>
        <div className='feed__main-content'>
          <FeedEmpty />
          <FeedProduct />
          <FeedOfficialStoreProduct />
          <FeedProduct />
          <FeedOfficialStore />
          <FeedInspiration />
        </div>
        <div className='feed__right-sidebar'>
          <FeedHotList />
        </div>
      </div>
    );
  }
}

export default FeedView;
