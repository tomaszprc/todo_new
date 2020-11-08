import React from "react";

const FormInput = ({ title, name, forwardRef, type }) => (
  <>
    <label className="block text-gray-700 text-sm font-bold mb-2">
      {title}
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type={type}
        name={name}
        ref={forwardRef}
      />
    </label>
  </>
);

export default FormInput;
