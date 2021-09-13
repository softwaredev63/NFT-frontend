import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Explore = ()=>{
    const settings = {
      dots: false,
      infinite: false,   
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      className: 'explore-slick-slider-custom',
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
      <div className="explore-slick-slider-container">
        <Slider {...settings} >
          <div className="explore-slider-backgroundcolour">
            <h3>1</h3>
          </div>
          <div className="explore-slider-backgroundcolour">
            <h3>2</h3>
          </div>
          <div className="explore-slider-backgroundcolour">
            <h3>3</h3>
          </div>
          <div className="explore-slider-backgroundcolour">
            <h3>4</h3>
          </div>
          <div className="explore-slider-backgroundcolour">
            <h3>5</h3>
          </div>
          <div className="explore-slider-backgroundcolour">
            <h3>6</h3>
          </div>
          <div className="explore-slider-backgroundcolour">
            <h3>7</h3>
          </div>
          <div className="explore-slider-backgroundcolour">
            <h3>8</h3>
          </div>
          <div className="explore-slider-backgroundcolour">
            <h3>9</h3>
          </div>
        </Slider>
      </div>
    );
}
export default Explore