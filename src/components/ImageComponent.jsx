import React from "react";

const ImageComponent = ({ selectedImage }) => {
  return (
    <div className="col-12 col-md-6">
      <img
        id="product-image"
        src={selectedImage}
        alt="Product"
        className="img-fluid product-image"
      />
    </div>
  );
};

export default ImageComponent;
