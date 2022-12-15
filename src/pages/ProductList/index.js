import React, { useState, useEffect } from 'react'
import '../../style/scss/ProductList.scss';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ProductItemsList from '../../components/ProductItemsList';
import { getProductItems } from '../../utils/getProductItems';
import { getFilteredItems } from '../../utils/getFilteredItems';
import { ascending } from '../../utils/ascending';
import { descending } from '../../utils/descending';
import { priceLowerToMax } from '../../utils/priceLowerToMax';
import { priceMaxToLower } from '../../utils/priceMaxToLower';
import { removeItemFromListOfObjects } from '../../utils/removeItemFromListOfObjects';
import Product from '../Product';
import { addWishListAnimation } from '../../methods/addWishListAnimation';
import { addCartListAnimation } from '../../methods/addCartListAnimation';
import { removeFromWishlistAnimation } from '../../methods/removeFromWishlistAnimation';
import { Link } from 'react-router-dom';
import { backgroundGradiant } from '../../style/styled_components/backgroundGradiant';
import { buttonStyle } from '../../style/styled_components/buttonStyle';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Badge from 'react-bootstrap/Badge';


const ProductList = () => {
  const [isProductDetailShow, setIsProductDetailShow] = useState(false);
  const [selectedProductItemId, setSelectedProductItemId] = useState(null);

  const [wishListItems, setWishListItems] = useState([]);
  const [cartListItems, setCartListItems] = useState([]);

  const number_of_pages = 5;
  // const [showSidebar, setShowSidebar] = useState(false);
  const [rowProductState, setRowProductState] = useState([]);
  const [productsState, setProductsState] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  // let pageNumber = 1;

  // const handleCloseSidebar = () => setShowSidebar(false);
  // const handleShowSidebar = () => setShowSidebar(true);

  window.onscroll = function (ev) {
    const navbar = document.querySelector('.navbar-top-main');
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      const pageNum = pageNumber + 1;
      setPageNumber(pageNum);
      const up_comming_page_items = getProductItems(pageNum, number_of_pages);
      setProductsState([...productsState, ...up_comming_page_items]);
    }
    if (window.scrollY > 5) {
      navbar.style.boxShadow = '-1px 4px 20px -6px rgba(0, 0, 0, 0.2)';
    } else {
      navbar.style.boxShadow = '2px 2px 2px 1px rgba(0, 0, 0, 0)';
    }
  };
  const handleProductDetailShow = () => {
    setIsProductDetailShow(!isProductDetailShow);
  }
  const handleSearch = (event) => {
    event.stopPropagation();
    event.preventDefault()
    const value = event.target.value;
    const f = getFilteredItems(rowProductState, value);
    setProductsState(f);
    if (value === undefined || value === "") {
      setProductsState(rowProductState);
    }
  }
  const clickAscendingOrder = () => {
    const asc_data = ascending([...productsState]);
    setProductsState(asc_data);
    // setShowSidebar(false);
  }
  const clickDescendingOrder = () => {
    const desc_data = descending([...productsState]);
    setProductsState(desc_data);
    // setShowSidebar(false);
  }
  const clickPriceLowToMax = () => {
    const filtered_date = priceLowerToMax([...productsState]);
    setProductsState(filtered_date);
    // setShowSidebar(false);
  }
  const clickPriceMaxToLower = () => {
    const filtered_date = priceMaxToLower([...productsState]);
    setProductsState(filtered_date);
    // setShowSidebar(false);
  }
  const addToWishList = (obj, event) => {
    event.stopPropagation();
    addWishListAnimation(event.clientX, event.clientY);
    const list = [...wishListItems, obj];
    console.log("x, y: ", event.clientX, event.clientY);
    setWishListItems(list);
  }
  const removeFromWishList = (obj, event) => {
    event.stopPropagation();
    removeFromWishlistAnimation();
    const list = removeItemFromListOfObjects([...wishListItems], obj);
    setWishListItems(list);
  }
  const addToCartHandleClick = (obj, event) => {
    event.stopPropagation();
    addCartListAnimation(event.clientX, event.clientY);
    const list = [...cartListItems, obj];
    setCartListItems(list);
  }
  const removeFromCartList = (obj, event) => {
    event.stopPropagation();
    const list = removeItemFromListOfObjects(cartListItems, obj);
    setCartListItems(list);
  }
  useEffect(() => {
    const first_page_items = getProductItems(pageNumber, number_of_pages);
    setProductsState(first_page_items);
    setRowProductState(first_page_items);
  }, []);
  // console.log("productsState", productsState)
  return (
    <div>
      <Navbar bg="light" className="navbar-top-main fixed-top" expand="lg">
        <Container>
          Switch to :
          <Link to="/" style={{ ...buttonStyle() }}>
            <button className="btn" style={{ ...backgroundGradiant(), border: '1px solid black', position: 'relative' }}>
              Assignment 1
            </button>
          </Link>
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

            <FontAwesomeIcon className="m-2" id="wishlistBookmarkIcon" icon={faBookmark} />
            {wishListItems.length > 0 ? <Badge pill bg="danger" style={{ marginLeft: '-15px', marginTop: '-17px' }}>{wishListItems.length}</Badge> : false}<div id="removeBookmarkContainer" />
            <FontAwesomeIcon className="m-2" id="cartFortAwesomeIcon" icon={faShoppingCart} />
            {cartListItems.length > 0 ? <Badge pill bg="danger" style={{ marginLeft: '-15px', marginTop: '-17px' }}>{cartListItems.length}</Badge> : false}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="mt-5 w-100 product-list-container">
        <div className="container-fluid mt-3">
          <div className="row" style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="col-lg-3 col-md-3 col-sm-4">
              <ul className="side-panel mt-4 ps-0 float-right" style={{ textAlign: 'right', backgroundColor: 'white' }}>
                <li onClick={() => clickAscendingOrder()} className="nav-item pe-5 pt-2 pb-2">Ascending</li>
                <li onClick={() => clickDescendingOrder()} className="nav-item pe-5 pt-2 pb-2">Descending</li>
                <li onClick={() => clickPriceLowToMax()} className="nav-item pe-5 pt-2 pb-2">Price min-max</li>
                <li onClick={() => clickPriceMaxToLower()} className="nav-item pe-5 pt-2 pb-2">Price max-min</li>
              </ul>
            </div>
            <div className="col-lg-7 col-md-6 col-sm-8">
              {
                isProductDetailShow ? <Product
                  handleProductDetailShow={handleProductDetailShow}
                  selectedProductItemId={selectedProductItemId} />
                  :
                  <ProductItemsList
                    productList={productsState}
                    handleProductDetailShow={handleProductDetailShow}
                    setSelectedProductItemId={setSelectedProductItemId}
                    addToWishList={addToWishList}
                    removeFromWishList={removeFromWishList}
                    removeFromCartList={removeFromCartList}
                    cartListItems={cartListItems}
                    wishListItems={wishListItems}
                    addToCartHandleClick={addToCartHandleClick}
                  />
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ProductList;