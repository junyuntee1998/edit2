import React, { Component } from 'react';
import _ from 'lodash';

class EditField extends Component {
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

handleUpdate = () => {
let items = this.state.items;
if ([this.state.editName]=="" || [this.state.editNumber]=="") {

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
    render() {
        return (
          <div className="editField">
          Name:<input id="edit-name" ref="name" placeholder="name" onChange={this.handleNameUpdate} value={this.state.editName} />
          <div className="error">{this.state.errors["edit-name"]}</div>
          Number: <input className="editNumberInput" placeholder="number" value={this.state.editNumber} onChange={this.handleNumberUpdate}/>
          <div id="edit-number" className="error">{this.state.errors["edit-number"]}</div>
          <button className="updateButton"onClick={this.handleUpdate}>Update</button>
             </div>
        )}   
    }

    export default EditField;