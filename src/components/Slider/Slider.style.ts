import styled from "styled-components";

export const SliderContainer = styled.div`
  width: 90%;
  max-width: 1280px;
  margin: 0 auto;
  padding-bottom: 40px;

  /* Ensure hover effects and shadows are not clipped */
  .slick-list {
    padding-top: 40px !important;
    padding-bottom: 40px !important;
    overflow: visible !important;
  }

  .slick-track {
    display: flex !important;
  }

  .slick-slide {
    height: inherit !important;
  }
`;
