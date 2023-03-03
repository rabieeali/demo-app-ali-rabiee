import { IProduct } from "@/model";
import Image from "next/image";
import React from "react";

const HorizantalProductCard = (props: IProduct) => {
  const { title, price, image, description, category } = props;
  return (
    <div className="card p-3 mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <Image width={200} height={200} src={image} className="img-fluid rounded-start" alt={title} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">Price: {price} $</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizantalProductCard;
