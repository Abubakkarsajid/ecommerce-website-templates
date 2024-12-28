import React, { useState, useEffect } from "react";
import "./custom.css";
import Loader from "./Loader";
import { NavLink } from "react-router-dom";

export const SomeProducts = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true); // Set loading to true when fetching starts
        const response = await fetch(
          "https://api.escuelajs.co/api/v1/products"
        );
        const result = await response.json();
        setProducts(result);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false); // Set loading to false once fetch completes
      }
    }
    fetchProducts();
  }, []);

  // Filter products based on the search query
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
// Limit the filtered products to the first 10
const displayedProducts = filteredProducts.slice(0, 8);

return (
  <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
      <label className="input input-bordered flex items-center gap-2 my-10">
        <input
          type="text"
          className="grow"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1-7 0Z"
            clipRule="evenodd"
          />
        </svg>
      </label>
      <div className="flex justify-center flex-wrap -m-4">
        {loading ? (
          <Loader />
        ) : displayedProducts.length > 0 ? (
          displayedProducts.map((product) => (
            <div
              key={product.id}
              id="cards"
              className="lg:w-1/4 md:w-1/2 p-4 w-full"
            >
              <a
                className="block relative h-48 rounded overflow-hidden"
                href={`/shop/${product.id}`}
              >
                <img
                  alt={product.title}
                  className="object-cover object-center w-full h-full block"
                  src={product.images[0] || "https://dummyimage.com/420x260"}
                />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  {product.category?.name || "CATEGORY"}
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  {product.title}
                </h2>
                <p className="mt-1 font-semibold text-2xl">${product.price}</p>
                <div className="rating">
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star"
                  />
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star"
                  />
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star"
                  />
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star"
                  />
                </div>
              </div>
              <button id="favorites" className="btn w-full mt-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                Add To favorites
              </button>
              <br />
              <NavLink
                to={`/shop/${product.id}`}
                className="btn btn-success my-5 w-full"
              >
                Buy Now!
              </NavLink>
            </div>
          ))
        ) : (
          <h1 className="text-center font-3xl text-gray-500">
            No products found.
          </h1>
        )}
      </div>
      <div className="flex justify-center mt-10">
        <NavLink to="/shop" className="btn btn-primary w-40">
          See More Products
        </NavLink>
        </div>
    </div>
  </section>
);

};
