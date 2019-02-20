import React, { Component } from 'react';
import './App.css';
//import './components/TaskRow/TaskRow.css';
import TaskTable from './components/TaskTable/TaskTable';

class App extends Component {
  
  constructor(props){
    super(props);

    this.state = {};
    this.state.filterText = "";
    this.state.tasks =[
      {
        id: 1,
        task: 'Complete Assignment',
        description: 'According to given problem state, develop a mini-todo app using reactjs',
        duedate: '2/19/2019',
        status: 'Complete'
      }
    ];

  }

  handleUserInput(filterText) {
    this.setState({filterText: filterText});
  };

  handleAddEvent(event){
    var id = (Math.floor(Math.random()*999)).toString(20);
    var task = {
      id: id,
      task: "",
      description: "",
      duedate: "",
      status: ""
    }
    this.state.tasks.push(task);
    this.setState(this.state.tasks);
  }

  handleTaskTable(evt){
    var item = {
      id: evt.target.id,
      name: evt.target.name,
      value: evt.target.value
    }

    var tasks = this.state.tasks.slice();
    var newTasks = tasks.map(function(task){
      for(var key in task){
        if(key == item.name && task.id == item.id){
          task[key] = item.value;
        }
      }
      return task;
    });
    this.setState({tasks:newTasks});

  }

  handleRowDel(task){
    var index = this.state.tasks.indexOf(task);
    this.state.tasks.splice(index,1);
    this.setState(this.state.tasks);
  }



  render() {
    return (
      <div><center>
        <h2 className='awesome'>My TODO APP</h2>
        <TaskTable onTaskTableUpdate = {this.handleTaskTable.bind(this)}
        onRowAdd = {this.handleAddEvent.bind(this)}
        onRowDel = {this.handleRowDel.bind(this)}
        tasks = {this.state.tasks}
        filterText = {this.state.filterText} />
        </center>
      </div>
      
    );
  }
}

export default App;
