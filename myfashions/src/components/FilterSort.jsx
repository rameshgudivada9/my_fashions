import React,{ useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import {
  getProductDataFilterSort,
} from "../redux/ProductReducer/ProductAction";
import "./filterSort.css";
export const FilterSort = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState();

  useEffect(() => {
    searchParams.set("page", 1);
    searchParams.set("perPage", 20);
    setSearchParams(searchParams);
  }, []);
  useEffect(() => {
    if (query) {
      dispatch(getProductDataFilterSort(query));
    }
  }, [query]);
  return (
    <div className="filter-sort">
 
      <select
        onChange={(e) => {
          searchParams.set("brandName", e.target.value);
          setSearchParams(searchParams);
          setQuery({ ...query, brandName: searchParams.get("brandName") });
        }}
      >
        <option value="">Filter By Brands</option>
        <option value="puma">PUMA</option>
        <option value="reebok">REEBOK</option>
      </select>
      <select
        onChange={(e) => {
          searchParams.set("category", e.target.value);
          setSearchParams(searchParams);
          setQuery({ ...query, category: searchParams.get("category") });
        }}
      ><option value="">Filter by Catagery</option>
        <option value="men">MEN</option>
        <option value="women">WOMEN</option>
      </select>
      <select
        onChange={(e) => {
          searchParams.set("sort", e.target.value);
          setSearchParams(searchParams);
          setQuery({ ...query, sort: searchParams.get("sort") });
        }}
      >
        <option value="puma">Sorting by Price</option>
        <option value="asc">Low - High</option>
        <option value="des">High- Low</option>
      </select>
      <button
        onClick={() => {
            searchParams.set(
                "page",
                `${ +searchParams.get("page")-1}`
              );
          setSearchParams(searchParams);
          setQuery({ ...query, page: searchParams.get("page") });
        }}
      >
        Prev
      </button>
      <button
        onClick={() => {
            searchParams.set(
                "page",
                `${1+ +searchParams.get("page")}`
              );
          setSearchParams(searchParams);
          setQuery({ ...query, page: searchParams.get("page") });
        }}
      >
        Next
      </button>
    </div>
  );
};