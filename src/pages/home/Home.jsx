import React from "react";
import "./home.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";
import ButtonCustom from "../../components/button/ButtonCustom";
export default function Home() {
  return (
    <>
      <div className="slide"></div>
      <div className="section home">
        <div className="color-block"></div>

        <div className="home-img">
          <img src="/assests/portfolio.jpg" alt="" />
        </div>

        <div className="home-text">
          <div className="home-text-wrap">
            <h1>
              I'm Nguyen Duc Chinh nhan
              <span>Security Operations Center</span>
            </h1>
            <p>
              Nice to meet you! My name is Nhan and I am passionate about cybersecurity, 
              especially in the field of Security Operations Center (SOC). 
              I aspire to build secure systems and contribute to protecting organizations 
              from threats, while ensuring reliability and efficiency. 
              I continuously strive to improve my knowledge, apply new security technologies, 
              and develop practical solutions that bring real value. 
              I look forward to opportunities to grow and collaborate in the cybersecurity field!

            </p>
            <ButtonCustom>
              <Link to="/about">
                <span className="btn-text">About</span>
                <span className="btn-icon">
                  <ArrowForwardIcon />
                </span>
              </Link>
            </ButtonCustom>
            <ButtonCustom className="ml-[48px]">
              <Link to="/project">
                <span className="btn-text">Project</span>
                <span className="btn-icon">
                  <ArrowForwardIcon />
                </span>
              </Link>
            </ButtonCustom>
          </div>
        </div>
      </div>
    </>
  );
}
