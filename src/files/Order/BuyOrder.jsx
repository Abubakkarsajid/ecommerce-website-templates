import React, { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import Loader from "../Loader";
import { OrderCreate } from "./OrderTemplate";

export const BuyOrder = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function buyOrder() {
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.escuelajs.co/api/v1/products/${id}`
        );
        const result = await response.json();
        setProduct(result);
      } catch (error) {
        console.error("Error fetching product details:", error);
      } finally {
        setLoading(false);
      }
    }
    buyOrder();
  }, [id]);

  if (loading) {return <Loader />};
  if (!product)
    {
    return <h1 className="text-center  dark:bg-gray-100">Product not found</h1>;
}
  return (
    <div className="my-10">
      <div className="container mx-auto px-5 py-10">
        <div className="flex flex-col md:flex-row items-center">
          <img
            src={product.images[0] || "https://dummyimage.com/420x260"}
            alt={product.title}
            className="w-1/4   rounded-full shadow-lg"
          />
          <div className="md:ml-10 mt-5 md:mt-0">
            <h1 className="text-3xl font-bold dark:bg-gray-100 ">
              {product.title}
            </h1>
            <p className="text-gray-700 mt-2 dark:bg-gray-100 ">
              {product.description}
            </p>
        <div className="my-5">
          <OrderCreate product={{...product}} />
        </div>
            </div>
          </div>
        </div>
      </div>
  );
};
