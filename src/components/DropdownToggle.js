import React, { useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import { getFolderName } from './ProductItemsList';
import { isIdAvailable } from '../utils/isIdAvailable';
import '../style/scss/DropdownToggle.scss';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../redux/Product/actions';
import { addCartListAnimation } from '../methods/addCartListAnimation';

const DropdownToggle = ({ item, cartListItems, wishListItems, removeFromCartList, addToCartHandleClick, removeFromWishList, addToWishList }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dispatch = useDispatch();
  const addToCartClick = (item, event) => {
    dispatch(addToCart(item));
    event.stopPropagation();
    addCartListAnimation(event.clientX, event.clientY);
    addToCartHandleClick(item, event)
  }
  const removeFromCartClick = (item, event) => {
    dispatch(removeFromCart(item));
    event.stopPropagation();
    removeFromCartList(item, event);
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
            isIdAvailable(cartListItems, item.id) === true ?
              <li onClick={(event) => removeFromCartClick(item, event)}>Remove from Cart</li> :
              <li onClick={(event) => addToCartClick(item, event)}>Add to Cart</li>}
          {
            isIdAvailable(wishListItems, item.id) === true ?
              <li onClick={(event) => removeFromWishList(item, event)}>Remove from Wish List</li>
              : <li
                onClick={(event) => addToWishList(item, event)}
              >Wish List</li>
          }
        </ul>
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default DropdownToggle
