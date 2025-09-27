import React, { useState } from "react";
import "./projectCard.css";
import ProjectDetail from "../projectDetail/ProjectDetail";

export default function ProjectCard({ item }) {
  const [isOpenDetail, setIsOpenDetail] = useState(false);

  const handleClick = () => setIsOpenDetail(true);
  const handleClose = () => setIsOpenDetail(false);

  console.log(isOpenDetail);
  return (
    <>
      {isOpenDetail && <ProjectDetail item={item} close={handleClose} />}
      <div className="project-card" onClick={handleClick}>
        <div
          className="bg-wrap"
          style={{ backgroundImage: `url(${item.thumbUrl[0]})` }}
        ></div>

        <h3>{item.title}</h3>
      </div>
    </>
  );
}
