import React from "react";

import styled from "styled-components";

const BottomImage = () => {
  return (
    <DIV id="lastimage">
      <img id="lastimage1" src="https://s.zillowstatic.com/pfs/static/footer-art.svg" alt="Last Image" />
    </DIV>
  );
};

export default BottomImage;

const DIV = styled.div`
  .image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; /* Optionally, adjust the height to center the image vertically */
  }

  .centered-image {
    max-width: 100%;
    max-height: 100%;
  }

  #lastimage1 {
    display: flex;

    margin: auto;
    justify-content: center;
    align-items: center;
  }
`;
