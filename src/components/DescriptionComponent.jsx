import React from "react";

const DescriptionComponent = ({
  selectedPrice,
  selectedSize,
  handleColorAndImageChange,
  handleSizeChange,
  handleQuantityChange,
  quantity,
  addToCart,
}) => {
  return (
    <div className="col-12 col-md-6">
      <h2 className="bold-and-bigger-text">Classy Modern Smart Watch</h2>
      <div className="rating d-flex justify-content-start gap-2">
        <div className="stars d-flex justify-content-start align-items-center general-font">
          <img className="" src="/images/star-fill.png" alt="" />
          <img className="" src="/images/star-fill.png" alt="" />
          <img className="" src="/images/star-fill.png" alt="" />
          <img className="" src="/images/star-half.png" alt="" />
          <img className="" src="/images/star.png" alt="" />
        </div>
        (2 Reviews)
      </div>
      <p className="price d-flex justify-content-start align-items-center gap-2 general-font">
        <span className="text-decoration-line-through text-muted">$99.00</span>
        <span className="discount" style={{ color: "#6576ff" }}>
          {selectedPrice}
        </span>
      </p>
      <p className="general-font">
        I must explain to you how all this mistaken idea of denouncing praising
        pain was born and I will give you a complete account of the system, and
        expound the actual teaching.
      </p>
      <div className="d-flex justify-content-start gap-4 align-items-center my-4">
        <div className="d-flex flex-column justify-content-between">
          <span className="general-smaller-font">Type</span>
          <span className="general-bold-font">Watch</span>
        </div>
        <div className="d-flex flex-column justify-content-between">
          <span className="general-smaller-font">Model Number</span>
          <span className="general-bold-font">Forerunner 290XT</span>
        </div>
      </div>
      <div className="d-flex flex-column justify-content-start my-4">
        <p className="mb-2 general-bold-font">Band Color:</p>
        <div className="color-options d-flex justify-content-start align-items-center gap-2">
          <input
            className="radio-button"
            type="radio"
            id="color1"
            name="color"
            defaultChecked
            onClick={() =>
              handleColorAndImageChange("/images/img-1.png", "Purple")
            }
          />

          <input
            className="radio-button"
            type="radio"
            id="color2"
            name="color"
            onClick={() =>
              handleColorAndImageChange("/images/img-4.png", "Cyan")
            }
          />

          <input
            className="radio-button"
            type="radio"
            id="color3"
            name="color"
            onClick={() =>
              handleColorAndImageChange("/images/img-3.png", "Sky Blue")
            }
          />

          <input
            className="radio-button"
            type="radio"
            id="color4"
            name="color"
            onClick={() =>
              handleColorAndImageChange("/images/img-2.png", "Black")
            }
          />
        </div>
      </div>

      <div className="d-flex flex-column justify-content-start my-4">
        <p className="general-bold-font">Wrist Size:</p>
        <div className="size-options  d-flex justify-content-start align-items-center gap-2">
          <button
            className={`size-btn ${
              selectedSize === "S" ? " selected" : ""
            } rounded-2 bg-transparent border-1 size py-1`}
            onClick={() => handleSizeChange("S", "$69.00")}
          >
            S <span className="text-muted fw-light">$69</span>
          </button>
          <button
            className={`size-btn ${
              selectedSize === "M" ? " selected" : ""
            } rounded-2 bg-transparent border-1 size py-1`}
            onClick={() => handleSizeChange("M", "$79.00")}
          >
            M <span className="text-muted fw-light">$79</span>
          </button>
          <button
            className={`size-btn ${
              selectedSize === "L" ? " selected" : ""
            } rounded-2 bg-transparent border-1 size py-1`}
            onClick={() => handleSizeChange("L", "$89.00")}
          >
            L <span className="text-muted fw-light">$89</span>
          </button>
          <button
            className={`size-btn ${
              selectedSize === "XL" ? " selected" : ""
            } rounded-2 bg-transparent border-1 size py-1`}
            onClick={() => handleSizeChange("XL", "$99.00")}
          >
            XL <span className="text-muted fw-light">$99</span>
          </button>
        </div>
      </div>
      <div className="d-flex justify-content-start align-items-center gap-2">
        <div className="quantity d-flex">
          <button
            className="qty-btn rounded-start border-1 border-end-0 px-3 bg-transparent"
            id="decrease"
            onClick={() => handleQuantityChange(-1)}
          >
            -
          </button>
          <input
            className="input border-1 text-center"
            type="number"
            id="quantity"
            defaultValue="1"
            value={quantity}
            readOnly
          />
          <button
            className="qty-btn rounded-end border-1 border-start-0 px-3 bg-transparent"
            id="increase"
            onClick={() => handleQuantityChange(1)}
          >
            +
          </button>
        </div>
        <button
          onClick={addToCart}
          className="btn quantity btn-purple py-0"
          id="add-to-cart"
        >
          Add to Cart
        </button>
        <button className="bg-transparent p-1 border-0" id="add-to-cart">
          <img
            style={{ height: "16px", width: "19px" }}
            src="/images/heart.png"
            alt=""
          />
        </button>
      </div>
    </div>
  );
};

export default DescriptionComponent;
