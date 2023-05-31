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
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
  };

  return (
    <>
      <div
        style={{
          width: "935px",
          display: "flex",
        }}
      >
        <Slider
          {...settings}
          style={{
            position: "relative",
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
