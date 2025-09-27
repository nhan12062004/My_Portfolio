import React from "react";
import "./about.css";
import TitleHeader from "../../components/title-header/index.jsx";
import ButtonCustom from "../../components/button/ButtonCustom.jsx";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AddIcon from "@mui/icons-material/Add";
import {
  html,
  css,
  sass,
  javascript,
  java,
  react,
  redux,
  git,
  axios,
  tailwind,
  go,
  spring,
  mySQL,
  python,
} from "../../assets/skills/skills.js";

import { Link } from "react-router-dom";

export default function About() {
  const skills = [
     {
       name: "html",
       path: html,
    },
    {
      name: "react",
      path: react,
    },

    {
      name: "css",
      path: css,
    },

    {
      name: "mySQL",
      path: mySQL,
    },
    // {
    //   name: "sass",
    //   path: sass,
    // },
    {
      name: "javascript",
      path: javascript,
    },
    {
      name: "java",
      path: java,
    },


    {
      name: "git",
      path: git,
    },
    {
      name: "python",
     path: python,
     },
  ];
  return (
    <>
      <div className="slide"></div>
      <div className="section">
        <TitleHeader first={"About"} second={"Me"} third={"Resume"} />
        <div className="container">
          {/* INFOR */}
          <div className="info">
            {/* LEFT */}
            <div className="info__basic">
              <h3>personal information</h3>
              <ul className="info-list">
                <li>
                  <span>First name: </span>
                  Nhan
                </li>
                <li>
                  <span>Last name: </span>
                  Nguyen Duc Chinh
                </li>
                <li>
                  <span>birthday: </span>
                  12/06/2004
                </li>
                <li>
                  <span>sex: </span>
                  Male
                </li>
                <li>
                  <span>nation: </span>
                  Viet Nam
                </li>
                <li>
                  <span>address: </span>
                  Linh Nam, Ha Noi
                </li>
                <li>
                  <span>phone: </span>
                  0328104037
                </li>
                <li>
                  <span>git: </span>
                  https://github.com/nhan12062004
                </li>
                <li>
                  <span>language: </span>VietNamese, English, Chinese
                </li>
                <li>
                  <span>email: </span>
                  nhanmit120604@gmail.com
                </li>
              </ul>
              <ButtonCustom>
                <a
                  href="https://drive.google.com/file/d/1iihcLP83Djg_Gc41fQNSjIE9G0E405LS/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className="flex items-center"
                >
                  <span className="btn-text">Download CV</span>
                  <span className="btn-icon">
                    <ArrowForwardIcon />
                  </span>
                </a>
              </ButtonCustom>
            </div>
            {/* RIGHT */}
            <div className="info__more">
              <div className="info__more__card">
                <h3>
                  3
                  <AddIcon />
                </h3>
                <p>
                  personal <span>projects</span>
                </p>
              </div>

              <div className="info__more__card">
                <h3>
                  0
                  <AddIcon />
                </h3>
                <p>
                  years of <span>experience</span>
                </p>
              </div>

              <div className="info__more__card">
                <h3>
                  0
                  <AddIcon />
                </h3>
                <p>
                  years of <span>experience</span>
                </p>
              </div>
            </div>
          </div>
          <hr />

          {/*================= SKILLS ==================*/}
          <h3 className="skill-heading">My Skills</h3>
          <div className="skill">
            {skills.map((item, i) => (
              <div key={i} className="skill-item">
                <div className="skill-item__img mb-1">
                  <div
                    className="skill-item__img-wrap"
                    style={{ backgroundImage: `url(${item.path})` }}
                  ></div>
                </div>
                <div className="skill-item__name">
                  <h6>{item.name}</h6>
                </div>
              </div>
            ))}
          </div>
          <hr />

          {/*================== EXPERIENCE ==============*/}
          <h3 className="resume__heading">Education & Experience</h3>
          <div className="resume grid grid-cols-2 gap-8">
            {/* Cột 1: Education */}
            <div className="resume__edu">
              <div className="resume__edu__item mb-3">
                <div className="icon">
                  <i className="bx bxs-briefcase"></i>
                </div>
                <span className="time">2022-2026</span>
                <h3>
                  Kinh te - Ky thuat Cong nghiep <span className="place">University</span>
                </h3>
                <p>Not Graduated</p>
              </div>
            </div>

            {/* Cột 2: Experience */}
            <div className="resume__exp space-y-4">
              <div className="resume__exp__item">
                <div className="icon">
                  <i className="bx bxs-briefcase"></i>
                </div>
                <span className="time">T3/2023 - T8/2023</span>
                <h3>
                  Overa group <span className="place">COMPANY</span>
                </h3>
                <p>Research and Development</p>
              </div>

              <div className="resume__exp__item">
                <div className="icon">
                  <i className="bx bxs-briefcase"></i>
                </div>
                <span className="time">T11/2023 - T1/2025</span>
                <h3>
                  NoteWorthy Notebook <span className="place">COMPANY</span>
                </h3>
                <p>Construction staff</p>
              </div>

              <div className="resume__exp__item">
                <div className="icon">
                  <i className="bx bxs-briefcase"></i>
                </div>
                <span className="time">T11/2023 - T1/2025</span>
                <h3>
                  Nha Gon <span className="place">STORE</span>
                </h3>
                <p>Packaging staff</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
