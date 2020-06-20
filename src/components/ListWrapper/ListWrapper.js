import React from 'react';
import ListElement from './ListElement/ListElement';

const ListWrapper = (props) => {

    let tasks = props.tasks.map( task => (
        <ListElement 
            key={task.id} 
            title={task.title} 
            description={task.description}
        />
    ))

    return (
        <div className="text-center">
            {tasks}
        </div>
    )
}

export default ListWrapper;