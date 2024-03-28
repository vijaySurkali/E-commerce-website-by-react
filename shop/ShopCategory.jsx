import React from "react";
import Data from "../products.json";

const ShopCategory = ({
  filterItems,
  setItem,
  menuItems,
  setProudcts,
  selectedCategory,
}) => {
  return (
    <>
      <div className="widget-header">
        <h5 className="m-5">All categories</h5>
      </div>
      <div>
        <button
          onClick={() => setProudcts(Data)}
          className={`m-2 ${selectedCategory === "All" ? "bg-warning" : ""}`}
        >
          All
        </button>
        {menuItems.map((vaL, id) => {
          return (
            <button
              className={`m-2 ${selectedCategory === vaL ? "bg-warning" : ""}`}
              key={id}
              onClick={() => filterItems(vaL)}
            >
              {vaL}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default ShopCategory;
