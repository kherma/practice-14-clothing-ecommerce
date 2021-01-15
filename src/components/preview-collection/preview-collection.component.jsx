import React from 'react';
import './preview-collection.styles.scss';

import ItemCollection from './../../components/item-collection/item-collection.component';

const PreviewCollection = ({ title, items }) => {
  console.log(items);
  return (
    <div className="preview-collection">
      <h1 className="preview-title">{title.toUpperCase()}</h1>
      <div className="preview-item">
        {items
          .filter((item, index) => index < 4)
          .map(({ id, ...stateProps }) => (
            <ItemCollection key={id} {...stateProps} />
          ))}
      </div>
    </div>
  );
};

export default PreviewCollection;
