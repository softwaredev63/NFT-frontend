import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { hotbid } from '../data/dummyData';

const HotBids = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    className: 'hot-bid-slick-slider-custom',
    responsive: [
      {
        breakpoint: 1224,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          dots: false,
          infinite: false,
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="hot-bid-slick-slider-container">
      <Slider {...settings} >
        {hotbid.map(bid => (
          <div className="hot-bid-slider-backgroundcolour">
            <h3 className="hot-bid-slider-picture">
              <img src={bid.imgSrc} alt="Girl in a jacket" />
            </h3>
          </div>
        ))}
      </Slider>
    </div>
  );
}
export default HotBids;