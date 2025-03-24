import React from "react";
import idli from "../../images/idli.png";
import dosa from "../../images/dosa.png";
import noodles from "../../images/noodles.png";
import biriyani from "../../images/biriyani.png";
import upma from "../../images/upma.png";
import palav from "../../images/palav.png";
import poori from "../../images/poori.jpg";
import vadapav from "../../images/vadapav.jpg";
import pizza from "../../images/pizza.jpg";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';


function ItemCards() {
  const foodItems = [
    { name: "Steamed Idli", image: idli },
    { name: "Crispy Dosa", image: dosa },
    { name: "Spicy Noodles", image: noodles },
    { name: "Hyderabadi Biryani", image: biriyani },
    { name: "South Indian Upma", image: upma },
    { name: "South Indian Palav", image: palav },
    { name: "Poori", image: poori },
    { name: "Vada Pav", image: vadapav },
    { name: "Pizza", image: pizza }
  ];
  return (

    <div className="mt-10 px-5 md:px-20">
      <div>
        <div className="flex justify-between mb-5">
          <p className="font-[Montserrat] text-2xl md:text-4xl">
            What's on your mind?
          </p>
        </div>
        <div className="flex justify-center">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={10}
            loop={true}
            autoplay={{ delay: 2000 }}
            navigation={true}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 }
              // 1440: { slidesPerView: 5 }
            }}
          >
            
{foodItems.map((item, index) => (
  <SwiperSlide key={index}>
    <div className="p-4 rounded-md shadow-md bg-gray-50 text-gray-900 m-2 h-70">
      <img src={item.image} alt={item.name} className="object-cover w-full rounded-md h-45" />
      <h2 className="text-xl font-semibold mt-2">{item.name}</h2>
    </div>
  </SwiperSlide>
))}</Swiper>
        </div>
      </div>
      
    </div>
  );
}

export default ItemCards
