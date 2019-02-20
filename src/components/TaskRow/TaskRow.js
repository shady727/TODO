import React, { Component } from 'react';
import Editable from '../Editable/Editable';
import './TaskRow.css';

class TaskRow extends Component{
    onDelEvent(){
        this.props.onDelEvent(this.props.task);
    }

    render() {

        return(
            <tr className='TaskRow'>
                <Editable onTaskTableUpdate = {this.props.onTaskTableUpdate} cellData={{
                    type: 'task',
                    value: this.props.task.task,
                    id: this.props.task.id
                }} />
                <Editable onTaskTableUpdate = {this.props.onTaskTableUpdate} cellData={{
                    type: 'description',
                    value: this.props.task.description,
                    id: this.props.task.id
                }} />
                <Editable onTaskTableUpdate = {this.props.onTaskTableUpdate} cellData={{
                    type: 'duedate',
                    value: this.props.task.duedate,
                    id: this.props.task.id
                }} />
                <Editable onTaskTableUpdate = {this.props.onTaskTableUpdate} cellData={{
                    type: 'status',
                    value: this.props.task.status,
                    id: this.props.task.id
                }} />

                <td>
                    <input type = 'button' onClick = {this.onDelEvent.bind(this)} value = 'x' />
                </td>
            </tr>
        );
    }
}

export default TaskRow;