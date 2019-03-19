import React, { Component } from 'react';

class EditField extends Component {
    render() {
        const name = this.props.name;
        const number = this.props.number;
        return (
        <span>
           <input id="edit-name" ref="name" placeholder="name" onChange={this.props.handleChange.bind(this)} />
           <input placeholder="number" value={number} onChange={this.props.handleChange.bind(this)}/>
           <button>Update</button>
        </span>
        )}   
    }

    export default EditField;