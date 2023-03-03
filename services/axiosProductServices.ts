import axios from "axios";
import { IProduct } from "../model";

const API_URL = "https://fakestoreapi.com/products";



export const getAllProducts = async (): Promise<IProduct[]> => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const getProductById = async (id: string): Promise<IProduct> => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

export const getProductByCategory = async (category: string) => {
  const response = await axios.get(`${API_URL}/category/${category}`);
  return response.data;
};

