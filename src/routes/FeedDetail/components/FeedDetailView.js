import React, { Component } from 'react';
import '../FeedDetailView.css';

import FeedHotList from '../../../components/FeedHotList'
import FeedProductDetail from '../../../components/FeedProductDetail'

var FeedDetailView = React.createClass({
  render: function() {
    return (
      <div className='feed-detail'>
        <div className='mr-40 feed-detail__left-sidebar'>
          <img className='feed-detail__back-icon' src="./img/arrow-hijau.png" alt="" /> 
          <span className="fs-12 va-middle green">Kembali ke Feed</span>
        </div>
        <div className='feed-detail__main-content'>
          <FeedProductDetail />
        </div>
        <div className='feed-detail__right-sidebar'>
          <FeedHotList />
        </div>
      </div>
    );
  }
})

export default FeedDetailView;
