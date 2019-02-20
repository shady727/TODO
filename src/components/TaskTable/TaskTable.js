import React, { Component } from 'react';
import TaskRow from '../TaskRow/TaskRow';
import '../TaskRow/TaskRow.css';

class TaskTable extends Component{
    render(){
        const styling = {
            backgroundColor: '#dddde907'

        }

        var onTaskTableUpdate =this.props.onTaskTableUpdate;
        var rowDel =this.props.onRowDel;
        var filterText = this.props.filterText;
        var task = this.props.tasks.map(function(task){
            if(task.task.indexOf(filterText) === -1){
                return;
            }
            return(
                <TaskRow onTaskTableUpdate = {onTaskTableUpdate} task = {task} onDelEvent={rowDel.bind(this)} key = {task.id} />
            )
        });

        return(
            <div>
              <button type='button' onClick = {this.props.onRowAdd} style={styling}>New Task</button>
              <table>
                  <thead>
                      <tr>
                        <th>Task</th>
                        <th>Description</th>
                        <th>Due Date</th>
                        <th>Status</th>
                      </tr>
                  </thead>

                  <tbody>
                      {task}
                  </tbody>
              </table>
            </div>

        );
    }
}

export default TaskTable;