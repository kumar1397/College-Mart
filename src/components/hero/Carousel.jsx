import React from "react";
import Slider from "react-slick";

function AutoPlay() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    cssEase: "linear"
  };
  
  return (
    <div className="slider-container h-[50vh] mt-3">
      <Slider {...settings}>
        <div>
          <img src="https://images.pexels.com/photos/824197/pexels-photo-824197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="w-[500px] h-96"/>
        </div>
        <div>
          <img src="https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg?t=st=1720154347~exp=1720157947~hmac=b44ae45cf7ecb34cd7ef5ba71de4983a791251f9301aeb9f2ef11887f9c046e4&w=1060" alt="" className="w-[500px] h-96"/>
        </div>
        <div>
          <img src="https://img.freepik.com/free-photo/pink-headphones-wireless-digital-device_53876-96804.jpg?t=st=1720155046~exp=1720158646~hmac=e7906ba438857333272435201efbd700fdf3f62314582cabe61bf8830455d9a2&w=1060" alt="" className="w-[500px] h-96"/>
        </div>
        <div>
          <img src="https://img.freepik.com/free-photo/modern-comfortable-workplace-home-there-are-computer-laptop-table_613910-13268.jpg?t=st=1720156581~exp=1720160181~hmac=8be669aec6d1ccb13528c30f105641896aaa2d2ab99e41b1592ff7a58a202054&w=1060" alt="" className="w-[500px] h-96"/>
        </div>
        <div>
          <img src="https://img.freepik.com/free-photo/bicycle-outdoors-street_23-2148889110.jpg?t=st=1720156733~exp=1720160333~hmac=b6997fce393f544f78e3efc0c1e17006be2244c1c6a6c3df62df2a7bf0da2a02&w=1060" alt="" className="w-[500px] h-96"/>
        </div>
        <div>
          <img src="https://img.freepik.com/free-photo/shop-clothing-clothes-shop-hanger-modern-shop-boutique_1150-8886.jpg?t=st=1720153082~exp=1720156682~hmac=489b68ef866d5a885277d0f8b5710743483a1fe4f45864d64667582584af5d62&w=1060" alt="" className="w-[500px] h-96"/>
        </div>
        <div>
          <img src="https://img.freepik.com/free-photo/sport-equipment-arrangement-flat-lay_23-2149872095.jpg?t=st=1720154001~exp=1720157601~hmac=f3fab3f9a3ca12bc0c980a8488f0446be846f3cca7e93a5ef98eb28da0931188&w=1060" alt="" className="w-[500px] h-96"/>
        </div>
        <div>
          <img src="https://img.freepik.com/free-photo/high-angle-hands-holding-controller_23-2149829169.jpg?t=st=1720152342~exp=1720155942~hmac=7ea43e9f23365c3a87b601a1b40bba7d18a4c308bdce82df29fd20a6799e3614&w=1060" alt="" className="w-[500px] h-96"/>
        </div>
      </Slider>
    </div>
  );
}

export default AutoPlay;
