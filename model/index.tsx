import { ReactNode } from "react";

export interface ILayout {
  title: string;
  children: ReactNode;
  keywords?: string;
  description?: string;
}
export interface IProjectBoxProps {
  desc: string;
  goto: string;
}

export interface IProduct {
  id: number | string;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export interface IinitialState {
  selectedCategory: null | string;
}
