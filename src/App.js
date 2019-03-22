import React, { Component } from 'react';
import './App.css';
import AddItems from './AddItems';
import _ from 'lodash';
import EditField from './EditField';

class App extends Component {

	constructor(){
      super();
       this.state = {
        items: [],
        name: "",
        number: "",
        id: 0,
        errors:{},
        showEdit: false,
        editId: '',
        editName: '',
        editNumber: ''
      };
      this.rowId = 0;
   }

  handleChange = (e) => {
    let errors = this.state.errors || {};
    if (e.target.value) { 
      errors[e.target.id] = '';
    } else {
      errors[e.target.id] = 'Cannot be empty';
    }
    
    this.setState({
      [e.target.id]: e.target.value,
      errors: errors
    });
  }
  
  handleNameUpdate = (e) => {
    let errors = this.state.errors || {};
    if (e.target.value) { 
  
      errors[e.target.id] = '';
    } else {
      errors[e.target.id] = 'Cannot be empty';
    }
    this.setState({
      editName: e.target.value,
      errors:errors
    });
  }
  
  handleUpdate = (id) => {
  let items = this.state.items;

  if ([this.state.editName]=="" || [this.state.editNumber]=="") {
    let pastRecord = _.find(items, _.find(items, {id: id }));
    this.setState({
      [this.state.editId]: pastRecord
    })
  } else {
    let record = _.find(items, _.find(items, {id: this.state.editId }));
    record.name = this.state.editName;
    record.number = this.state.editNumber;
    this.setState({
      [this.state.editId]: record,
      showEdit: false,
      editName: '',
      editId: '',
      editNumber: ''
    });
  }
  
  }
  
   handleNumberUpdate = (e) => {
    let errors = this.state.errors || {};
    if (e.target.value) { 
      errors["edit-number"] = '';
    } else {
      errors["edit-number"] = 'Cannot be empty';
    }

   if (!isNaN(e.target.value)) {
   		this.setState({
      editNumber: e.target.value,
      errors:errors
    });
   }
  }

 handleNumberChange = (e) => {
  let errors = this.state.errors || {};
  if (e.target.value) { 
    errors[e.target.id] = '';
  } else {
    errors[e.target.id] = 'Cannot be empty';
  }

  if (!isNaN(e.target.value) ) {
    this.setState({
      [e.target.id]: e.target.value,
      errors: errors
    })
   } 
  }

  addItem = (e) => {
     e.preventDefault();
    var itemArray = this.state.items;
    this.rowId = this.rowId + 1;
        if(this.handleValidation()){
      itemArray.push({
    	id: (this.rowId),
      name: this.state.name,
      number: this.state.number
    });

    this.setState({
      items: itemArray,
      id: 0,
      name: "",
     number: ""
    });
    }
  }
  
  handleEdit = (id) => {
  	let items = this.state.items;
  	let record = _.find(items, _.find(items, {id: id }));
    this.setState({
    	showEdit: !this.state.showEdit,
      editName: record.name,
      editNumber: record.number,
      editId: id
    });
  }
  handleRemoveItem = (id) => {
  let items = this.state.items;
  let record = _.without(items, _.find(items, {id: id }));
  this.setState({
      items: record
      });
  }
  
 handleValidation(){
    let fieldName = this.state.name;
    let fieldNumber = this.state.number;
    let errors = {};
    let formIsValid = true;

    //Name
    if(fieldName === ""){
      formIsValid = false;
      errors["name"] = "Cannot be empty";
    }

    //Number
    if(fieldNumber === ""){
      formIsValid = false;
      errors["number"] = "Cannot be empty";
    }
   
    this.setState({errors: errors});
    return formIsValid;
  }


  render() {
    return (
      <div className="all">
        <div>
          <h1>Contact Form</h1>
          <fieldset>
          Name:<input id="name" ref="name" placeholder="name" value={this.state.name} onChange={this.handleChange} />
                <div className="error">{this.state.errors["name"]}</div>
          Number: <input className="numberInput" id="number" ref="number" placeholder="number" value={this.state.number} onChange={this.handleNumberChange} onKeyPress={this.handleKeyPress}/>
                  <div className="error">{this.state.errors["number"]}</div>
          <button className="addButton"onClick={this.addItem}>Add</button>
          </fieldset>
        </div>
        <AddItems entries={this.state.items} handleRemove={this.handleRemoveItem} handleEdit={this.handleEdit}/>
        {
        	this.state.showEdit &&
          <div className="editField">
       Name:<input id="edit-name" ref="name" placeholder="name" onChange={this.handleNameUpdate} value={this.state.editName} />
       <div className="error">{this.state.errors["edit-name"]}</div>
       Number: <input className="editNumberInput" placeholder="number" value={this.state.editNumber} onChange={this.handleNumberUpdate}/>
       <div id="edit-number" className="error">{this.state.errors["edit-number"]}</div>
       <button className="updateButton"onClick={this.handleUpdate}>Update</button>
          </div>
        }
        
      </div>
    );
  }
};


export default App;
