import Layout from "@/components/Layout";
import ProductBox from "@/components/ProductBox";
import Select from "@/components/Select";
import { selectCurrentCategory } from "@/features/productsSlice";
import { IProduct } from "@/model";
import { getAllProducts } from "@/services/axiosProductServices";
import { GetStaticProps, NextPage } from "next";
import { useSelector } from "react-redux";
import { getProductByCategory } from "@/services/axiosProductServices";
import { useEffect, useState } from "react";
import Spinner from "@/components/Spinner";

interface IProps {
  products: IProduct[];
}

const ProductPage = (props: IProps) => {
  const { products } = props;
  const [currentCategorySate, setCurrentCategoryState] = useState([]);
  const [loading, setLoading] = useState(false);

  const currentCategory = useSelector(selectCurrentCategory);

  const fetchProductsByCategory = async () => {
    if (!currentCategory) return;
    try {
      setLoading(true);
      const resp = await getProductByCategory(currentCategory);
      setCurrentCategoryState(resp);
      setLoading(false);
      return resp;
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProductsByCategory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentCategory]);

  // this should come from an api in real world
  const categories = [
    { title: "select category", value: "" },
    { title: "men's clothing", value: "men's clothing" },
    { title: "jewelery", value: "jewelery" },
    { title: "electronics", value: "electronics" },
    { title: "women's clothing", value: "women's clothing" },
  ];

  return (
    <Layout>
      <div className="d-flex justify-content-between align-items-center">
        <h1>Products</h1>
        <Select categories={categories} />
      </div>
      <hr />

      <section className="row g-3">
        {loading ? (
          <Spinner />
        ) : currentCategory ? (
          currentCategorySate.map((product: IProduct) => (
            <div key={product.id} className="col-md-3">
              <ProductBox
                id={product.id}
                category={product.category}
                description={product.description}
                image={product.image}
                title={product.title}
                price={product.price}
              />
            </div>
          ))
        ) : (
          products?.map((product: IProduct) => (
            <div key={product.id} className="col-md-3">
              <ProductBox
                id={product.id}
                category={product.category}
                description={product.description}
                image={product.image}
                title={product.title}
                price={product.price}
              />
            </div>
          ))
        )}
      </section>
    </Layout>
  );
};

export default ProductPage;

export const getStaticProps: GetStaticProps = async () => {
  const products = await getAllProducts();

  return {
    props: { products },
    revalidate: 1,
  };
};
