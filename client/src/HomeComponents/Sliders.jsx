import styles from "./Slider.module.css";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";
import { SpinnerLoader } from "../pages/ProfilePage/ProfileComponent/Spinner";


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
  let [localdata, setlocaldata] = useState([])
  let [isLoading, setisLoading] = useState(false)

  useEffect(() => {
    setisLoading(true)
    axios({
      url: 'https://house-hunter-45uw.onrender.com/properties/buy',
      method: 'GET',
    })
      .then((res) => {
        setisLoading(false);
        console.log(res);
        setlocaldata(res.data.properties);
      })
      .catch((err) => {
        setisLoading(false);
        console.log(err);
      });
  }, [])


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
            justifyContent: isLoading ? "center" : "normal",
            scrollBehavior: "smooth",
          }}
        >
          {isLoading && <SpinnerLoader />}
          {isLoading == false && localdata?.map((e) => {
            return (
              <Link to={`/checkout/${e?._id}`}>
                <MyCard
                  src={e?.images[0]}
                  cap={e?.price}
                />
              </Link>
            )
          })}
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
