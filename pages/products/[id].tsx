import Layout from "@/components/Layout";
import { getAllProducts, getProductById } from "@/services/axiosProductServices";
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { useRouter } from "next/router";
import { IProduct } from "@/model";
import HorizantalProductCard from "@/components/HorizantalProductCard";

interface IParams extends ParsedUrlQuery {
  id: string;
}

interface IProps {
  product: IProduct;
}

const SingleProduct = (props: IProps) => {
  const router = useRouter();
  const { id } = router.query as IParams;

  const { category, description, image, price, title } = props.product;

  return (
    <Layout title="something">
      <HorizantalProductCard {...props.product} />
    </Layout>
  );
};
export default SingleProduct;

export const getStaticPaths: GetStaticPaths = async () => {
  const allProducts = await getAllProducts();
  const paths = allProducts.map((p) => ({
    params: { id: String(p.id) },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<{ product: IProduct }> = async (context) => {
  interface IParams extends ParsedUrlQuery {
    id: string;
  }
  const { id } = context.params as IParams;
  const stringedId = String(id);
  const product = await getProductById(stringedId);

  return {
    props: { product },
    revalidate: 1,
  };
};
