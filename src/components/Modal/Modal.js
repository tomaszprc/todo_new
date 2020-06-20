import React from 'react';
import Form from '../Form/Form';

const Modal = (props) => (
    <div className="w-1/2 absolute inset-x-0 top-half m-auto bg-orange-600">
        <Form 
            taskId={props.taskId}
            taskName={props.taskName}
            taskDescription={props.taskDescription}
            submit={props.submit}
        />
    </div>
);

export default Modal;