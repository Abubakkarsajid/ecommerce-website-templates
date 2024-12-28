import React, { useState, useEffect } from 'react';
import { SalrTimmer } from './SalrTimmer';
import { NavLink } from 'react-router-dom';

export const Salecard = () => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch data from the API
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(response => response.json())
      .then(data => {
        // Set the first product in the response
        if (data.length > 0) {
          setProduct(data[0]);
        }
      })
      .catch(error => console.error('Error fetching product:', error));
  }, []);

  if (!product) {
    return <div className='text-center justify-between align-bottom'>{
        
        }</div>; // Display a loading message until the product is fetched
  }

  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt={product.title}
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src={product.images[0]}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">{product.category?.name || 'Category'}</h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product.title}</h1>
              <p className="leading-relaxed">{product.description}</p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div className="flex">
                  <span className="mr-3">Price</span>
                  <span className="text-gray-900">${product.price}</span>
                </div>
              </div>
              {
                <SalrTimmer />
              }
              <div className="flex">
              <NavLink to={`/shop/${product.id}`}  className="btn btn-success my-5 w-full">
                  Buy Now!
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
