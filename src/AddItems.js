import React, { Component } from 'react';

class AddItems extends Component {
  render() {
    var todoEntries = this.props.entries;
    var table = [];
    for (var i = 0; i < todoEntries.length; i++) {
      var entry = todoEntries[i];
      table.push(<tr className="row100 body" key={"item" + i}><td className="cell100 column1"key={"item" + i}>
      {entry.name}
      </td>
      <td className="cell100 column2">
      {entry.number}
      </td><td className="cell100 column3"><button className= "editButton" onClick={this.props.handleEdit.bind(this, entry.id)}>Edit</button><button onClick={this.props.handleRemove.bind(this, entry.id)}>Remove</button></td>
      </tr>)
    }

    return (
      <div className="wrap-table100">
        <div className="table100 ver1 m-b-110">
          <div className="table100-head">
            <table>
                <tr className="row100 head">
                  <th className="cell100 column1">Name</th>
                  <th className="cell100 column2">Number</th>
                  <th className="cell100 column3"></th>
                </tr>
          
            </table>
          </div>
          <div className="table100-body js-pscroll ps ps--active-y">
            <table>
              <tbody>
            {table}
            </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
};

export default AddItems;