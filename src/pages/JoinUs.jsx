import React from "react";
import "../assets/styles/JoinUs.css";
import JoinUsImg from "../../src/assets/images/joinuspic.png";
import RoleCard from "../components/RoleCard";
import RolesData from "../components/RolesData";
import JoinFoot from "../../src/assets/images/joinusend.png";

export default function JoinUs() {
  return (
    <>
      <div
        id="join-header"
        className=" flex flex-col md:flex-row md:items-center md:justify-around pt-10 pb-10"
      >
        <div
          id="join-header-text"
          className=" gap-2 ml-10 text-3xl font-bold md:text-6xl flex flex-col md:gap-4 "
        >
          <h1>Fall 2024</h1>
          <h1>Applications</h1>
          <h1 className="blue-text">Are Open</h1>
        </div>
        <img
          src={JoinUsImg}
          className="max-w-[250px] md:max-w-[400px] lg:max-w-[450px] ml-10 mt-4  "
          alt="7 people poseing for a group photo"
        />
      </div>

      <h1 className="text-center text-3xl md:text-5xl font-bold mt-32">
        See our open roles
      </h1>

      <div
        className="flex flex-col items-center md:flex md:items-center md:justify-center"
        id="join-card-sect"
      >
        <div
          id="open-roles-container"
          className="grid flex-col items-center gap-4 mt-10 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-5 "
        >
          {/*  this puts the data in RolesData.js into card compontes (RoleCard.jsx)*/}
          {RolesData.map((card, i) => (
            <RoleCard
              key={i}
              role={card.role}
              divison={card.divison}
              desc={card.desc}
              link={card.link}
            />
          ))}
        </div>
      </div>
    </>
  );
}
