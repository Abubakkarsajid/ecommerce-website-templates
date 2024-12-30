import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios"; // Missing import
import { toast } from "react-toastify"; // Missing import

export const OrderCreate = ({ product }) => {
  const generateRandomId = (length = 6) => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let randomId = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomId += characters[randomIndex];
    }
    return randomId;
  };

  const [order, setOrder] = useState({
   orderid: product.id,
    productName: product.title,
    UserId: "",
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    payment: "",
  });

  useEffect(() => {
    setOrder((prevOrder) => ({
      ...prevOrder,
      UserId: generateRandomId(),
    }));
  }, [product]); // Add 'product' as a dependency

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setOrder({ ...order, [name]: value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://ecommerce-website-backend-t217.onrender.com/create-order", order);
      setOrder({
        orderid: product.id,
        productName: product.title,
        UserId: "",
        name: "",
        phone: "",
        email: "",
        address: "",
        city: "",
        payment: "",
      });
      console.log("Response:", response.data);
      alert(`Order create successfully`);
    } catch (error) {
      console.error("Error creating order:", error);
      toast.error("Failed to create order");
    }
  };

  return (
    <StyledWrapper>
      <section className="section_form">
        <form id="consultation-form" className="feed-form" onSubmit={submitHandler}>
          <div className="flex gap-3">
            <h1>product ID: {product.id}</h1>
            <h1>Price: ${product.price}</h1>
          </div>
          <input
            required
            placeholder="Name"
            type="text"
            name="name"
            value={order.name}
            onChange={changeHandler}
          />
          <input
            name="phone"
            required
            placeholder="Phone number"
            type="tel"
            title="Enter a valid 10-digit phone number"
            value={order.phone}
            onChange={changeHandler}
          />
          <input
            name="email"
            required
            placeholder="E-mail"
            type="email"
            value={order.email}
            onChange={changeHandler}
          />
          <div className="flex gap-3">
            <input
              name="address"
              required
              placeholder="Address"
              type="text"
              value={order.address}
              onChange={changeHandler}
            />
            <input
              name="city"
              required
              placeholder="City"
              type="text"
              value={order.city}
              onChange={changeHandler}
            />
          </div>
          <div className="flex gap-3">
            <input
              name="payment"
              required
              placeholder="Payment Method"
              type="text"
              value={order.payment}
              onChange={changeHandler}
            />
          </div>
          <button className="btn btn-success my-5" type="submit">
            Place Order
          </button>
        </form>
      </section>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .feed-form {
    margin-top: 36px;
    display: flex;
    flex-direction: column;
    width: 300px;
  }

  .feed-form input {
    height: 54px;
    border-radius: 5px;
    background: white;
    margin-bottom: 15px;
    border: none;
    padding: 0 20px;
    font-weight: 300;
    font-size: 14px;
    color: #000;
  }

  .btn {
    width: 100%;
    height: 54px;
    font-size: 14px;
    color: white;
    background: green;
    border-radius: 5px;
    border: none;
    font-weight: 500;
    text-transform: uppercase;
    cursor: pointer;
  }

  .btn:hover {
    background: darkgreen;
  }
`;
