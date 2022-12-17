import React, { useState, useEffect } from 'react'
import '../../style/scss/ProductList.scss';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ProductItemsList from '../../components/ProductItemsList';
import { getProductItems } from '../../utils/getProductItems';
import { getFilteredItems } from '../../utils/getFilteredItems';
import Product from '../Product';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Badge from 'react-bootstrap/Badge';
import { useSelector } from 'react-redux';
import {
  PRODUCT_REDUCER,
  CART_LIST,
  WISH_LIST,
  NUMBER_OF_ITEMS_ON_PAGE,
  PRODUCT_LIST,
  PRUDUCT_LAZY_DATA_LOADING,
  PRUDUCT_LAZY_DATA_LOADED,
  IS_PRODUCT_LAZY_DATA_LIST_END,
  PRODUCT_LAZY_DATA_LOAD_FAILURE,
  PRUDCT_LAZY_DATA_LOAD_FAILURE_ERROR,
  ROW_PRODUCT_LIST
} from '../../redux/Product/const';
import { useDispatch } from 'react-redux';
import { ascendingProductList, descendingProductList, getProductList, priceLowToMax, priceMaxToLow, replaceToProductList } from '../../redux/Product/actions';



const ProductList = () => {
  const [isProductDetailShow, setIsProductDetailShow] = useState(false);
  const [selectedProductItemId, setSelectedProductItemId] = useState(null);

  const dispatch = useDispatch();
  const productState = useSelector(state => state);
  const cartList = productState[PRODUCT_REDUCER][CART_LIST];
  const wishList = productState[PRODUCT_REDUCER][WISH_LIST];
  const productList = productState[PRODUCT_REDUCER][PRODUCT_LIST];
  const rowProductList = productState[PRODUCT_REDUCER][ROW_PRODUCT_LIST];
  const isProductLazyDataLoading = productState[PRODUCT_REDUCER][PRUDUCT_LAZY_DATA_LOADING];
  const isProductLazyDataLoaded = productState[PRODUCT_REDUCER][PRUDUCT_LAZY_DATA_LOADED];
  const isProductLazyDataListEnd = productState[PRODUCT_REDUCER][IS_PRODUCT_LAZY_DATA_LIST_END];
  const isProductLazyDataListFailure = productState[PRODUCT_REDUCER][PRODUCT_LAZY_DATA_LOAD_FAILURE];
  const isProductLazyDataListFailureError = productState[PRODUCT_REDUCER][PRUDCT_LAZY_DATA_LOAD_FAILURE_ERROR];


  console.log("productState", productState);

  const [productsState, setProductsState] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  window.onscroll = function (ev) {
    const navbar = document.querySelector('.navbar-top-main');
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      if (!isProductLazyDataLoading && isProductLazyDataLoaded && !isProductLazyDataListEnd) {
        const pageNum = pageNumber + 1;
        setPageNumber(pageNum);
        const up_comming_page_items = getProductItems(pageNum, NUMBER_OF_ITEMS_ON_PAGE);
        dispatch(getProductList(pageNum, NUMBER_OF_ITEMS_ON_PAGE));
        setProductsState([...productsState, ...up_comming_page_items]);
      }
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
    const f = getFilteredItems(rowProductList, value);
    dispatch(replaceToProductList(f));
    if (value === undefined || value === "") {
      dispatch(replaceToProductList(rowProductList));
    }
  }

  useEffect(() => {
    dispatch(getProductList(pageNumber, NUMBER_OF_ITEMS_ON_PAGE));
  }, []);
  // console.log("productsState", productsState)
  return (
    <div>
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

            <FontAwesomeIcon className="m-2" id="wishlistBookmarkIcon" icon={faBookmark} />
            {wishList.length > 0 ? <Badge pill bg="danger" style={{ marginLeft: '-15px', marginTop: '-17px' }}>{wishList.length}</Badge> : false}<div id="removeBookmarkContainer" />
            <FontAwesomeIcon className="m-2" id="cartFortAwesomeIcon" icon={faShoppingCart} />
            {cartList.length > 0 ? <Badge pill bg="danger" style={{ marginLeft: '-15px', marginTop: '-17px' }}>{cartList.length}</Badge> : false}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="mt-5 w-100 product-list-container">
        <div className="container-fluid mt-3">
          <div className="row" style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="col-lg-3 col-md-3 col-sm-4">
              <ul className="side-panel mt-4 ps-0 float-right" style={{ textAlign: 'right', backgroundColor: 'white' }}>
                <li onClick={() => dispatch(ascendingProductList(productList))} className="nav-item pe-5 pt-2 pb-2">Ascending</li>
                <li onClick={() => dispatch(descendingProductList(productList))} className="nav-item pe-5 pt-2 pb-2">Descending</li>
                <li onClick={() => dispatch(priceLowToMax(productList))} className="nav-item pe-5 pt-2 pb-2">Price min-max</li>
                <li onClick={() => dispatch(priceMaxToLow(productList))} className="nav-item pe-5 pt-2 pb-2">Price max-min</li>
              </ul>
            </div>
            <div className="col-lg-7 col-md-6 col-sm-8">
              {
                isProductDetailShow ? <Product
                  handleProductDetailShow={handleProductDetailShow}
                  selectedProductItemId={selectedProductItemId} />
                  :
                  <>
                    <ProductItemsList
                      productList={productList}
                      handleProductDetailShow={handleProductDetailShow}
                      setSelectedProductItemId={setSelectedProductItemId}
                    />
                    {isProductLazyDataLoading && !isProductLazyDataListEnd ?
                      <div style={{ textAlign: 'center' }}><h1>Loading....</h1></div>
                      : false}
                    {isProductLazyDataListFailure ? <div style={{ textAlign: 'center' }}><h1>{isProductLazyDataListFailureError}</h1></div> : false}
                  </>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ProductList;