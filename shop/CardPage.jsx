import React, { useEffect, useState } from "react";
import Page from "../components/Page";
import { Link } from "react-router-dom";
import delImgUrl from "../assets/images/shop/del.png";
import CheckOutPage from "./CheckOutPage";

const CardPage = () => {
  const [cardItem, setCardItem] = useState([]);
  useEffect(() => {
    //fetch card data from local state
    const storedCardItem = JSON.parse(localStorage.getItem("cart")) || [];
    setCardItem(storedCardItem);
  }, []);

  // calculate total price
  const calculateTotalPrice = (item) => {
    return item.price * item.quantity;
  };
  // handle increase quantity
  const handleIncrease = (item) => {
    item.quantity += 1;
    setCardItem([...cardItem]);
    // update local storage with new item
    localStorage.setItem("card", JSON.stringify(cardItem));
  };
  //  handle descrease quantity

  const handleDescrease = (item) => {
    if (item.quantity > 1) {
      item.quantity -= 1;
      setCardItem([...cardItem]);
      // update local storage with new item
      localStorage.setItem("card", JSON.stringify(cardItem));
    }
  };
  // handle item remove
  const handleRemoveItem = (item) => {
    const updatedCard = cardItem.filter((cardItem) => cardItem.id !== item.id);

    // update new items
    setCardItem(updatedCard);
    updateLocalStorage(updatedCard);
  };
  const updateLocalStorage = (card) => {
    localStorage.setItem("card", JSON.stringify(card));
  };
  // card sub total
  const cardSubTotal = cardItem.reduce((total, item) => {
    return total + calculateTotalPrice(item);
  }, 0);
  // order total
  const orderTotal = cardSubTotal;
  return (
    <div>
      <Page title={"shop cart"} curPage={" cart Page"}></Page>
      <div className="shop-cart padding-tb">
        <div className="container">
          <div className="section-wrapper">
            {/** cart top */}
            <div className="cart-top">
              <table>
                <thead>
                  <tr>
                    <th className="cat-product">Product</th>
                    <th className="cat-price">Price</th>
                    <th className="cat-quantity">Quantity</th>
                    <th className="cat-toprice">Total</th>
                    <th className="cat-edit">Edit</th>
                  </tr>
                </thead>
                {/** table body */}
                <tbody>
                  {cardItem.map((item, index) => (
                    <tr key={index}>
                      <td className="product-item cat-product">
                        <div className="p-thumb">
                          <Link to="/shop">
                            <img src={item.img} alt="" />
                          </Link>
                        </div>
                        <div className="p-content">
                          <Link to="/shop">{item.name}</Link>
                        </div>
                      </td>
                      <td className="cat-price">${item.price}</td>
                      <td className="cat-quantity">
                        <div className="cart-plus-minus">
                          <div
                            className="dec qtybutton"
                            onClick={() => handleDescrease(item)}
                          >
                            -
                          </div>
                          <input
                            type="text"
                            className="cart-plus-minus-box"
                            name="qty-button"
                            value={item.quantity}
                          />
                          <div
                            className="inc qtybutton"
                            onClick={() => handleIncrease(item)}
                          >
                            +
                          </div>
                        </div>
                      </td>
                      <td className="cat-toprice">
                        ${calculateTotalPrice(item)}
                      </td>
                      <td className="cat-edit">
                        <a href="#" onClick={() => handleRemoveItem(item)}>
                          <img src={delImgUrl} alt="" />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/** card tops ends */}
            {/** card bottom */}
            <div className="cart-bottom">
              {/** check out box */}
              <div className="cart-checkout-box">
                <form className="coupon">
                  <input
                    className="cart-page-input-text"
                    type="text"
                    name="coupon"
                    id="coupon"
                    placeholder="coupon code......"
                  />
                  <input type="submit" vaLue="Apply Coupon" />
                </form>
                <form className="cart-checkout">
                  <input type="submit" value="Update Cart" />
                  <div><CheckOutPage/></div>
                </form>
              </div>

              {/*** check out box end */}
              {/** shipping box */}
              <div className="shiping-box">
                <div className="row g-3">
                  <div className="col-md-6 col-12">
                    {/** left side of shipig */}
                    <div className="calculate-shiping">
                      <h3>Calculate Shipping</h3>
                      <div className="outline-select">
                        <select>
                          <option value="UK"> United Kingdom(Uk)</option>
                          <option value="Ind"> India</option>
                          <option value="PK"> Pakistan</option>
                          <option value="Bd"> Bangladesh</option>
                          <option value="np"> Nepal</option>
                          <option value="Oth"> Others</option>
                        </select>
                        <span className="select-icon">
                          <i className="icofont-rounded-down"></i>
                        </span>
                      </div>
                      <div className="outline-select shipping-select">
                        <select>
                          <option value="BZ"> Bazpur</option>
                          <option value="NT"> Nanital</option>
                          <option value="HD"> Haldwani</option>
                          <option value="KA"> Kashipur</option>
                          <option value="KT"> Khatima</option>
                          <option value="Oth"> Others</option>
                        </select>
                        <span className="select-icon">
                          <i className="icofont-rounded-down"></i>
                        </span>
                      </div>
                      <input
                        type="text"
                        id="postalCode"
                        name="postalCode "
                        className="cart-page-input-text"
                        placeholder="PostCode / ZIP"
                      />
                      <button type="submit">Update Adress</button>
                    </div>
                  </div>
                  {/** right side of shipping */}
                  <div className="col-md-6 col-12">
                    <div className="cart-overview">
                      <h3>cart Totals</h3>
                      <ul className="lab-ul">
                           <li>
                            <span className="pull-left">Cart SubTotal</span>
                            <p className="pull-right">${cardSubTotal}</p>
                            
                           </li>
                           <li>
                            <span className="pull-left">shipping and Handling</span>
                            <p className="pull-right">Free Shipping</p>
                            
                           </li>
                           <li>
                            <span className="pull-left">Order total</span>
                            <p className="pull-right">${orderTotal.toFixed(2)}</p>
                            
                           </li>
                      </ul>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPage;
