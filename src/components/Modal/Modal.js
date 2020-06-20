import React from 'react';
import Form from '../Form/Form';

const Modal = ({taskId, taskName, taskDescription, submit}) => (
    <div className="w-1/2 absolute inset-x-0 top-half m-auto bg-orange-600">
        <Form 
            taskId={taskId}
            taskName={taskName}
            taskDescription={taskDescription}
            submit={submit}
        />
    </div>
);

export default Modal;