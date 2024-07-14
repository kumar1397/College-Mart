import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  "https://images.pexels.com/photos/824197/pexels-photo-824197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg?t=st=1720154347~exp=1720157947~hmac=b44ae45cf7ecb34cd7ef5ba71de4983a791251f9301aeb9f2ef11887f9c046e4&w=1060",
  "https://img.freepik.com/free-photo/pink-headphones-wireless-digital-device_53876-96804.jpg?t=st=1720155046~exp=1720158646~hmac=e7906ba438857333272435201efbd700fdf3f62314582cabe61bf8830455d9a2&w=1060",
  "https://img.freepik.com/free-photo/modern-comfortable-workplace-home-there-are-computer-laptop-table_613910-13246.jpg?w=1060&t=st=1720155051~exp=1720158651~hmac=85dfe4a50a74d49d5c051181515fa1960c87db2b04747c4c36ff66ae45597b61",
];

const AutoPlay = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="container mx-auto p-6 bg-gray-900 text-white">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="px-2">
            <img src={image} alt={`Slide ${index}`} className="w-full h-auto rounded-lg" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default AutoPlay;
