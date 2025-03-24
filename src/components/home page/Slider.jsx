import React from "react";
import idli from "../../images/idli.png";
import dosa from "../../images/dosa.png";
import noodles from "../../images/noodles.png";
import biriyani from "../../images/biriyani.png";
import upma from "../../images/upma.png";
import hotel1 from "../../images/h1.jpg";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';

function cards() {
  return (
    <div className="mt-10 ml-20 mr-20 grid-cols-3 lg:grid-cols-5">
      <div>
        <div className="flex justify-between mb-5 w-full">
          <p className="font-[Montserrat] text-4xl w-full  md:w-fit">
            What's on your mind?
          </p>
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              className="mt-2"
            >
              <path d="M15.293 3.293 6.586 12l8.707 8.707 1.414-1.414L9.414 12l7.293-7.293-1.414-1.414z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              className="mt-2"
            >
              <path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z" />
            </svg>
          </div>
        </div>
        <div className="flex justify-center"><Swiper
          modules={[Navigation,Autoplay]}
          spaceBetween={10}
          slidesPerView={3}   
          navigation={true}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 }
          }}>
            <SwiperSlide>
          <div className="max-w-md p-6 rounded-md w-62 lg:w-full lg:scale-100 dark:bg-gray-50 dark:text-gray-900 md:w-1/2 xl:w-1/3">
            <img
              src={idli}
              alt=""
              className="object-cover w-full rounded-md h-62 aspect-ratio-16/9 sm:aspect-ratio-4/3 md:aspect-ratio-16/9 lg:aspect-ratio-21/9 dark:bg-gray-500"
            />
            <div className="">
              <h2 className="text-3xl font-semibold tracking-wide">Idli</h2>
            </div>
          </div></SwiperSlide>
          <SwiperSlide>
          <div className="max-w-xs p-6 pt-1 rounded-md  dark:bg-gray-50 dark:text-gray-900 md:w-1/2 xl:w-1/3">
            <img
              src={dosa}
              alt=""
              className="object-cover object-fit w-62 rounded-md h-62 dark:bg-gray-500"
            />
            <div className="">
              <h2 className="text-3xl font-semibold tracking-wide">Dosa</h2>
            </div>
          </div></SwiperSlide>
          <SwiperSlide>
          <div className="max-w-xs p-6 pt-1 rounded-md  dark:bg-gray-50 dark:text-gray-900 md:w-1/2 xl:w-1/3">
            <img
              src={noodles}
              alt=""
              className="object-cover object-center w-62 rounded-md h-62 dark:bg-gray-500"
            />
            <div className="">
              <h2 className="text-3xl font-semibold tracking-wide">Noodles</h2>
            </div>
          </div></SwiperSlide>
          <SwiperSlide>
          <div className="max-w-xs p-6 pt-1 rounded-md  dark:bg-gray-50 dark:text-gray-900 md:w-1/2 xl:w-1/3">
            <img
              src={biriyani}
              alt=""
              className="object-cover object-center w-62 rounded-full h-62  dark:bg-gray-500"
            />
            <div className="">
              <h2 className="text-3xl font-semibold tracking-wide">Biriyani</h2>
            </div>
          </div></SwiperSlide>
          <SwiperSlide>
          <div className="max-w-xs p-6 pt-1 rounded-md  dark:bg-gray-50 dark:text-gray-900 md:w-1/2 xl:w-1/3">
            <img
              src={upma}
              alt=""
              className="object-cover object-center w-62 rounded-full h-62  dark:bg-gray-500"
            />
            <div className="">
              <h2 className="text-3xl font-semibold tracking-wide">Upma</h2>
            </div>
          </div></SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="mt-20">
        <div className="mb-10">
          <p className="font-[Montserrat] text-4xl w-fit">Top Restaurants</p>
        </div>
        <div>
          <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
            <img
              src={hotel1}
              alt=""
              className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
            />
            <div className="mt-6 mb-2">
              <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-600">
                Quisque
              </span>
              <h2 className="text-xl font-semibold tracking-wide">
                Nam maximus purus
              </h2>
            </div>
            <p className="dark:text-gray-800">
              Mauris et lorem at elit tristique dignissim et ullamcorper elit.
              In sed feugiat mi. Etiam ut lacinia dui.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default cards;
