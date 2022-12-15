import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getObjById } from '../../utils/getObjById';
import { getFolderName } from '../../components/ProductItemsList';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Button } from '@material-ui/core';
import '../../style/scss/Product.scss';


const Product = ({ handleProductDetailShow, selectedProductItemId }) => {
  const [product, setProduct] = useState({});
  const [selectedImage, setSelectedImage] = useState("");
  useEffect(() => {
    const obj = getObjById(selectedProductItemId);
    setProduct(obj);
    setSelectedImage(obj.all_images[0]);
  }, []);
  const ImageList = ({ product }) => {
    const images = product.all_images && product.all_images.map((img, index) => {
      return (
        <div key={'small_images_' + index}>
          <img onClick={() => setSelectedImage(img)} key={`product_small_image_` + index} src={require(`../../static/images/${getFolderName(product.id)}/${img}`)} height="100px" width="100px" />
        </div>
      );
    });
    return images;
  }
  // console.log("setSelectedImage", setSelectedImage);
  const productId = product.hasOwnProperty('id') ? product.id : 1;
  return (
    <div className="product-list-card card-detail-animate">
      <div>
        <Button onClick={handleProductDetailShow} startIcon={<FontAwesomeIcon icon={faArrowLeft} />} />
        <br />
        <div>
          <div style={{ position: 'relative', textAlign: "center" }}>
            {
              product.id ?
                <img className="img-fluid" style={{ borderRadius: "12px" }} key={`product_large_image_`} src={require(`../../static/images/${getFolderName(product.id)}/${selectedImage}`)} /> : false
            }
          </div>
          <div className="product-images-small-list" style={{ display: "flex", overflow: "scroll" }}>
            <ImageList product={product} />
          </div>
        </div>
        <b>{product.name}</b><br />
        <b>{product.price}&#8377;</b><br />
        {product.description}lorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adip
        lorem ipsum dolor sit amet, consectetur adip
        lorem ipsum dolor sit amet, consectetur adip
        lorem ipsum dolor sit amet, consectetur adip
        lorem ipsum dolor sit amet, consectetur adip
      </div>
    </div >
  );
}

export default Product;