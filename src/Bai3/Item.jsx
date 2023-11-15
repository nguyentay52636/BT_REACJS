import React from 'react';

export default function Item({ product, onSelect }) {
  return (
    <div>
      <div className="card text-left">
        <img className="card-img-top" src={product.image} alt={product.name} />
        <div className="card-body">
          <h4 className="card-title">{product.name}</h4>
          <p className="card-text">{product.shortDescription}</p>
          <button className="btn btn-dark" onClick={() => onSelect(product)}>
            View product
          </button>
        </div>
      </div>
    </div>
  );
}
