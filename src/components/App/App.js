import React from "react";
import ListWrapper from "../ListWrapper/ListWrapper";
import Form from "../Form/Form";
import Modal from "../Modal/Modal";
import { useSelector } from "react-redux";
import actions from "../../app/tasks/duck/actions";
import { connect } from "react-redux";

function App(props) {
  const modal = useSelector((state) => state.openModal);

  const submit = (data) => {
    props.add(data);
  };

  return (
    <div className="container m-0 relative m-auto">
      {modal && <Modal />}
      <Form submit={submit} />
      <ListWrapper />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  add: (task) => dispatch(actions.add(task)),
});

export default connect(null, mapDispatchToProps)(App);
