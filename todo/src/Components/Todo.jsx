import React, { Component } from 'react'

function Todo(props) {
    return (
        <div>
            {props.item}
            
        </div>
    )
}
class TodoList extends Component {
    render() {
      return (
        <div className="todoListMain">
          <div className="header">
            <form>
              <input placeholder="enter task">
              </input>
              <button type="submit">add</button>
            </form>
          </div>
        </div>
      );
    }
  }

export default Todo;

