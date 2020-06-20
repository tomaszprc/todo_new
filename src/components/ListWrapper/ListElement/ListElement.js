import React from 'react';
import Button from '../../Button/Button';

const ListElement = (props) => (
    <div className="flex w-1/2 justify-center m-0 m-auto bg-yellow-400 border-2 border-white">
        <div className="mr-5">
            <p className="text-lg font-bold">{props.title}</p>
            <p>{props.description}</p>
        </div>
        <Button 
            id={props.id}
            value="Usuń"
            click={props.removeTask}
        />
        <Button 
            value="Edytuj"
            class="ml-5"
        />
    </div>
)

export default ListElement;