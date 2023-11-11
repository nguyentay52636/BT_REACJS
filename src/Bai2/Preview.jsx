import React from 'react';

export default function Preview({ glassPreview }) {
  return (
    <div className="my-5 preview text-center">
      <div className="preview-img">
        <div class="row">
          <div className="col-md-6">
          <img src="./glassesImage/model.jpg" alt="" height={400} />
          </div>
          <div className="col-md-6"><img src="./glassesImage/model.jpg" alt="" height={400} />
          </div>
        </div>
        
        {glassPreview && (
          <>
            <div className="preview-overlay ">
              <img src={glassPreview.url} alt={glassPreview.name} />
            </div>
            <div className="preview-text">
              <p>
                {glassPreview.name} 
                <br />
                {glassPreview.desc}
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

