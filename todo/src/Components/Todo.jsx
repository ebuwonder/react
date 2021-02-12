import React, { Component } from 'react'
import ListItems from './ListItems';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
          };
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
      }
       
      addItem(e) {
        if (this._inputElement.value !== "") {
            let newItem = {
              text: this._inputElement.value,
              key: Date.now()
            };
         
            this.setState((prevState) => {
              return { 
                items: prevState.items.concat(newItem) 
              };
            });
           
            this._inputElement.value = "";
          }
           
          console.log(this.state.items);
             
          e.preventDefault();
      }
      deleteItem(key) {
        var filteredItems = this.state.items.filter(function (item) {
          return (item.key !== key);
        });
       
        this.setState({
          items: filteredItems
        });
      }
      
  render() {
    return (
      <div className="todoListMain">
        <div className="container">
          <form onSubmit={this.addItem}>
            <input ref={(a) => this._inputElement = a} placeholder="Type your task">
            </input>
            <button class="button" type="submit">Add to List</button>
            <button class="button" type="submit">Clear List</button>
          </form>
        </div>
        <ListItems entries={this.state.items}
         delete={this.deleteItem}/>
      </div>
    );
  }
}

export default Todo;

