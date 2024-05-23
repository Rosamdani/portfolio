"use client";
import Link from "next/link";
import { Button } from "./ui/button";

// Import Swiper component

import { Swiper, SwiperSlide } from "swiper/react";

// Import swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import required module
import { Pagination } from "swiper/modules";

import ProjectCard from "@/components/ProjectCard";

const projectData = [
  {
    image: "/work/3.png",
    category: "react js",
    name: "Modern Website",
    description:
      "Lorem, ipsum dolor sit amet  Veniam laudantium aliquid earum doloribus quo quaerat.",
    link: "https://www.google.com",
    github: "https://github.com",
  },
  {
    image: "/work/4.png",
    category: "react js",
    name: "Solstice Website",
    description:
      "Lorem, ipsum dolor sit amet  Veniam laudantium aliquid earum doloribus quo quaerat.",
    link: "https://www.google.com",
    github: "https://github.com",
  },
  {
    image: "/work/2.png",
    category: "next js",
    name: "Lumina Website",
    description:
      "Lorem, ipsum dolor sit amet  Veniam laudantium aliquid earum doloribus quo quaerat.",
    link: "https://www.google.com",
    github: "https://github.com",
  },
  {
    image: "/work/1.png",
    category: "next js",
    name: "Evolve Website",
    description:
      "Lorem, ipsum dolor sit amet  Veniam laudantium aliquid earum doloribus quo quaerat.",
    link: "https://www.google.com",
    github: "https://github.com",
  },
  {
    image: "/work/3.png",
    category: "next js",
    name: "Project Management Website",
    description:
      "Lorem, ipsum dolor sit amet  Veniam laudantium aliquid earum doloribus quo quaerat.",
    link: "https://www.google.com",
    github: "https://github.com",
  },
  {
    image: "/work/4.png",
    category: "next js",
    name: "Envision Website",
    description:
      "Lorem, ipsum dolor sit amet  Veniam laudantium aliquid earum doloribus quo quaerat.",
    link: "https://www.google.com",
    github: "https://github.com",
  },
  {
    image: "/work/1.png",
    category: "fullstack",
    name: "Serenity Website",
    description:
      "Lorem, ipsum dolor sit amet  Veniam laudantium aliquid earum doloribus quo quaerat.",
    link: "https://www.google.com",
    github: "https://github.com",
  },
  {
    image: "/work/3.png",
    category: "fullstack",
    name: "Nova Website",
    description:
      "Lorem, ipsum dolor sit amet  Veniam laudantium aliquid earum doloribus quo quaerat.",
    link: "https://www.google.com",
    github: "https://github.com",
  },
  {
    image: "/work/2.png",
    category: "fullstack",
    name: "Zenith Website",
    description:
      "Lorem, ipsum dolor sit amet  Veniam laudantium aliquid earum doloribus quo quaerat.",
    link: "https://www.google.com",
    github: "https://github.com",
  },
];

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        {/* Text */}
        <div className="mx-auto max-w-[400px] xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">Project Terkini</h2>
          <p className="subtitle mb-8">
            Lorem ipsum dolor sit amet Delectus nobis doloremque ut?
          </p>
          <Link href="/projects">
            <Button>Lihat Semua</Button>
          </Link>
        </div>
        {/* Slider */}
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
          <Swiper
            className="h-[480px]"
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {/* Menampilkan hanya 4 data pada swiper */}
            {projectData.slice(0, 4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
