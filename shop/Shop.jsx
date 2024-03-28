import React, { useState } from 'react'
import Page from '../components/Page'


const showResult = "showing 01 - 12 of 139 Results"
import Data from '../products.json'
import ProductCard from './ProductCard'
import Pagination from './Pagination'
import Search from './Search'
import ShopCategory from './ShopCategory'
import PopularPost from './PopularPost'
import Tages from './Tages'

const Shop = () => {
  const [GridList, setGridList] = useState(true);
   const [Products , setProudcts]= useState(Data);
   //pagination

   const[currentPage , setCurrentPage] = useState(1);
   const productPerPage = 12;
   const indexOfLastPage = currentPage*productPerPage;  
   const indexOffirstPage =  indexOfLastPage -  productPerPage; 
   const currentProduct = Products.slice(indexOffirstPage,indexOfLastPage);
   // function to change th current page
   const paginate = (pageNumber)=>{
       setCurrentPage(pageNumber);
   }
   // fillter product based on the category
   const [selectedCategory, setSelectedCategory] = useState("All");
   const menuItems = [...new Set(Data.map((vaL) => vaL.category))];
   const filterItems = (curcat)=>{
     const newItem = Data.filter((newVal)=>{
      return newVal.category === curcat;
     })
     setSelectedCategory(curcat);
     setProudcts(newItem);
   }
  return (
    <div>
    <Page title = "Our Shop Page" curPage = "Shop"/>
     {/** shop main content */}
     <div className='shop-page padding-tb'>
         <div className="container">
          <div className="row justify-content-center">
            <div className='col-lg-8 col-12'>
              
              <article>
                {/**layout and title here */}
                <div className='shop-title d-flex flex-warp justify-content-between'>
                  <p>{showResult}</p>
                  <div className={`product-view-mode ${GridList ? "gridActive" : "listActive" }`}>
                   <a className='grid' onClick={()=>setGridList(!GridList)}>
                    <i className='icofont-ghost'></i>
                   </a>
                   <a className='list' onClick={()=>setGridList(!GridList)}>
                    <i className='icofont-listine-dots'></i>
                   </a>
                  </div>
                </div>
                {/**product card */}
                <div>
                  <ProductCard GridList = {GridList} Products = {currentProduct}/>
                </div>
                <Pagination
                productPerPage = {productPerPage}
                totalProduct = {Products.length}
                paginate = {paginate}
                activePage = {currentPage}
                />
              </article>
            </div>
            <div className='col-lg-4 col-12'>
              <aside>
                <Search Products = {Products} GridList = {GridList}/>
                <ShopCategory
                filterItems = {filterItems}
                setItem = {setProudcts}
                menuItems = {menuItems}
                setProudcts = {setProudcts}
                selectedCategory = {selectedCategory}
                
                />
                <PopularPost/>
                <Tages/>
              </aside>
            </div>
          </div>
         </div>
     </div>
    </div>
  )
}

export default Shop
