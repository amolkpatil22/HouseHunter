import styles from "./Slider.module.css";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import {Heading } from "@chakra-ui/react";


export const MyCard = ({ src, cap }) => {
  return (
    <div
      style={{
        minWidth: "260px",
        maxWidth: "320px",
        height: "320px",
        marginRight: "25px",
        // paddingTop:"10px",
        color: "white",
        marginLeft: "15px",
        borderRadius: "10px",
        marginBottom: "7px",
        marginTop: "7px",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      }}
    >
      <div>
        <img
          src={src}
          alt="i"
          style={{
            height: "250px",
            margin: "auto",
            // border:"2px solid green"
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
          }}
        />
      </div>

      <div className={styles.myCardCaption}>
        <Link to="/">{cap}</Link>
      </div>
    </div>
  );
};

export const Sliders = () => {

  const btnpressprev = () => {
    let box = document.querySelector(".productContainer");
    box.scrollLeft -= 300;
  };

  const btnpressnext = () => {
    let box = document.querySelector(".productContainer");
    box.scrollLeft += 300;
  };

  return (
    <div>
     <Heading
            fontFamily="'Ivar Headline', 'Ivar Headline Subset', 'Adjusted Times', 'Adjusted Times New Roman', 'Times New Roman', serif"
            fontSize={{ base: '18px', sm: '15px', md: '36px', lg: '36px' }}
            color="black"
            fontWeight="bold"
            margin={3}
          >
           Top Deals
          </Heading>
      <div className={styles.productCarousal}>
        <button onClick={btnpressprev} className={styles.preBtn}>
          <p> <FaArrowLeft /></p>
        </button>
        <button onClick={btnpressnext} className={styles.nextBtn}>
          <p><FaArrowRight /></p>
        </button>
        <div
          className="productContainer"
          style={{
            // padding: "0 0px",
            display: "flex",
            overflowX: "hidden",
            scrollBehavior: "smooth",
          }}
        >
          <Link to="/">
            <MyCard
              src="https://photos.zillowstatic.com/fp/f35879c3ca693660efe0eb24796b424f-p_e.jpg"
              cap="$299,999"
            />
          </Link>
          <Link to="/">
            <MyCard
              src="https://photos.zillowstatic.com/fp/bb0794f0d6c592a6585de0006849803f-p_e.jpg"
              cap="$299,999"
            />
          </Link>
          <Link to="/">
            <MyCard
              src="https://photos.zillowstatic.com/fp/51970e2e318cc4330aecdbbc8f2899b9-p_e.jpg"
              cap="$299,999"
            />
          </Link>
          <Link to="/">
            <MyCard
              src="https://photos.zillowstatic.com/fp/65fc65b518f6a8811c84efb672abe937-p_e.jpg"
              cap="$299,999"
            />
          </Link>
          <Link to="/">
            <MyCard
              src="https://photos.zillowstatic.com/fp/461fe05653427251133bb4aa5c0d4a55-p_e.jpg"
              cap="$299,999"
            />
          </Link>
          <Link to="/">
            <MyCard
              src="https://photos.zillowstatic.com/fp/57b87d71c4713d4af58091c9614f409d-p_e.jpg"
              cap="₹1599/day"
            />
          </Link>
          <Link to="/">
            <MyCard
              src="https://www.trulia.com/pictures/thumbs_4/zillowstatic/fp/f43f3a4a651bbb4ca09e55d89f66df62-full.webp"
              cap="$299,999"
            />
          </Link>
          <Link to="/">
            <MyCard
              src="https://www.trulia.com/pictures/thumbs_4/zillowstatic/fp/237ad3401f68b4be3c1b601968f27ab8-full.webp"
              cap="$299,999"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
