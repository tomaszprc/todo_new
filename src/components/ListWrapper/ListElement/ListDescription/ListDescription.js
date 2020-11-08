import React from "react";

const ListDescription = ({ title, description }) => (
  <div className="mr-5">
    <p className="text-lg font-bold">{title}</p>
    <p>{description}</p>
  </div>
);

export default ListDescription;
