import React, { FC, useEffect } from "react";
import { useStateContext, useDispatchContext } from "../../state/reducer";
import {
  FetchProductsListAction,
  SetProductsListAction,
} from "../../state/actions";
import { fetchProducts } from "../config";
import Loader from "../../Components/Loader";
import ProductsPart from "../../Components/ProductsPart";
import Header from "../../Components/Header";

const Products: FC = () => {
  const dispatch = useDispatchContext();
  const { list, isLoading, favorites } = useStateContext();

  useEffect(() => {
    const fetchData = async () => {
      dispatch(FetchProductsListAction());
      const res = await fetchProducts();
      dispatch(SetProductsListAction(res as any));
    };
    fetchData();
  }, []);

  return (
    <>
      <Header title="Product list Page" />

      <Loader isLoading={isLoading}>
        <ProductsPart list={list} favorites={favorites} />
      </Loader>
    </>
  );
};

export default Products;
