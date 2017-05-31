import React, { Component } from 'react';
import './FeedProduct.css';
import getImage from '../../lib/utils.js';

var FeedProduct = React.createClass({
  render: function() {
    return (
      <div className='feed-product'>
        <div className='feed-product__header'>
          <div className='feed-product__seller-photo'>
            <img alt='' src={getImage('tokopedia-avatar-square.png')} />
          </div>
          <div className='feed-product__seller-activity'>
            <span className='fw-600'>Nana Shop Ekstraordinari </span>
            ubah <span className='fw-600'>{this.props.productCount} produk</span>
            <div className='feed-product__seller-activity--time'>3 jam</div>
          </div>
          <div className='feed-product__seller-share'></div>
        </div>

        <div className='feed-product__content'>		

          {
            this.props.productCount <= 2 ?
            <div className='row-fluid'>
              <div className='span6 feed-product__items'>
                <img src={getImage('product-1.jpg')} className='feed-product__image'/>
                <div className='feed-product__details'>
                  <div className='fs-12 fw-600 lh-17 feed-product__items--name'>
                    <div className="detail__name js-ellipsis" data-js-ellipsis-limit="15">
                    Bantex Mouse Pad Blue #1788 01
                    </div>
                  </div>
                  <div className='feed-product__items--price'>
                    <label className='fs-12 fw-600 orange-red'>Rp 24.970</label>
                  </div>
                </div>
              </div>
              <div className='span6 feed-product__items'>
                <img src={getImage('product-2.jpg')} className='feed-product__image'/>
                <div className='feed-product__details'>
                  <div className='fs-12 fw-600 lh-17 feed-product__items--name'>
                    <div className="detail__name js-ellipsis" data-js-ellipsis-limit="15">
                    Linex Drawing Tube DT 74 40cm (74cm) Black #4884 10
                    </div>
                  </div>
                  <div className='feed-product__items--price'>
                    <label className='fs-12 fw-600 orange-red'>Rp 170.390</label>
                  </div>
                </div>
              </div>
            </div> :
            this.props.productCount === 3 ?
            <div className='row-fluid'>
              <div className='span4 feed-product__items'>
                <img src={getImage('product-3.jpg')} className='feed-product__image'/>
                <div className='feed-product__details'>
                  <div className='fs-12 fw-600 lh-17 feed-product__items--name'>
                    <div className="detail__name js-ellipsis" data-js-ellipsis-limit="15">
                    Bantex Stitching Artist Portfolio A1 Black #8006 10
                    </div>
                  </div>
                  <div className='feed-product__items--price'>
                    <label className='fs-12 fw-600 orange-red'>Rp 448.470</label>
                  </div>
                </div>
              </div>
              <div className='span4 feed-product__items'>
                <img src={getImage('product-4.jpg')} className='feed-product__image'/>
                <div className='feed-product__details'>
                  <div className='fs-12 fw-600 lh-17 feed-product__items--name'>
                    <div className="detail__name js-ellipsis" data-js-ellipsis-limit="15">
                    Bantex Stitching Artist Portfolio A1 Black #8005 10
                    </div>
                  </div>
                  <div className='feed-product__items--price'>
                    <label className='fs-12 fw-600 orange-red'>Rp 341.220</label>
                  </div>
                </div>
              </div>
              <div className='span4 feed-product__items'>
                <img src={getImage('product-5.jpg')} className='feed-product__image'/>
                <div className='feed-product__details'>
                  <div className='fs-12 fw-600 lh-17 feed-product__items--name'>
                    <div className="detail__name js-ellipsis" data-js-ellipsis-limit="15">
                     Bantex Stitching Artist Portfolio A1 Black #8003 10
                    </div>
                  </div>
                  <div className='feed-product__items--price'>
                    <label className='fs-12 fw-600 orange-red'>Rp 289.520</label>
                  </div>
                </div>
              </div>
            </div> :
            this.props.productCount === 4 ?
            <div>
              <div className='row-fluid'>
                <div className='span6 feed-product__items'>
                  <img src={getImage('product-6.jpg')} className='feed-product__image'/>
                  <div className='feed-product__details'>
                    <div className='fs-12 fw-600 lh-17 feed-product__items--name'>
                      <div className="detail__name js-ellipsis" data-js-ellipsis-limit="15">
                      Bantex Ink Jet Photo Paper A4 Premium (10 sheets) 225gr
                      </div>
                    </div>
                    <div className='feed-product__items--price'>
                      <label className='fs-12 fw-600 orange-red'>Rp 74.030</label>
                    </div>
                  </div>
                </div>
                <div className='span6 feed-product__items'>
                  <img src={getImage('product-7.jpg')} className='feed-product__image'/>
                  <div className='feed-product__details'>
                    <div className='fs-12 fw-600 lh-17 feed-product__items--name'>
                      <div className="detail__name js-ellipsis" data-js-ellipsis-limit="15">
                      Bantex Ink Jet Photo Paper A3 Premium (10 sheets) 225gr
                      </div>
                    </div>
                    <div className='feed-product__items--price'>
                      <label className='fs-12 fw-600 orange-red'>Rp 157.850</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className='row-fluid'>
                <div className='span6 feed-product__items feed-product__items--border-top'>
                  <img src={getImage('product-8.jpg')} className='feed-product__image'/>
                  <div className='feed-product__details'>
                    <div className='fs-12 fw-600 lh-17 feed-product__items--name'>
                      <div className="detail__name js-ellipsis" data-js-ellipsis-limit="15">
                      Bantex Ink Jet Photo Paper A4 Glossy (10 sheets) 180gr #8001
                      </div>
                    </div>
                    <div className='feed-product__items--price'>
                      <label className='fs-12 fw-600 orange-red'>Rp 53.750</label>
                    </div>
                  </div>
                </div>
                <div className='span6 feed-product__items feed-product__items--border-top'>
                  <img src={getImage('product-9.jpg')} className='feed-product__image'/>
                  <div className='feed-product__details'>
                    <div className='fs-12 fw-600 lh-17 feed-product__items--name'>
                      <div className="detail__name js-ellipsis" data-js-ellipsis-limit="15">
                      Bantex Matt Coated Ink Jet Paper A4(60 sheets) 95gr
                      </div>
                    </div>
                    <div className='feed-product__items--price'>
                      <label className='fs-12 fw-600 orange-red'>Rp 95.370</label>
                    </div>
                  </div>
                </div>
              </div>
            </div> :
            this.props.productCount === 5 ?
            <div>
              <div className='row-fluid'>
                <div className='span6 feed-product__items'>
                  <img src={getImage('product-10.jpg')} className='feed-product__image'/>
                  <div className='feed-product__details'>
                    <div className='fs-12 fw-600 lh-17 feed-product__items--name'>
                      <div className="detail__name js-ellipsis" data-js-ellipsis-limit="15">
                      Bantex Matt Coated Ink Jet Paper A4(30 sheets) 95gr #8001
                      </div>
                    </div>
                    <div className='feed-product__items--price'>
                      <label className='fs-12 fw-600 orange-red'>Rp 59.510</label>
                    </div>
                  </div>
                </div>
                <div className='span6 feed-product__items'>
                  <img src={getImage('product-11.jpg')} className='feed-product__image'/>
                  <div className='feed-product__details'>
                    <div className='fs-12 fw-600 lh-17 feed-product__items--name'>
                      <div className="detail__name js-ellipsis" data-js-ellipsis-limit="15">
                      Linex Drawing Tube DT 124 70cm (124cm) Black #4848 10
                      </div>
                    </div>
                    <div className='feed-product__items--price'>
                      <label className='fs-12 fw-600 orange-red'>Rp 281.490</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className='row-fluid'>
                <div className='span4 feed-product__items feed-product__items--border-top'>
                  <img src={getImage('product-12.jpg')} className='feed-product__image'/>
                  <div className='feed-product__details'>
                    <div className='fs-12 fw-600 lh-17 feed-product__items--name'>
                      <div className="detail__name js-ellipsis" data-js-ellipsis-limit="15">
                      Bantex Slanted Sign Holder A8 Transparent #8857 08
                      </div>
                    </div>
                    <div className='feed-product__items--price'>
                      <label className='fs-12 fw-600 orange-red'>Rp 11.770</label>
                    </div>
                  </div>
                </div>
                <div className='span4 feed-product__items feed-product__items--border-top'>
                  <img src={getImage('product-13.jpg')} className='feed-product__image'/>
                  <div className='feed-product__details'>
                    <div className='fs-12 fw-600 lh-17 feed-product__items--name'>
                      <div className="detail__name js-ellipsis" data-js-ellipsis-limit="15">
                      Bantex Slanted Holder Transparent #8856 08
                      </div>
                    </div>
                    <div className='feed-product__items--price'>
                      <label className='fs-12 fw-600 orange-red'>Rp 34.320</label>
                    </div>
                  </div>
                </div>
                <div className='span4 feed-product__items feed-product__items--border-top'>
                  <img src={getImage('product-14.jpg')} className='feed-product__image'/>
                  <div className='feed-product__details'>
                    <div className='fs-12 fw-600 lh-17 feed-product__items--name'>
                      <div className="detail__name js-ellipsis" data-js-ellipsis-limit="15">
                      Bantex Stand Holder A4 Transparent #8854 08
                      </div>
                    </div>
                    <div className='feed-product__items--price'>
                      <label className='fs-12 fw-600 orange-red'>Rp 87.890</label>
                    </div>
                  </div>
                </div>
              </div>
            </div> :
            this.props.productCount >= 6 ?
            <div>
              <div className='row-fluid'>
                <div className='span4 feed-product__items'>
                  <img src={getImage('product-15.jpg')} className='feed-product__image'/>
                  <div className='feed-product__details'>
                    <div className='fs-12 fw-600 lh-17 feed-product__items--name'>
                      <div className="detail__name js-ellipsis" data-js-ellipsis-limit="15">
                      Bantex Slanted Sign Holder A5 Transparent #8853 08
                      </div>
                    </div>
                    <div className='feed-product__items--price'>
                      <label className='fs-12 fw-600 orange-red'>Rp 48.480</label>
                    </div>
                  </div>
                </div>
                <div className='span4 feed-product__items'>
                  <img src={getImage('product-16.jpg')} className='feed-product__image'/>
                  <div className='feed-product__details'>
                    <div className='fs-12 fw-600 lh-17 feed-product__items--name'>
                      <div className="detail__name js-ellipsis" data-js-ellipsis-limit="15">
                      Bantex Slanted Sign Holder A4 Transparent #8852 08
                      </div>
                    </div>
                    <div className='feed-product__items--price'>
                      <label className='fs-12 fw-600 orange-red'>Rp 75.240</label>
                    </div>
                  </div>
                </div>
                <div className='span4 feed-product__items'>
                  <img src={getImage('product-17.jpg')} className='feed-product__image'/>
                  <div className='feed-product__details'>
                    <div className='fs-12 fw-600 lh-17 feed-product__items--name'>
                      <div className="detail__name js-ellipsis" data-js-ellipsis-limit="15">
                      Bantex Adhesive A4 Pocket (5pcs/pack) #8877 00
                      </div>
                    </div>
                    <div className='feed-product__items--price'>
                      <label className='fs-12 fw-600 orange-red'>Rp 97.020</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className='row-fluid'>
                <div className='span4 feed-product__items feed-product__items--border-top'>
                  <img src={getImage('product-18.jpg')} className='feed-product__image'/>
                  <div className='feed-product__details'>
                    <div className='fs-12 fw-600 lh-17 feed-product__items--name'>
                      <div className="detail__name js-ellipsis" data-js-ellipsis-limit="15">
                      Bantex Adhesive Business Card (10 pcs/pack) #8876 00
                      </div>
                    </div>
                    <div className='feed-product__items--price'>
                      <label className='fs-12 fw-600 orange-red'>Rp 27.830</label>
                    </div>
                  </div>
                </div>
                <div className='span4 feed-product__items feed-product__items--border-top'>
                  <img src={getImage('product-19.jpg')} className='feed-product__image'/>
                  <div className='feed-product__details'>
                    <div className='fs-12 fw-600 lh-17 feed-product__items--name'>
                      <div className="detail__name js-ellipsis" data-js-ellipsis-limit="15">
                      Bantex Slanted Sign Holder A8 Transparent #8875 08
                      </div>
                    </div>
                    <div className='feed-product__items--price'>
                      <label className='fs-12 fw-600 orange-red'>Rp 30.712</label>
                    </div>
                  </div>
                </div>
                <div className='span4 feed-product__items feed-product__items--border-top'>
                  {
                    this.props.productCount > 6 &&
                    <div className='feed-product__items--overlay'>
                      <span>+{ (this.props.productCount - 6) }</span>
                    </div>
                  }
                  <img src={getImage('product-20.jpg')} className='feed-product__image'/>
                  <div className='feed-product__details'>
                    <div className='fs-12 fw-600 lh-17 feed-product__items--name'>
                      <div className="detail__name js-ellipsis" data-js-ellipsis-limit="15">
                      Bantex Adhesive Filling Strips (10pcs/pack) #8875 00
                      </div>
                    </div>
                    <div className='feed-product__items--price'>
                      <label className='fs-12 fw-600 orange-red'>Rp 23.650</label>
                    </div>
                  </div>
                </div>
              </div>
            </div> :
            <div></div>
          }			
          
        </div>
      </div>
    );
  }
})

export default FeedProduct;
