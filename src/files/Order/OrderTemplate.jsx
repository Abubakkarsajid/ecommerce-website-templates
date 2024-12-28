import React from 'react';
import styled from 'styled-components';
import Swal from 'sweetalert2';

export const OrderCreate = ({ product }) => {
    function conformOrder(){
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Order place successfully",
            showConfirmButton: false,
            timer: 2000
          });
    }
  return (
    <StyledWrapper>
      <section className="section_form">
        <form id="consultation-form" className="feed-form" action="#">
          <h1>Order id: {`${product.id}`}</h1>
          <h1>Price: {`$${product.price}`}</h1>
          <input required placeholder="Name" type="text" name="name" />
          <input name="phone" required placeholder="Phone number" type="tel" />
          <input name="email" required placeholder="E-mail" type="email" />
          <button className="button_submit" type="submit" onClick={()=>conformOrder()}>Place order</button>
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
    color: #4b4b4b;
  }

  .button_submit:hover,
  .feed-form input:hover {
    transform: scale(1.009);
    box-shadow: 0px 0px 3px 0px #212529;
  }

  .button_submit {
    width: 100%;
    height: 54px;
    font-size: 14px;
    color: white;
    background: red;
    border-radius: 5px;
    border: none;
    font-weight: 500;
    text-transform: uppercase;
  }
`;