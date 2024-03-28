import React, { useState } from "react";
import productData from "../products.json"
import { Link } from "react-router-dom";
import SelectedCategery from "../components/SelectedCategry";

const tittle = (
  <h2>
    Search Your One From <span>Thousand</span> of Products
  </h2>
);
const desc = "we have the largest collection of product";

const bannerList = [
  {
    iconName: "icofont-users-alt-4",
    text: "1.5 Million Customers",
  },
  {
    iconName: "icofont-notification",
    text: "More then 2000 Marchent",
  },
  {
    iconName: "icofont-globe",
    text: "Buy Anything Online",
  },
];
const Banner = () => {
  const [searchInput, setSearchInput] = useState("");
  const [fillterProduct, setFillterProduct] = useState(productData);
  //console.log(productData);


  //search functionality
  const handleSearch = e =>{
    const searchTerm = e.target.value;
    setSearchInput(searchTerm);
// filltering product based on search
const fillter = productData.filter((product)=>product.name.toLowerCase().includes(searchTerm.toLowerCase()));
setFillterProduct(fillter);
  }

  return (
    <div className="banner-section style-4">
      <div className="container">
        <div className="banner-content">
          {tittle}
          <form>
         <SelectedCategery select = {"all"}/>
            <input
              type="text"
              name="search"
              id="search"
              placeholder="search your product"
              value={searchInput}
              onChange={handleSearch}
            />
            <button type="submit">
            <i className="icofont-ui-search"></i>

            </button>


          </form>
          <p>{desc}</p>
          <ul className="lab-ul">
           {
            searchInput && fillterProduct.map((product,i)=><li key={i}>
                  <Link to={`/shop/ ${product.id}`}>{product.name}</Link>
            </li>)
           }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Banner;
