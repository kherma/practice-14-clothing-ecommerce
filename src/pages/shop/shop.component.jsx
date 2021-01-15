import React, { Component } from 'react';
import { SHOP_DATA } from './shop.data';
import PreviewCollection from './../../components/preview-collection/preview-collection.component';
import './shop.styles.scss';

class ShopPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div>
        {collections.map(({ id, ...stateProps }) => (
          <PreviewCollection key={id} {...stateProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
