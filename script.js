// Initialize variables
let cart = [];
let cartCount = 0;
let productImage = document.getElementById("product-image");
let colorOptions = document.querySelectorAll(
  '.color-options input[type="radio"]'
);
let sizeOptions = document.querySelectorAll(".size-options button");
let quantityInput = document.getElementById("quantity");
let decreaseButton = document.getElementById("decrease");
let increaseButton = document.getElementById("increase");
let addToCartButton = document.getElementById("add-to-cart");
let wishlistButton = document.getElementById("wishlist");
let checkoutButton = document.getElementById("checkout");
let cartCountSpan = document.getElementById("cart-count");
let cartList = document.getElementById("cart-list");

// Function to update product image based on color selection
function updateProductImage() {
  colorOptions.forEach((option, index) => {
    option.addEventListener("change", () => {
      let imageSource = `images/img-${index + 1}.png`;
      productImage.src = imageSource;
    });
  });
}

// Function to initialize default size selection
function initializeDefaultSize() {
  const sizeButtons = document.querySelectorAll(".size-options .size-btn");
  const defaultButton = Array.from(sizeButtons).find(
    (btn) => btn.getAttribute("data-price") === "$69"
  );

  if (defaultButton) {
    defaultButton.classList.add("selected");
    defaultButton.style.borderColor = "#6576ff"; // Blue border for selected button
  }
}

// Function to update selected size styling
function updateSizeSelection() {
  const sizeButtons = document.querySelectorAll(".size-options .size-btn");

  sizeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      sizeButtons.forEach((btn) => {
        btn.classList.remove("selected");
        btn.style.borderColor = "gray"; // Reset border to gray for unselected buttons
      });

      button.classList.add("selected");
      button.style.borderColor = "#6576ff"; // Blue border for selected button
    });
  });
}

// Function to update size and price based on size selection
function updateSizeAndPrice() {
  sizeOptions.forEach((option) => {
    option.addEventListener("click", () => {
      sizeOptions.forEach((otherOption) => {
        otherOption.classList.remove("active");
      });
      option.classList.add("active");
      let price = option.getAttribute("data-price");
      document.querySelector(
        ".price"
      ).innerHTML = `$99.00 <span class="discount">${price + ".00"}</span>`;
    });
  });
}

// Function to update quantity
function updateQuantity() {
  decreaseButton.addEventListener("click", () => {
    let quantity = parseInt(quantityInput.value);
    if (quantity > 1) {
      quantityInput.value = quantity - 1;
    }
  });

  increaseButton.addEventListener("click", () => {
    let quantity = parseInt(quantityInput.value);
    quantityInput.value = quantity + 1;
  });
}

// Function to add product to cart
function addToCart() {
  addToCartButton.addEventListener("click", () => {
    // Get the selected color and size options
    let selectedColor = document.querySelector(
      ".color-options input[type='radio']:checked"
    );
    let selectedSizeButton = document.querySelector(
      ".size-options .size-btn.selected"
    );

    // Validate selections
    if (!selectedColor) {
      alert("Please select a color before adding to cart!");
      return;
    }
    if (!selectedSizeButton) {
      alert("Please select a size before adding to cart!");
      return;
    }

    // Extract data from selected elements
    let imageSource = `images/img-${selectedColor.value}.png`;
    let selectedSize = selectedSizeButton.getAttribute("data-size");
    let selectedPrice = selectedSizeButton.getAttribute("data-price");

    // Create the product object
    let product = {
      image: imageSource,
      name: "Classy Modern Smart Watch",
      color: selectedColor.labels[0].textContent,
      size: selectedSize,
      price: selectedPrice,
      quantity: parseInt(quantityInput.value),
    };

    // Add the product to the cart
    cart.push(product);
    cartCount++;
    updateCartCount();
    updateCartList();
  });
}

// Function to update cart count
function updateCartCount() {
  cartCountSpan.innerHTML = cartCount;
}

// Function to update cart list
function updateCartList() {
  cartList.innerHTML = `
      <h2 class="border-0 bold-and-bigger-text">Your Cart</h2>
      <div className="table-responsive">
      <table class="table">
        <thead>
          <tr class="text-muted">
            <th class="border-top-0" scope="col">Item</th>
            <th class="border-top-0" scope="col">Color</th>
            <th class="border-top-0" scope="col">Size</th>
            <th class="border-top-0" scope="col">Qnt</th>
            <th class="border-top-0" scope="col">Price</th>
          </tr>
        </thead>
        <tbody id="cart-table-body">
        </tbody>
        <tfoot>
          <tr>
            <td class="cart-bottom-text" colspan="3">Total</td>
            <td class="cart-bottom-text" id="total-quantity">0</td>
            <td class="cart-bottom-text" id="total-price">$0.00</td>
          </tr>
        </tfoot>
      </table></div>
      
      <div class="d-flex justify-content-end">
      <button id="continue-shopping" class="btn-transparent">Continue Shopping</button>
      <button id="checkout" class="btn-purple">Checkout</button>
      </div>
      
    `;

  let cartTableBody = document.getElementById("cart-table-body");
  cartTableBody.innerHTML = "";

  cart.forEach((product, index) => {
    let cartItem = document.createElement("tr");
    cartItem.innerHTML = `
        <td>
          <img src="${product.image}" alt="Product Image" width="50" height="50">
          ${product.name}
        </td>
        <td>${product.color}</td>
        <td>${product.size}</td>
        <td>${product.quantity}</td>
        <td>${product.price}</td>
      `;
    cartTableBody.appendChild(cartItem);
  });

  let totalQuantity = 0;
  let totalPrice = 0;
  cart.forEach((product) => {
    totalQuantity += product.quantity;
    totalPrice += parseFloat(product.price.replace("$", "")) * product.quantity;
  });

  document.getElementById("total-quantity").innerHTML = totalQuantity;
  document.getElementById("total-price").innerHTML = `$${totalPrice.toFixed(
    2
  )}`;
}

// Function to remove product from cart
function removeFromCart(index) {
  cart.splice(index, 1);
  cartCount--;
  updateCartCount();
  updateCartList();
}

// Call the functions to initialize and update selection
initializeDefaultSize();
updateSizeSelection();

// Initialize event listeners
updateProductImage();
updateSizeAndPrice();
updateQuantity();
addToCart();

// Initialize cart count and list
updateCartCount();
updateCartList();
