import React from "react";
import Form from "../Form/Form";
import { connect } from "react-redux";
import actions from "../../app/tasks/duck/actions";

const Modal = ({ taskId, taskName, taskDescription, submit, editButton }) => {
  const handleSubmit = (e) => {
    let task = {
      task_id: parseInt(e.task_id),
      task_title: e.task_title,
      task_description: e.task_description,
    };

    editButton(task);
  };

  return (
    <div className="w-1/2 absolute inset-x-0 top-half m-auto p-10 bg-orange-600">
      <Form submit={handleSubmit} />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  editButton: (task) => dispatch(actions.editButton(task)),
});

export default connect(null, mapDispatchToProps)(Modal);
