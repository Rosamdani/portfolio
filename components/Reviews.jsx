"use client";
import Image from "next/image";

import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

// Import Swiper component

import { Swiper, SwiperSlide } from "swiper/react";

// Import swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import required module
import { Pagination } from "swiper/modules";

const reviewsData = [
  {
    avatar: "/reviews/avatar-1.png",
    name: "Richard Thompson",
    job: "Chef",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint voluptatibus reiciendis ipsam psum dolor sit amet consectetur adipisicing elit. Sint voluptatibus reiciendis ipsam.",
  },
  {
    avatar: "/reviews/avatar-2.png",
    name: "Evelin Anderson",
    job: "Interior Designer",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint voluptatibus reiciendis ipsam psum dolor sit amet consectetur adipisicing elit. Sint voluptatibus reiciendis ipsam.",
  },
  {
    avatar: "/reviews/avatar-3.png",
    name: "John Doe",
    job: "Game Dev",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint voluptatibus reiciendis ipsam psum dolor sit amet consectetur adipisicing elit. Sint voluptatibus reiciendis ipsam.",
  },
  {
    avatar: "/reviews/avatar-4.png",
    name: "Emily Smith",
    job: "Therapist",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint voluptatibus reiciendis ipsam psum dolor sit amet consectetur adipisicing elit. Sint voluptatibus reiciendis ipsam.",
  },
  {
    avatar: "/reviews/avatar-5.png",
    name: "Oliver Taylor",
    job: "Engineer",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint voluptatibus reiciendis ipsam psum dolor sit amet consectetur adipisicing elit. Sint voluptatibus reiciendis ipsam.",
  },
  {
    avatar: "/reviews/avatar-6.png",
    name: "Malson Vedro",
    job: "Editor",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint voluptatibus reiciendis ipsam psum dolor sit amet consectetur adipisicing elit. Sint voluptatibus reiciendis ipsam.",
  },
];

const Reviews = () => {
  return (
    <section className="mb-12 xl:mb-32">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 text-center mx-auto">
          Tanggapan Mereka
        </h2>
        {/* Slider */}
        <Swiper
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1400: { slidesPerView: 3 },
          }}
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{ clickable: true }}
          className="h-[350px]"
        >
          {reviewsData.map((person, index) => {
            return (
              <SwiperSlide key={index}>
                <Card className="bg-tertiary dark:bg-secondary/40 p-8 min-h-[300px]">
                  <CardHeader className="mb-10 p-0">
                    <div className="flex gap-x-4 items-center">
                      <Image
                        src={person.avatar}
                        alt={person.name}
                        width={70}
                        height={70}
                        priority
                      />
                      <div className="flex flex-col">
                        <CardTitle>{person.name}</CardTitle>
                        <p>{person.job}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardDescription>{person.description}</CardDescription>
                </Card>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
