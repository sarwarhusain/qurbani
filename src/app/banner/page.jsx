"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Parallax, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import { Button } from "@heroui/react";
import Link from "next/link";

const Banner = () => {
  return (
    <div className=" bg-gray-100 animate__animated animate__fadeInUp">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper container mx-auto"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          data-swiper-parallax="-23%"
        ></div>
        <SwiperSlide>
          <div className="flex items-center justify-center">
            <div>
              <div className="" data-swiper-parallax="-300">
                <p className="font-semibold text-2xl">
                  Naturally Grown with Love and Compassion
                </p>
              </div>
              <div className="subtitle" data-swiper-parallax="-200">
                <h2 className="swiper-slide-title  text-sm md:text-5xl">
                  Halal & Safe Qurbani
                </h2>
              </div>
              <div className="textdata-swiper-parallax-100">
                <p className="text-sm md:text-xl">
                  We provide halal and safe Qurbani services with the highest
                  standards of care and responsibility. Every animal is
                  ethically raised in a natural environment, ensuring quality,
                  hygiene, and complete peace of mind for you and your family.
                </p>
              </div>
            </div>
            <div>
              <Image
                width={900}
                height={900}
                src="https://i.postimg.cc/G34yLQMy/11405016.png"
                alt="name"
                className=""
              />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex items-center justify-center">
            <div>
              <div className="" data-swiper-parallax="-300">
                <p className="font-semibold text-2xl">
                  Compassionate Care, Naturally Raised
                </p>
              </div>
              <div className="subtitle" data-swiper-parallax="-200">
                <h2 className="animate__animated animate__bounce text-sm  md:text-5xl">
                  Trusted Halal Qurbani Services
                </h2>
              </div>
              <div className="textdata-swiper-parallax-100">
                <p className="text-sm md:text-xl">
                  Our Qurbani process follows strict halal guidelines while
                  prioritizing animal welfare and cleanliness. From farm to
                  sacrifice, we ensure a transparent, safe, and trustworthy
                  experience you can rely on.
                </p>
              </div>
            </div>
            <div>
              <Image
                width={900}
                height={900}
                src="https://i.postimg.cc/YS3LDDdY/curious-cow-field-removebg-preview.png"
                alt="name"
                className=""
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="flex items-center justify-center py-2">
        <Link href="/allAnimals">
          <Button variant="" className="bg-gray-300 hover:bg-[#ffd148]">
            Browse All
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
