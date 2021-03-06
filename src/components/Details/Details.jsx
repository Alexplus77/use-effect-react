import React from "react";
import "App.css";

const Details = ({ userInfo }) => {
  const { name, avatar, details } = userInfo;
  const { city, company, position } = details;
  return (
    <div className="container-details">
      <div className="card" style={{ width: "19rem" }}>
        <img src={avatar} className="card-img-top" alt="..." />
        <ul className="list-group list-group-flush">
          <li style={{ fontSize: "20px" }} className="list-group-item">
            {" "}
            {name}
          </li>
          <li className="list-group-item">City: {city}</li>
          <li className="list-group-item">Company: {company}</li>
          <li className="list-group-item">Position: {position}</li>
        </ul>
      </div>
    </div>
  );
};

export { Details };
