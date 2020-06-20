import React from 'react';

const ListWrapper = (props) => {

    let tasks = props.tasks.map( task => (
        <div key={task.id}>
            <p>{task.title}</p>
            <p>{task.description}</p>
        </div>
    ))

    return (
        <div>
            {tasks}
        </div>
    )

}

export default ListWrapper;