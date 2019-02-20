import React, { Component } from 'react';

class Editable extends Component {

    render() {
        const styling = {
            width: '200px'
            
        }
       
      return (
        <td>
          <input style={styling} type='text' name={this.props.cellData.type} id={this.props.cellData.id} value={this.props.cellData.value} onChange={this.props.onTaskTableUpdate}/>
        </td>
      );
  
    }
  
  }

  export default Editable;