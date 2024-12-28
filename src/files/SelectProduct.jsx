import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import Loader from "./Loader";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProductDetails() {
      try {
        setLoading(true);
        const response = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);
        const result = await response.json();
        setProduct(result);
      } catch (error) {
        console.error("Error fetching product details:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchProductDetails();
  }, [id]);

  if (loading) return <Loader />;
  if (!product) return <h1 className="text-center  dark:bg-gray-100">Product not found</h1>;

  return (
    <div className="container mx-auto px-5 py-10">
      <div className="flex flex-col md:flex-row items-center">
        <img
          src={product.images[0] || "https://dummyimage.com/420x260"}
          alt={product.title}
          className="w-full md:w-1/2 rounded-lg shadow-lg"
        />
        <div className="md:ml-10 mt-5 md:mt-0">
          <h1 className="text-3xl font-bold dark:bg-gray-100 ">{product.title}</h1>
          <p className="text-gray-700 mt-2 dark:bg-gray-100 ">{product.description}</p>
          <h2 className="text-2xl font-semibold mt-4  dark:bg-gray-100">${product.price}</h2>
          <div className="">
          <NavLink to={`/shop/buy/${product.id}`} className="btn btn-success mt-5 mr-5">Buy Now</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
