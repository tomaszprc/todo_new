import React from 'react';
import './App.css';
import ListWrapper from '../ListWrapper/ListWrapper';
import Form from '../Form/Form';

class App extends React.Component {

  state = {
    tasks: [
      {
        id : "1",
        title: "Zadanie numer 1",
        description: "Treść zadania numer 1"
      },
      {
        id : "2",
        title: "Zadanie numer 2",
        description: "Treść zadania numer 2"
      },
      {
        id : "3",
        title: "Zadanie numer 3",
        description: "Treść zadania numer 3"
      },
      {
        id : "4",
        title: "Zadanie numer 4",
        description: "Treść zadania numer 4"
      },
    ]
  }

  handleAddTask = (e) => {
    e.preventDefault();

    let task = {
      id: this.state.tasks.length + 1,
      title: e.target.task_name.value,
      description: e.target.task_description.value
    }

    this.setState({
      tasks: [...this.state.tasks, task],
    });
    
  }

  render() {
    return (
      <div className="container m-0 m-auto">
        <Form submit={this.handleAddTask}/>
        <ListWrapper tasks={this.state.tasks}/>
      </div>
    )
  }
}

export default App;