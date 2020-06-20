import React from 'react';
import './App.css';
import ListWrapper from '../ListWrapper/ListWrapper';
import Form from '../Form/Form';
import Modal from '../Modal/Modal';

class App extends React.Component {

  task_count = 5;

  state = {
    tasks: [
      {
        id : 1,
        title: "Zadanie numer 1",
        description: "Treść zadania numer 1",
        active: true
      },
      {
        id : 2,
        title: "Zadanie numer 2",
        description: "Treść zadania numer 2",
        active: false
      },
      {
        id : 3,
        title: "Zadanie numer 3",
        description: "Treść zadania numer 3",
        active: true
      },
      {
        id : 4,
        title: "Zadanie numer 4",
        description: "Treść zadania numer 4",
        active: true
      },
    ],
    openModal: false,
    task_name: '',
    task_description: ''
  }

  handleAddTask = (e) => {
    e.preventDefault();

    let task = {
      id: this.task_count,
      title: e.target.task_name.value,
      description: e.target.task_description.value,
      active: true
    }

    this.task_count++;

    this.setState({
      tasks: [...this.state.tasks, task]
    });
  }

  handleRemoveTask = (e) => {
    e.preventDefault();

    this.setState({
      tasks: this.state.tasks.filter(task => task.id !== parseInt(e.target.id))
    });
  }

  handleFinishTask = (e) => {
    e.preventDefault();

    let tasks = this.state.tasks;

    tasks.forEach(task => {
      if (task.id === parseInt(e.target.id)) 
      {
        task.active = false;
      }
    })

    this.setState({
      tasks: tasks
    })
  }

  handleEditTask = (e) => {
    e.preventDefault();
    let tasks = this.state.tasks;

    tasks.forEach( task=> {
      if(task.id === parseInt(e.target.id))
      {
        this.setState({
          task_name: task.title,
          task_description: task.description,
          task_id: task.id,
          openModal: true
        })
      }
    })
  }

  handleEditButton = (e) => {
    e.preventDefault();
    let taskId = parseInt(e.target.submit_button.id);
    let tasks = this.state.tasks;

    tasks.forEach( task => {
      if (task.id === taskId) 
      {
        task.title = e.target.task_name.value;
        task.description = e.target.task_description.value
      }
    })

    this.setState({
      tasks: tasks,
      openModal: false
    })
    
  }

  render() {
    return (
      <div className="container m-0 m-auto">
        { this.state.openModal && 
          <Modal 
            taskId={this.state.task_id}
            taskName={this.state.task_name}
            taskDescription={this.state.task_description}
            submit={this.handleEditButton}
          /> 
        }
        <Form 
          submit={this.handleAddTask} 
        />
        <ListWrapper 
          editTask={this.handleEditTask}
          finishTask={this.handleFinishTask} 
          removeTask={this.handleRemoveTask} 
          tasks={this.state.tasks}
        />
      </div>
    )
  }
}

export default App;