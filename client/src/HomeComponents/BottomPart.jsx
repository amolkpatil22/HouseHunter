import React from "react";
import { styled } from "styled-components";

const BottomPart = () => {
  return (
    <DIV>
      <div>
        <div className="columns-container">
          <div className="column">
            <img
              src="https://www.zillowstatic.com/bedrock/app/uploads/sites/5/2022/07/Buy_a_home.webp"
              alt="Buy A Home"
            />
            <h2>Buy a home</h2>
            <p>
            Find your place with an immersive photo experience and the most listings, including things you won’t find anywhere else.


            </p>
            <button>Browse homes</button>
          </div>
          <div className="column">
            <img
              src="https://www.zillowstatic.com/bedrock/app/uploads/sites/5/2022/08/Rent_a_home.webp"
              alt="Buy A Home"
            />
            <h2>Rent a home</h2>
            <p>
            We’re creating a seamless online experience – from shopping on the largest rental network, to applying, to paying rent.


            </p>
            <button>Find rentals </button>
          </div>
          <div className="column">
            <img
              src="https://www.zillowstatic.com/bedrock/app/uploads/sites/5/2022/07/Sell_a_home.webp"
              alt="Buy A Home"
            />
            <h2>Sell a home</h2>
            <p>
            No matter what path you take to sell your home, we can help you navigate a successful sale.


            </p>
            <button>See your options</button>
          </div>
        </div>
      </div>
    </DIV>
  );
};

export default BottomPart;

const DIV = styled.div`
  .columns-container {
    display: flex;
    justify-content: space-around;
    width: 90%;
    margin: 0 auto;
    padding:20px;
    /* height:470px; */
  }

  .column {
  width: 100%;
  cursor: pointer;
  border: 2px solid whitesmoke;
  flex: 0 0 calc(33.33% - 10px);
  text-align: center;
  padding: 50px;
  transition: border 0.3s, transform 0.3s;
  /* Add a shadow effect when hovering */
  /* box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2); */
}

.column:hover {
  border: 2px solid #fbfbfb;
  transform: scale(1.05);
  /* Adjust the shadow effect on hover */
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
}

  .column img {
    max-width: 100%;
    margin: auto;
    height: auto;
  }
  .column h2 {
    font-size: 24px;
    font-family:"Ivar Headline", "Ivar Headline Subset", "Adjusted Times", "Adjusted Times New Roman", "Times New Roman", serif;
    font-weight: 600;
    
  }
  .column p {
    margin-top: 10px;
    width: 250px;
    font-family:"Open Sans", Gotham, gotham, Tahoma, Geneva, sans-serif;
    font-size:15px;
    margin: auto;
    font-weight:lighter;
  }

  .column:not(:last-child) {
    margin-right: 20px; 
  }

  .column button {
    margin-top: 20px;
    margin-bottom: 10px;
    background-color: white;
    color: #006aff;
    transition: background-color 0.3s, color 0.3s;
    border: 1px solid #006aff;
    padding: 10px 40px;
    cursor: pointer;
    border-radius: 8px;
  }

  .column button:hover {
    background-color: #006aff;
    color: white;
    border:none;
    border-radius: 8px;
    padding: 10px 40px;
  }

  /* Media Query for smaller screens */
  @media screen and (max-width: 700px) {
    .columns-container {
      width: 90%;
      margin: auto;
      flex-direction: column;
      align-items: center;
    }
    .column {
      width: 100%;
      margin-bottom: 20px;
      cursor: pointer;
      flex: 0 0 calc(33.33% - 10px); 
      text-align: center;
      transition: border 0.3s;
    }
    .column img {
      max-width: 100%;
      margin: auto;
      height: auto;
    }
    .column h2 {
      font-size: large;
      font-weight: 600;
      margin-bottom: 10px;
    }
    .column p {
      margin-top: 20px;
      width: 200px;
      margin: auto;
    }

    .column:hover {
      border: 2px solid #f3ecec;
      transform: scale(1.05);
      transition: border 0.3s, transform 0.3s;
    }

    .column:not(:last-child) {
      margin-right: 0;
    }

    /* .column button {
      margin-top: 20px;
      margin-bottom: 10px;
      background-color: #007882;
      color: white;
      transition: background-color 0.3s, color 0.3s;
      border: none;
      padding: 10px 40px;
      cursor: pointer;
      border-radius: 8px;
    } */
  }

  @media screen and (min-width: 700px) and (max-width: 1020px) {
    .columns-container {
      width: 90%;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 10px;
    }
    .column {
      width: 100%;
      margin-bottom: 20px;
      cursor: pointer;
      flex: 0 0 calc(33.33% - 10px); /* Adjust the width of each column as desired */
      text-align: center;
      transition: border 0.3s;
    }
    .column img {
      max-width: 60%;
      margin: auto;
      height: auto;
    }
    .column h2 {
      font-size: large;
      font-weight: 600;
      margin-bottom: 10px;
    }
    .column p {
      margin-top: 20px;
      width: 200px;
      margin: auto;
    }

    .column:hover {
      border: 2px solid #ece2e2;
      
    }

    .column:not(:last-child) {
      margin-right: 0;
    }

    /* .column button {
      margin-top: 20px;
      margin-bottom: 10px;
      background-color: #007882;
      color: white;
      transition: background-color 0.3s, color 0.3s;
      border: none;
      padding: 10px 40px;
      cursor: pointer;
      border-radius: 8px;
    } */
  }
`;
