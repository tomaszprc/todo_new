import React from 'react';
import ListElement from './ListElement/ListElement';
import Header from '../Header/Header';

const ListWrapper = (props) => {

    const tasksActive = props.tasks.filter(task => task.active);
    const tasksDone = props.tasks.filter(task => !task.active);

    const tasksActiveList = tasksActive.map( task => (
        <ListElement 
            key={task.id} 
            id={task.id}
            active={task.active}
            title={task.title} 
            description={task.description}
            removeTask={props.removeTask}
            finishTask={props.finishTask}
            editTask={props.editTask}
        />
    ));

    const tasksDoneList = tasksDone.map( task => (
        <ListElement 
            key={task.id} 
            id={task.id}
            active={task.active}
            title={task.title} 
            description={task.description}
            removeTask={props.removeTask}
        />
    ));
   
    return (
        <div className="text-center">
            <Header>Zadania do zrobienia</Header>
            {tasksActiveList}
            <Header>Zadania zakończone</Header>
            {tasksDoneList}
        </div>
    )
}

export default ListWrapper;