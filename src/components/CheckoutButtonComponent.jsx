import React from "react";

const CheckoutButtonComponent = ({ cartCount, openModal }) => {
  return (
    <div className="col-12 d-flex justify-content-center mt-5">
      <button
        className="d-flex justify-content-between align-items-center pill-button border-0"
        onClick={openModal}
        style={{ maxWidth: "139px", height: "42px" }}
        id="checkout"
        data-toggle="modal"
        data-target="#cart-modal"
      >
        <p className="mb-0 general-bold-font">Checkout</p>
        <div
          id="cart-count"
          className="cart-count d-flex justify-content-center align-items-center px-1 rounded-1 general-bold-font"
        >
          {cartCount}
        </div>
      </button>
    </div>
  );
};

export default CheckoutButtonComponent;
