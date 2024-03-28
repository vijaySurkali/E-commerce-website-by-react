import React, { useState } from "react";
import { Link } from "react-router-dom";
const desc =
  "Energistia an Deliver Metrcs After Avsionary Apropria Transition Enterpris an source Applications emerging psd template";

const ProductDisplay = ({ item }) => {
  const { name, id, price, seller, ratingsCount, quantity, img } = item;
  const [preQuentity, setQuentity] = useState(quantity);
  const [coupon, setCoupon] = useState("");
  const [size, setSize] = useState("select-size");
  const [color, setColor] = useState("select-color");
  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };
  const handleDes = () => {
    if (preQuentity > 1) {
      setQuentity(preQuentity - 1);
    }
  };
  const handleInc = () => {
    setQuentity(preQuentity + 1);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const product = {
      id: id,
      img: img,
      name: name,
      price: price,
      quantity: preQuentity,
      size: size,
      color: color,
      coupon: coupon,
    };

    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingProductIndex = existingCart.findIndex(
      (item) => item.id === id
    );

    if (existingProductIndex !== -1) {
      existingCart[existingProductIndex].quantity += preQuentity;
    } else {
      existingCart.push(product);
    }
    // update local storage
    localStorage.setItem("cart", JSON.stringify(existingCart));

    // reset  form quantity
    setQuentity(1);
    setSize("select size");
    setColor("select color");
    setColor("");
  };

  return (
    <div>
      <div>
        <h5>{name}</h5>
        <p className="rating">
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <span>{ratingsCount} Rating</span>
        </p>
        <h4>${price}</h4>
        <h5>{seller}</h5>
        <p>{desc}</p>
      </div>
      {/** card component */}
      <div>
        <form onSubmit={handleSubmit}>
          {/** size */}
          <div className="select-product size">
            <select value={size} onChange={handleSizeChange}>
              <option>select size</option>
              <option>SM</option>
              <option>MD</option>
              <option>LG</option>
              <option>XL</option>
              <option>XXL</option>
            </select>
            <i className="icofont-rounded-down"></i>
          </div>
          {/** color */}
          <div className="select-product color">
            <select value={color} onChange={handleColorChange}>
              <option>select Color</option>
              <option>Red</option>
              <option>Black</option>
              <option>Blue</option>
              <option>Pink</option>
              <option>White</option>
            </select>
            <i className="icofont-rounded-down"></i>
          </div>
          {/** Add product + or - */}
          <div className="cart-plus-minus">
            <div className="dec qtybutton" onClick={handleDes}>
              -
            </div>
            <input
              className="cart-plus-minus-box"
              type="text"
              id="quantity-button"
              name="quantity-button"
              value={preQuentity}
              onChange={(e) => setQuentity(parseInt(e.target.value, 10))}
            />
            <div className="inc qtybutton" onClick={handleInc}>
              +
            </div>
          </div>
          {/** coupon feild */}
          <div className="discount-code mb-2">
            <input
              type="text"
              placeholder="Enter Discount Coupon"
              onChange={(e) => setCoupon(e.target.value)}
            />
          </div>
          {/** button section */}
          <button type="submit" className="lab-btn">
            <span>Add to Bag</span>
          </button>
          <Link to="/cart-page" className="lab-btn bg-primary">
            <span>Check Out</span>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default ProductDisplay;
