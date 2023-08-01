import axios from "axios";
import { Product } from "../state/type";

const axiosInstance = axios.create({
  baseURL: "https://testbackend.nc-one.com",
});

const productsUrl = "/image";

export const fetchProducts = async () => {
  try {
    const responce = await axiosInstance.get(`${productsUrl}`);
    return responce.data;
  } catch (error) {
    console.log(error);

    return [];
  }
};

export const fetchproductById = async (id: string) => {
  try {
    const responce = await axiosInstance.get(`${productsUrl}?id=${id}`);
    return responce.data;
  } catch (error) {
    console.log(error);
    return {};
  }
};

export const isFavorite = (favorites: Product[], id: number): boolean => {
  return favorites.some((item) => item.id === id);
};
