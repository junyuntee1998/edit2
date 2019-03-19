import React, { Component } from 'react';

class AddItems extends Component {
  render() {
    var todoEntries = this.props.entries;
    var listItems = [];

    for (var i = 0; i < todoEntries.length; i++) {
      var entry = todoEntries[i];
      listItems.push(<li key={"item" + i}>
      {entry.name}:{entry.number}<button onClick={this.props.handleEdit.bind(this, entry.id)}>Edit</button><button onClick={this.props.handleRemove.bind(this, entry.id)}>Remove</button>
      </li>);
    }

    return (
      <ul className="theList">
        {listItems}
      </ul>
			
    );
  }
};

export default AddItems;