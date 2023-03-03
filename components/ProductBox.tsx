import { IProduct } from "@/model";
import Image from "next/image";
import Link from "next/link";
import Money from "./Money";

const ProductBox = (props: IProduct) => {
  const { id, title, price, image, description, category } = props;
  return (
    <>
      <article className="card h-100 d-flex flex-column justify-content-between shadow p-3 rounded">
        <small style={{ fontSize: "10px" }} className="bg-warning position-absolute p-1 rounded">
          {category}
        </small>
        <Image className="shadow mx-auto p-1 rounded-circle" src={image} width={150} height={150} alt={title} />
        <h3>{title}</h3>

        <div className="d-flex">
          <Money />
          <p>{price}</p>
        </div>
        <Link className="nav-link" href={`/products/${id}`}>
          <button className="btn btn-sm d-block ms-auto btn-info">See More</button>
        </Link>
      </article>

      <style jsx>{`
        small {
          top: 10px;
          left: 10px;
        }
        article {
          cursor: pointer;
          transition: all 0.2s ease-in-out;
        }

        article:hover {
          transform: scale(1.03);
        }
      `}</style>
    </>
  );
};

export default ProductBox;
