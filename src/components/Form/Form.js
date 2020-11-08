import React from "react";
import FormInput from "./FormInput/FormInput";
import Button from "../Button/Button";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";

const Form = (props) => {
  const taskId = useSelector((state) => state.task_id);
  const taskTitle = useSelector((state) => state.task_title);
  const taskDescription = useSelector((state) => state.task_description);

  const { register, handleSubmit, errors } = useForm({
    defaultValues: {
      task_id: taskId,
      task_title: taskTitle,
      task_description: taskDescription,
    },
  });

  return (
    <form
      className="w-1/2 m-0 m-auto text-center bg-white shadow-md rounded px-8 pt-6 pb-8 my-4"
      onSubmit={handleSubmit(props.submit)}
    >
      <FormInput
        title="Nazwa zadania:"
        name="task_title"
        type="text"
        forwardRef={register({ required: true })}
      />
      {errors.task_title && <div>Zadanie musi mieć nazwę!</div>}
      <FormInput
        title="Treść zadania:"
        name="task_description"
        type="text"
        forwardRef={register({ required: true })}
      />

      <FormInput name="task_id" type="hidden" forwardRef={register()} />

      {errors.task_description && <div>Zadanie musi mieć treść!</div>}
      <Button value="Wyślij" name="submit_button" id={taskId} />
    </form>
  );
};

export default Form;
