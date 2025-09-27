import React from "react";
import "./projectDetail.css";
import { Close } from "@mui/icons-material";
import { Carousel } from "antd";

export default function ProjectDetail({ item, close }) {
  return (
    <div className="project-detail overlay">
      <div className="project-detail_inner">
        <div className="project-detail__content">
          {/* LEFT */}
          <div className="project-detail__content-left">
            <h3>
              <span>{item.title}</span>
            </h3>

            <Carousel arrows>
              {item.thumbUrl.map((url, i) => (
                <div key={i}>
                  <img src={url} alt="" height={500} />
                </div>
              ))}
            </Carousel>
          </div>
          {/* RIGHT */}
          <div className="project-detail__content-right">
            <h3>
              <span>Detail</span>
            </h3>

            <p>{item.description}</p>
            <ul>
              <li>
                Created - <span>{item.date}</span>
              </li>
              <li>
                Role - <span>{item.role}</span>
              </li>
              <li>
                Frontend - <span>{item.frontend.join(", ")}</span>
              </li>
              <li>
                Backend - <span>{item.backend}</span>
              </li>
              <li>
                Tags -
                <span style={{ textTransform: "lowercase" }}>
                  {item.tags.join(" / ")}
                </span>
              </li>
              <li>
                Source -
                <a href={item.source} target="_blank">
                  {item.source}
                </a>
              </li>
              {item.preview && (
                <li>
                  Demo -
                  <a href={item.preview} target="_blank">
                    {item.preview}
                  </a>
                </li>
              )}
            </ul>
          </div>

          <div className="close-btn" onClick={close}>
            <Close />
          </div>
        </div>
      </div>
    </div>
  );
}
