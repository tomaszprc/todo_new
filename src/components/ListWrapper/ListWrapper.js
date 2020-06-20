import React from 'react';
import ListElement from './ListElement/ListElement';
import Header from '../Header/Header';

const ListWrapper = ({tasks, removeTask, finishTask, editTask}) => {

    const tasksActive = tasks.filter(task => task.active);
    const tasksDone = tasks.filter(task => !task.active);

    const tasksActiveList = tasksActive.map( task => (
        <ListElement 
            key={task.id} 
            id={task.id}
            active={task.active}
            title={task.title} 
            description={task.description}
            removeTask={removeTask}
            finishTask={finishTask}
            editTask={editTask}
        />
    ));

    const tasksDoneList = tasksDone.map( task => (
        <ListElement 
            key={task.id} 
            id={task.id}
            active={task.active}
            title={task.title} 
            description={task.description}
            removeTask={removeTask}
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