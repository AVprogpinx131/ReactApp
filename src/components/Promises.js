import React, { useState, useEffect } from "react";
import axios from "axios";

// https://fakestoreapi.com/products

const Promises = () => {
  const [titles, setTitles] = useState("");

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      // console.log(res);
      const newItems = res.data.map((product, index) => {
        return (
          <p>
            {index + 1}. &nbsp;&nbsp;
            {product.title}
          </p>
        );
      });
      setTitles(newItems);
    });
  }, []);

  return (
    <div className="content title-content">
      <h1 className="heading">Titles from the API are:</h1>
      <div className="titles">{titles}</div>
    </div>
  );
};

export default Promises;
