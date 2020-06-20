import React from 'react';
import './App.css';
import ListWrapper from '../ListWrapper/ListWrapper';
import Form from '../Form/Form';

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
    ]
  }

  handleAddTask = (e) => {
    e.preventDefault();

    let task = {
      id: this.task_count,
      title: e.target.task_name.value,
      description: e.target.task_description.value
    }

    this.task_count++;

    this.setState({
      tasks: [...this.state.tasks, task],
    });
  }

  handleRemoveTask = (e) => {
    e.preventDefault();

    this.setState({
      tasks: this.state.tasks.filter(task => task.id !== parseInt(e.target.id))
    });
  }

  render() {
    return (
      <div className="container m-0 m-auto">
        <Form submit={this.handleAddTask}/>
        <ListWrapper removeTask={this.handleRemoveTask} tasks={this.state.tasks}/>
      </div>
    )
  }
}

export default App;