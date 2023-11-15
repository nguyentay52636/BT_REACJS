import React from 'react';

export default function DetailsItem({ product, isOpen, onClose }) {
  return (
    <div>
      {isOpen && (
        <div className="container">
          <div className="modal d-block" tabIndex="-1">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">infomation product</h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Đóng"
                    onClick={onClose}
                  ></button>
                </div>
                <div className="modal-body">
                  <div className="row">
                    <div className="col-6">
                      <img
                        src={product.image}
                        alt={product.image}
                        height={250}
                      />
                    </div>
                    <div className="col-6">
                      <h3 className="card-title">{product.name}</h3>
                      <br />
                      <h4 className="card-price">${product.price}</h4>
                      <br />
                      <p className="card-text">{product.description}</p>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                    onClick={onClose}
                  >
                    Đóng
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
