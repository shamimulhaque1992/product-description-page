import React from "react";

const ModalComponent = ({ cartItems, closeModal }) => {
  // Calculate total price
  const totalPrice = cartItems.reduce((sum, item) => {
    // Remove the "$" symbol and parse the price as a number
    const price = parseFloat(item.price.replace("$", ""));
    return sum + price * item.quantity;
  }, 0);
  return (
    <div
      class="modal fade"
      id="cart-modal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="cart-modal-label"
      aria-hidden="true"
    >
      <div
        class="modal-dialog modal-dialog-centered modal-lg rounded-3"
        role="document"
      >
        <div class="modal-content">
          <div class="modal-body">
            <ul id="cart-list">
              <h2 class="border-0 bold-and-bigger-text">Your Cart</h2>
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th class="border-top-0 text-muted" scope="col">
                        Item
                      </th>
                      <th class="border-top-0 text-muted" scope="col">
                        Color
                      </th>
                      <th class="border-top-0 text-muted" scope="col">
                        Size
                      </th>
                      <th class="border-top-0 text-muted" scope="col">
                        Qnt
                      </th>
                      <th class="border-top-0 text-muted" scope="col">
                        Price
                      </th>
                    </tr>
                  </thead>
                  <tbody id="cart-table-body">
                    {cartItems.map((item, index) => (
                      <tr key={index} className="">
                        <td>
                          <div className="d-flex justify-content-start align-items-center gap-4">
                            <img
                              src={item.image}
                              alt="Product"
                              style={{
                                width: "36px",
                                height: "100%",
                                objectFit: "cover",
                                borderRadius: "5px",
                              }}
                            />
                            <p className="mb-0">Classy Modern Smart Watch</p>
                          </div>
                        </td>
                        <td className="align-middle">
                          <div className="d-flex align-items-center mb-0 pb-0">
                            {item.color}
                          </div>
                        </td>
                        <td className="align-middle">
                          <div className="d-flex align-items-center mb-0 pb-0 h-100 ">
                            {item.size}
                          </div>
                        </td>
                        <td className="align-middle">
                          <div className="d-flex align-items-center mb-0 pb-0 h-100 ">
                            {item.quantity}
                          </div>
                        </td>
                        <td className="align-middle">
                          <div className="d-flex align-items-center mb-0 pb-0 h-100 ">
                            {item.price}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr className="">
                      <td class="cart-bottom-text" colspan="3">
                        Total
                      </td>
                      <td class="cart-bottom-text" id="total-quantity">
                        {cartItems.reduce(
                          (sum, item) => sum + item.quantity,
                          0
                        )}
                      </td>
                      <td class="cart-bottom-text" id="total-price">
                        ${totalPrice.toFixed(2)}
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>

              <div class="d-flex justify-content-end">
                <button id="continue-shopping" class="btn-transparent">
                  Continue Shopping
                </button>
                <button id="checkout" class="btn-purple">
                  Checkout
                </button>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalComponent;
