"use client";
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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

const uniqueCategories = [
  "semua project",
  ...new Set(projectData.map((item) => item.category)),
];

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState("semua project");

  const filteredProject = projectData.filter((item) => {
    return category === "semua project" ? item : item.category === category;
  });

  console.log(filteredProject);
  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Project
        </h2>
        {/* Tabs */}
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className="w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  key={index}
                  value={category}
                  className="capitalize w-[162px] md:mx-auto"
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/* Tabs Content */}
          <div className="grid grid-cols-1 xl:mt-8 lg:grid-cols-2 xl:grid-cols-3 gap-4">
            {filteredProject.map((content, index) => {
              return (
                <TabsContent key={index} value={category}>
                  <ProjectCard project={content} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
