import React from "react";

const Button = ({ click, classValue, id, name, value }) => (
  <button
    onClick={click}
    className={`bg-blue-500 hover:bg-blue-700 my-2 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
      classValue ? classValue : ""
    }`}
    id={id}
    name={name}
  >
    {value}
  </button>
);

export default Button;
