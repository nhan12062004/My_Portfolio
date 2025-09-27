import React from "react";
import "./index.css";
export default function TitleHeader({ first, second, third }) {
  return (
    <>
      <div className="page-header">
        <h1>
          <span>{first}</span> {second}
        </h1>
        <span>{third}</span>
      </div>
    </>
  );
}
