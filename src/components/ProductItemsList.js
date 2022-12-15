import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import '../style/scss/ProductItemsList.scss';
// import i from '../static/images/1/1';
import { isIdAvailable } from '../utils/isIdAvailable';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownToggle from './DropdownToggle';

export const getFolderName = (num) => {
  const x = (num) % 5;
  if (x == 0) {
    return 5;
  }
  return x;
}
const ProductItemsList = (props) => {
  const { productList,
    handleProductDetailShow,
    setSelectedProductItemId,
    addToWishList,
    removeFromWishList,
    wishListItems,
    cartListItems,
    addToCartHandleClick,
    removeFromCartList } = props;
  const clickOnItem = (event, id) => {
    event.preventDefault();
    handleProductDetailShow();
    setSelectedProductItemId(id);
  }
  const showAddToCartAndWishList = (id) => {
    const element = document.querySelector(`.cart-wish-${id}`);
    element.style.display = 'block';
  }
  const hideAddToCartAndWishList = (id) => {
    const element = document.querySelector(`.cart-wish-${id}`);
    element.style.display = 'none';
  }
  const parentClick = event => {
    console.log('parent')
  }
  const childClick = (event) => {
    event.stopPropagation();
    console.log('child');
  }



  const List = () => {
    const items = productList.length > 0 ? productList.map((item) => {
      return (
        <div key={item.id} className="product-list-card mt-4" onClick={(event) => clickOnItem(event, item.id)}>
          <div style={{ display: "flex" }}>
            <div>
              <DropdownToggle
                item={item}
                cartListItems={cartListItems}
                wishListItems={wishListItems}
                removeFromCartList={removeFromCartList}
                addToCartHandleClick={addToCartHandleClick}
                removeFromWishList={removeFromWishList}
                addToWishList={addToWishList}
              />
            </div>
            <div style={{ width: '100%' }}>
              <Link 
                onClick={childClick}
              // onClick={() => clickOnItem(item.id)}
              >{item.name}</Link><br />
              {item.description}<br />
              &#8377;{item.price}
            </div>
          </div>
        </div>
      );
    }) : <h1 className="mt-5 ms-5">Nothing is here!</h1>
    return items;
  }
  return (
    <div>
      <List />
    </div>
  )
}
export default ProductItemsList;