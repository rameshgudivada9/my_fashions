// import "./ProductPage.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addData, getProductData } from "../redux/ProductReducer/ProductAction";
import { ProductCard } from "./ProductCard";

export const ProductPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductData());
  }, []);
  const productData = useSelector((store) => store.product.productData);
  console.log("productData:", productData);

  return (
    <div className="product-page">
      {productData.map((elem) => (
        <ProductCard props={elem} key={elem._id} />
      ))}
    </div>
  );
};