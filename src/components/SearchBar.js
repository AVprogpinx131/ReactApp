import React, { useState } from "react";

const SearchItems = () => {
  const items = [
    "banana",
    "mango",
    "mandarin",
    "apple",
    "apricot",
    "peach",
    "cherry",
    "strawberry",
    "blackberry",
    "sweet cherry",
  ];

  const [inputText, setInputText] = useState("");

  const InputValue = (e) => {
    setInputText(e.target.value);
  };

  const ClearText = () => {
    setInputText("");
  };

  const fruitProducts = items.filter((item) => {
    return item.includes(inputText);
  });

  console.log(fruitProducts);

  const shouldDisplayBtn = inputText.length > 0;

  return (
    <div className="content">
      <input
        type="text"
        onChange={InputValue}
        value={inputText}
        placeholder="Search fruits"
      />
      {fruitProducts.length === 0 ? (
        <h3>Don't have this kind of product</h3>
      ) : (
        ""
      )}
      {fruitProducts.map((item) => {
        return <h3>{inputText.length === 0 ? "" : item}</h3>;
      })}
      {shouldDisplayBtn && (
        <button className="playPauseBtn clear" onClick={ClearText}>
          Clear
        </button>
      )}
    </div>
  );
};

export default SearchItems;
