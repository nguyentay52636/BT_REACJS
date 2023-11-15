import React from 'react';
import Item from './Item';

export default function ListItem({ product, onSelect }) {
  return (
    <div>
      <div className="row">
        {product.map((item) => {
          return (
            <div key={item.id} className="col-4">
              <Item product={item} onSelect={onSelect} />
            </div>
          );
        })}
      </div>
      <br />
      <br />
      <hr />
    </div>
  );
}
