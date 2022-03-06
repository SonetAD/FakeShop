import React, { Component } from 'react';
import SHOPDATA from '../../../Data/Shop.data';
import Collectionpreview from '../../Previewcollection/Collectionpreview.component';

import './Shoppage.style.scss';
export default class Shop extends Component {
  state = {
    collection: SHOPDATA,
  };
  render() {
    const { collection } = this.state;
    return (
      <div className='shop'>
        {collection.map(({ id, ...otherProps }) => {
          return <Collectionpreview key={id} {...otherProps} />;
        })}
      </div>
    );
  }
}
