import React, { Component } from 'react';
import ITEMS from '../../../Data/Item.data';
import './Homepage.styles.scss';
import Menuitem from '../../Menuitem/Menuitem.component';

export default class Homepage extends Component {
  state = {
    items: ITEMS,
  };

  render() {
    return (
      <div className='homepage'>
        {this.state.items.map(({ id, ...otherProps }) => {
          return <Menuitem id={id} key={id} {...otherProps} />;
        })}
      </div>
    );
  }
}
