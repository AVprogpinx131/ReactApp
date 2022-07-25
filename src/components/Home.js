import React, { Component } from "react";

const Home = (props) => {
  const hobbies = ["table tennis", "programming", "disc golf"];
  return (
    <div className="content">
      <h1>Hello React</h1>
      <h1 className="hobbies">My name is {props.name}</h1>
      <h1 className="hobbies desc">In this React App I have 4 projects</h1>
      <h1 className="title">
        {" "}
        My hobbies are:{" "}
        {hobbies.map((hobby) => {
          return <div className="hobbies">{hobby}</div>;
        })}
      </h1>
    </div>
  );
};

export default Home;
