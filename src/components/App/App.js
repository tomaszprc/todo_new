import React from 'react';
import './App.css';
import ListWrapper from '../ListWrapper/ListWrapper';

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

  render() {
    return (
      <div className="container m-0 m-auto">
        <ListWrapper tasks={this.state.tasks}/>
      </div>
    )
  }
}

export default App;