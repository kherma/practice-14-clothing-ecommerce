import React from 'react';
import './item-collection.styles.scss';

const ItemCollection = ({ imageUrl, name, price }) => (
  <div className="item-collection">
    <div className="item-img" style={{ backgroundImage: `url(${imageUrl})` }} />
    <div className="item-footer">
      <span className="item-name">{name}</span>
      <span className="item-price">{price}</span>
    </div>
  </div>
);

export default ItemCollection;
