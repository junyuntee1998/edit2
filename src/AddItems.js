import React, { Component } from 'react';

class AddItems extends Component {
  render() {
    var todoEntries = this.props.entries;
   
    var table = [];
    for (var i = 0; i < todoEntries.length; i++) {
      var entry = todoEntries[i];
      table.push(<tr key={"item" + i}><td key={"item" + i}>
      {entry.name}
      </td>
      <td key={"item" + i}>
      {entry.number}
      </td><td key={"item" + i}><button onClick={this.props.handleEdit.bind(this, entry.id)}>Edit</button><button onClick={this.props.handleRemove.bind(this, entry.id)}>Remove</button></td>
      </tr>)
    }

    return (
      // <ul className="theList">
      //   {listItems}
      // </ul>
      <table>
        <tr>
          <th>Name</th>
          <th>Number</th>
        </tr>
        {table}
      </table>
    );
  }
};

export default AddItems;