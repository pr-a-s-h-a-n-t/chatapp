import Slider from "react-slick";

import styles from "../../../../style/StatusItem.module.scss";

import profileIcon from "../../../../assets/_picon.jpg";

// make dummy data for insta status
const reputes = [
  {
    id: 1,
    title: "prashant8459",
    image: profileIcon,
  },
  {
    id: 2,
    title: "prashant8459",
    image: profileIcon,
  },
  {
    id: 3,
    title: "prashant8459",
    image: profileIcon,
  },
];

const StatusItems = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: true,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
  };

  return (
    <>
      <div
        style={{
          width: "935px",
          display: "flex",
        }}
      >
        <style>
          {`
          .slick-slider,
          .slick-initialized,
          .slick-list,
          .slick-track {
            width: 100% !important;
            display: flex !important;
            columnGap: 2rem;
          }

          .slick-slider,{
            width: 110px;
          }

          `}
        </style>
        <Slider
          {...settings}
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            width: "100%",
            flexDirection: "row",
          }}
        >
          {reputes.map((reputes) => (
            <div className={styles.slide}>
              <div className={styles.status_image}>
                <img className={styles.status_pic} src={reputes.image} alt="" />
              </div>

              {/* <div className="status-text"> */}
              <h6 className={styles.username}>{reputes.title}</h6>
              {/* </div> */}
            </div>
          ))}
        </Slider>
      </div>
    </>

    // {/* <div>
    //     <StatusImageIcons
    //       icons={FaChevronCircleLeft}
    //       className="circle"
    //       onClick={prevStep}
    //     />

    //     <StatusImageIcons
    //       icons={FaChevronCircleRight}
    //       className="chevron"
    //       onClick={nextStep}
    //     />
    //   </div> */}
  );
};

export default StatusItems;
