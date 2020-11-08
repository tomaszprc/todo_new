import types from "./types";

const add = (item) => ({
  type: types.ADD_TASK,
  item,
});

const remove = (item) => ({
  type: types.DELETE_TASK,
  item,
});

const finish = (item) => ({
  type: types.FINISH_TASK,
  item,
});

const openModal = (item) => ({
  type: types.EDIT_TASK,
  item,
});

const editButton = (item) => ({
  type: types.EDIT_BUTTON,
  item,
});

export default {
  add,
  remove,
  finish,
  openModal,
  editButton,
};
