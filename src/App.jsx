import React, { useState } from "react";
import ImageComponent from "./components/ImageComponent";
import DescriptionComponent from "./components/DescriptionComponent";
import CheckoutButtonComponent from "./components/CheckoutButtonComponent";
import ModalComponent from "./components/ModalComponent";

function App() {
  const [selectedImage, setSelectedImage] = useState("/images/img-1.png");
  const [selectedSize, setSelectedSize] = useState("S");
  const [selectedPrice, setSelectedPrice] = useState("$69.00");
  const [quantity, setQuantity] = useState(1);
  const [cartItems, setCartItems] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedColor, setSelectedColor] = useState("Purple");

  const handleColorAndImageChange = (imageUrl, Color) => {
    setSelectedImage(imageUrl);
    setSelectedColor(Color);
  };

  const handleSizeChange = (size, price) => {
    setSelectedSize(size);
    setSelectedPrice(price);
  };

  const handleQuantityChange = (change) => {
    setQuantity((prev) => Math.max(1, prev + change));
  };

  const addToCart = () => {
    const newItem = {
      color: selectedColor,
      image: selectedImage,
      size: selectedSize,
      quantity,
      price: selectedPrice,
    };
    setCartItems((prev) => [...prev, newItem]);
    setQuantity(1);
  };
  return (
    <div className="main">
      <div className="container h-100 d-flex align-items-center justify-content-center">
        <div className="row align-items-center">
          <ImageComponent selectedImage={selectedImage} />
          <DescriptionComponent
            selectedPrice={selectedPrice}
            selectedSize={selectedSize}
            handleColorAndImageChange={handleColorAndImageChange}
            handleSizeChange={handleSizeChange}
            handleQuantityChange={handleQuantityChange}
            quantity={quantity}
            addToCart={addToCart}
          />
          <CheckoutButtonComponent
            cartCount={cartItems.length}
            openModal={() => setShowModal(true)}
          />
        </div>
      </div>
      {showModal && (
        <ModalComponent
          cartItems={cartItems}
          closeModal={() => setShowModal(false)}
        />
      )}
    </div>
  );
}

export default App;
