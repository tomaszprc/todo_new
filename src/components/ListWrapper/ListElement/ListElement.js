import React from 'react';
import Button from '../../Button/Button';
import ListDescription from './ListDescription/ListDescription';

const ListElement = (props) => (
    <div className="flex w-1/2 justify-center m-0 m-auto bg-yellow-400 border-2 border-white">
        <ListDescription 
            title={props.title}
            description={props.description}
        />
        <Button 
            id={props.id}
            value="Usuń"
            click={props.removeTask}
        />
        <Button 
            value="Edytuj"
            class="ml-5"
        />
        {props.active && 
            <Button 
                id={props.id}
                value="Zakończ"
                class="ml-5"
                click={props.finishTask}
            />
        }
    </div>
)

export default ListElement;