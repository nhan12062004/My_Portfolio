import React, { useState } from "react";
import "./project.css";
import TitleHeader from "../../components/title-header";
import ProjectCard from "../../components/projectCard/ProjectCard";
import {
  portfolio1,
  portfolio2,
  ec1,
  ec2,
  ec3,
  ec4,
} from "../../assets/projects/project";
export default function Project() {
  const categories = [
    "ALL",
    "HTML/CSS/JAVASCRIPT",
    "THYMELEAF",
    "NEXTJS/REACTJS/TAILWIND",
    "API",
  ];
  const projects = [


    {
      id: 1,
      thumbUrl: [portfolio1, portfolio2],
      date: "01/08/2025",
      title: "My Portfolio",
      description:
        "This is a single-page application built with ReactJS and also is my personal website to introduce myself, my skills, and the projects I have worked on.",
      role: "Main developer",
      frontend: ["SCSS", "React"],
      backend: "None",
      source: "https://github.com/nhan12062004/My_Portfolio",
      preview: "https://nguyenducchinhnhan.id.vn/",
      tags: ["reactjs", "animation", "portfolio"],
    },


    {
      id: 2,
      thumbUrl: [ec1, ec2, ec3, ec4],
      date: "02/05/2025",
      title: "Website",
      description:
        "This is a full-stack e-commerce platform with a Spring Boot backend and a ReactJS frontend. The project supports secure authentication using JWT and integrates modern UI libraries for a user experience",
      role: "Main Developer",
      frontend: ["Thymeleaf", "Bootstrap", "Javascript"],
      backend: "Spring Boot, MySQL",
      source: "https://github.com/nhan12062004/website",
      tags: ["thymeleaf", "bootstrap", "web", "spring boot"],
    },

  ];

  const [selectedCategory, setSelectedCategory] = useState("ALL");

  const filterProjects =
    selectedCategory === "ALL"
      ? projects
      : projects.filter((project) => {
          const selectedTags = selectedCategory
            .replace(/\//g, ",")
            .split(",")
            .map((tag) => tag.trim().toLowerCase());
          // Check if any tag in selectedTags is included in the project's tags
          console.log({ selectedTags });
          return selectedTags.some((tag) => project.tags.includes(tag));
        });

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };
  return (
    <>
      <div className="slide"></div>
      <div className="section project">
        <TitleHeader first={"my"} second={"projects"} third={"work"} />
        <div className="container">
          <div className="tab">
            <ul className="tab__nav">
              {categories.map((category) => (
                <li
                  key={category}
                  className={`tab__nav-item ${
                    selectedCategory === category ? "active" : ""
                  }`}
                  onClick={() => handleCategoryClick(category)}
                >
                  {category}
                </li>
              ))}
            </ul>

            <div className="tab__panel">
              {filterProjects.map((item) => (
                <ProjectCard item={item} id={item.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
