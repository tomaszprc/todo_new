import React from "react";
import Button from "../../Button/Button";
import ListDescription from "./ListDescription/ListDescription";

const ListElement = ({
  title,
  description,
  id,
  active,
  removeTask,
  editTask,
  finishTask,
}) => (
  <div className="flex w-1/2 justify-center m-0 m-auto bg-yellow-400 border-2 border-white">
    <ListDescription title={title} description={description} />
    <Button id={id} value="Usuń" click={removeTask} />
    <Button id={id} value="Edytuj" classValue="ml-5" click={editTask} />
    {active && (
      <Button id={id} value="Zakończ" classValue="ml-5" click={finishTask} />
    )}
  </div>
);

export default ListElement;
