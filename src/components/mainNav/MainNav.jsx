import { Home } from "@mui/icons-material";
import PersonIcon from "@mui/icons-material/Person";
import WorkIcon from "@mui/icons-material/Work";
import EmailIcon from "@mui/icons-material/Email";
import "./mainNav.css";
import React from "react";
import { NavLink } from "react-router-dom";

export default function MainNav() {
  const listNav = [
    {
      path: "/",
      title: "home",
      icon: <Home />,
    },
    {
      path: "/about",
      title: "about",
      icon: <PersonIcon />,
    },
    {
      path: "/project",
      title: "project",
      icon: <WorkIcon />,
    },
    {
      path: "/contact",
      title: "contact",
      icon: <EmailIcon />,
    },
  ];

  return (
    <>
      <div className="nav-list">
        {listNav.map((element, index) => (
          <NavLink key={index} to={element.path}>
            <h2>{element.title}</h2>
            {element.icon}
          </NavLink>
        ))}
      </div>
    </>
  );
}
