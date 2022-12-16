import React, { useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import { getFolderName } from './ProductItemsList';
import { isIdAvailable } from '../utils/isIdAvailable';
import '../style/scss/DropdownToggle.scss';
import { useDispatch } from 'react-redux';
import {
  addToCart,
  removeFromCart,
  addToWishList,
  removeFromWishList
} from '../redux/Product/actions';
import { addCartListAnimation } from '../methods/addCartListAnimation';
import { useSelector } from 'react-redux';
import { PRODUCT_REDUCER, CART_LIST, WISH_LIST } from '../redux/Product/const';
import { addWishListAnimation } from '../methods/addWishListAnimation';
import { removeFromWishlistAnimation } from '../methods/removeFromWishlistAnimation';

const DropdownToggle = ({ item }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const productState = useSelector(state => state);
  const cartList = productState[PRODUCT_REDUCER][CART_LIST];
  const wishList = productState[PRODUCT_REDUCER][WISH_LIST];
  const dispatch = useDispatch();
  const addToCartClick = (item, event) => {
    dispatch(addToCart(item));
    event.stopPropagation();
    addCartListAnimation(event.clientX, event.clientY);
  }
  const removeFromCartClick = (item, event) => {
    dispatch(removeFromCart(item));
    event.stopPropagation();
  }
  const addToWishListClick = (item, event) => {
    dispatch(addToWishList(item));
    event.stopPropagation();
    addWishListAnimation(event.clientX, event.clientY);
  }
  const removeFromWishListClick = (item, event) => {
    dispatch(removeFromWishList(item));
    event.stopPropagation();
    removeFromWishlistAnimation();
  }
  return (
    <Dropdown className="p-0" onMouseLeave={() => setShowDropdown(false)}
      onMouseOver={() => setShowDropdown(true)}>
      <div className="p-0">
        <img className="product-list-img" src={require(`../static/images/${getFolderName(item.id)}/${item.main_image}`)}
          height="150px" width="150px" />
      </div>
      <Dropdown.Menu className="dropdown dropdown-menu-d"
        // show={true}
        show={showDropdown}
      >
        <div className="dropdown-menu-up-arrow"></div>
        <div className="dropdown-menu-up-arrow-after"></div>
        <ul className="drop-down-list p-0 pt-3">
          {
            isIdAvailable(cartList, item.id) === true ?
              <li onClick={(event) => removeFromCartClick(item, event)}>Remove from Cart</li> :
              <li onClick={(event) => addToCartClick(item, event)}>Add to Cart</li>}
          {
            isIdAvailable(wishList, item.id) === true ?
              <li onClick={(event) => removeFromWishListClick(item, event)}>Remove from Wish List</li>
              : <li
                onClick={(event) => addToWishListClick(item, event)}
              >Wish List</li>
          }
        </ul>
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default DropdownToggle
