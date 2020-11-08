import React from "react";
import { useSelector } from "react-redux";
import ListElement from "./ListElement/ListElement";
import Header from "../Header/Header";
import { connect } from "react-redux";
import actions from "../../app/tasks/duck/actions";

const ListWrapper = (props) => {
  const tasks = useSelector((state) => state.tasks);

  const tasksActive = tasks.filter((task) => task.active);
  const tasksDone = tasks.filter((task) => !task.active);

  const removeTask = (e) => {
    props.remove(e.target.id);
  };

  const finishTask = (e) => {
    props.finish(e.target.id);
  };

  const editTask = (e) => {
    props.openModal(e.target.id);
  };

  const taskActiveList = tasksActive.map((task) => (
    <ListElement
      key={task.id}
      id={task.id}
      active={task.active}
      title={task.title}
      description={task.description}
      finishTask={finishTask}
      removeTask={removeTask}
      editTask={editTask}
    />
  ));

  const taskDoneList = tasksDone.map((task) => (
    <ListElement
      key={task.id}
      id={task.id}
      active={task.active}
      title={task.title}
      description={task.description}
      removeTask={removeTask}
    />
  ));

  return (
    <div className="text-center">
      <Header>Zadania do zrobienia</Header>
      {taskActiveList}
      <Header>Zadania zakończone</Header>
      {taskDoneList}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  remove: (task) => dispatch(actions.remove(task)),
  finish: (task) => dispatch(actions.finish(task)),
  openModal: (task) => dispatch(actions.openModal(task)),
});

export default connect(null, mapDispatchToProps)(ListWrapper);
