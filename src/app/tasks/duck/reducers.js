import { get } from "react-hook-form";
import types from "./types";

const INITIAL_STATE = {
  taskCount: 3,
  openModal: false,
  tasks: [
    {
      id: 1,
      title: "Zadanie numer 1",
      description: "Treść zadania 1",
      active: true,
    },
    {
      id: 2,
      title: "Zadanie numer 2",
      description: "Treść zadania 2",
      active: true,
    },
    {
      id: 3,
      title: "Zadanie numer 3",
      description: "Treść zadania 3",
      active: false,
    },
  ],
  task_id: null,
  task_title: "",
  task_description: "",
};

const tasksReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.ADD_TASK:
      state.taskCount++;

      let task = {
        id: state.taskCount,
        title: action.item.task_title,
        description: action.item.task_description,
        active: true,
      };

      return {
        ...state,
        tasks: [...state.tasks, task],
      };
    case types.DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((item) => item.id !== parseInt(action.item)),
      };
    case types.FINISH_TASK:
      const tasks = state.tasks.map((item) => {
        if (item.id === parseInt(action.item)) {
          item.active = false;
        }
        return item;
      });

      return {
        ...state,
        tasks,
      };

    case types.EDIT_TASK:
      let getTask = state.tasks.find((item) => {
        if (item.id === parseInt(action.item)) {
          return item;
        }
      });

      return {
        ...state,
        openModal: true,
        task_id: getTask.id,
        task_title: getTask.title,
        task_description: getTask.description,
      };

    case types.EDIT_BUTTON:
      let taskList = state.tasks.map((item) => {
        if (item.id === action.item.task_id) {
          item.title = action.item.task_title;
          item.description = action.item.task_description;
        }

        return item;
      });

      return {
        ...state,
        tasks: taskList,
        openModal: false,
      };

    default:
      return state;
  }
};

export default tasksReducer;
