import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Badge from 'react-bootstrap/Badge';
import { useDispatch, useSelector } from 'react-redux';
import {
  PRODUCT_REDUCER,
  CART_LIST,
  WISH_LIST,
  ROW_PRODUCT_LIST
} from '../redux/Product/const';
import { getFilteredItems } from '../utils/getFilteredItems';
import { replaceToProductList } from '../redux/Product/actions';

function NavBar() {
  const [showWishListDropdown, setShowWishListDropdown] = useState(false);
  const [showCartListDropdown, setCartListDropdown] = useState(false);
  const dispatch = useDispatch();
  const productState = useSelector(state => state);
  const cartList = productState[PRODUCT_REDUCER][CART_LIST];
  const wishList = productState[PRODUCT_REDUCER][WISH_LIST];
  const rowProductList = productState[PRODUCT_REDUCER][ROW_PRODUCT_LIST];
  const handleSearch = (event) => {
    event.stopPropagation();
    event.preventDefault()
    const value = event.target.value;
    const f = getFilteredItems(rowProductList, value);
    dispatch(replaceToProductList(f));
  }
  return (
    <Navbar bg="light" className="navbar-top-main fixed-top" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2"
            style={{ maxHeight: '100px', width: '100%', justifyContent: 'center' }}
            navbarScroll
          >
            <div>
              <Form.Control
                type="text"
                placeholder="find name, price, desc."
                onChange={handleSearch}
                className="me-2"
                aria-label="Search"
              />
            </div>
          </Nav>
          <Dropdown className="p-0" onMouseLeave={() => setShowWishListDropdown(false)}
            onMouseOver={() => setShowWishListDropdown(true)} style={{ height: '30px', display: 'flex' }}>
            {wishList.length > 0 ? <Badge pill bg="danger" style={{ position: 'absolute', top: '20px', marginLeft: '-5px' }}>{wishList.length}</Badge> : false}<div id="removeBookmarkContainer" />
            <FontAwesomeIcon className="m-2" id="wishlistBookmarkIcon" icon={faBookmark} />
            <Dropdown.Menu className="dropdown dropdown-menu-d"
              show={showWishListDropdown}>
              WishList
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className="p-0" onMouseLeave={() => setCartListDropdown(false)}
            onMouseOver={() => setCartListDropdown(true)} style={{ height: '30px', display: 'flex' }}>
            <FontAwesomeIcon className="m-2" id="cartFortAwesomeIcon" icon={faShoppingCart} />
            {cartList.length > 0 ? <Badge pill bg="danger" style={{ position: 'absolute', top: '20px', marginLeft: '-5px' }}>{cartList.length}</Badge> : false}
            <Dropdown.Menu className="dropdown dropdown-menu-d"
              show={showCartListDropdown}>
              CartList
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
