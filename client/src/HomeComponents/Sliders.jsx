import styles from "./Slider.module.css";
import { Link, useNavigate } from "react-router-dom";
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

  const navigate = useNavigate()

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
          <Link to="/checkout2/65489873cdace050df6efb19">
            <MyCard
              src="https://photos.zillowstatic.com/fp/c5dcca5036a99a36d5a6b4a13dc1ac2d-cc_ft_960.webp"
              cap="$78,121"
            />
          </Link>
          <Link to="/checkout2/65489098f8de6d89c6484d41">
            <MyCard
              src="https://photos.zillowstatic.com/fp/2364dbdd388375aa9134bf62278b37cc-cc_ft_1536.webp"
              cap="$2,599/month"
            />
          </Link>
          <Link to="/checkout2/65489595cdace050df6efaf4">
            <MyCard
              src="https://photos.zillowstatic.com/fp/797ef5401b56713f5d3e4d20ff3a3bfa-cc_ft_576.webp"
              cap="$29,000"
            />
          </Link>
          <Link to="/checkout2/65489d5ecdace050df6efb64">
            <MyCard
              src="https://photos.zillowstatic.com/fp/afcbba732338215d63bf6cb7fbb5c1f7-cc_ft_576.webp"
              cap="$3000/month"
            />
          </Link>
          
          <Link to="/checkout2/65489a1bff417933f08de7aa">
            <MyCard
              src="https://photos.zillowstatic.com/fp/1232314075d079464aab4bad75f36de9-cc_ft_384.webp"
              cap="$619,000"
            />
          </Link>
          <Link to="/checkout2/65489cbfcdace050df6efb58">
            <MyCard
              src="https://photos.zillowstatic.com/fp/81b7fcf2f7b22ae6320cd78d1186a8d3-cc_ft_960.webp"
              cap="$52,500"
            />
          </Link>
        
          <Link to="/checkout2/6548fb7425225990b4b3982c">
            <MyCard
              src="https://photos.zillowstatic.com/fp/5e31c7679c053fd4a0e37bf3c298365b-cc_ft_576.webp"
              cap="$552,499"
            />
          </Link>
          {/* <Link to="/">
            <MyCard
              src="https://www.trulia.com/pictures/thumbs_4/zillowstatic/fp/237ad3401f68b4be3c1b601968f27ab8-full.webp"
              cap="$299,999"
            />
          </Link> */}
        </div>
      </div>
    </div>
  );
};
