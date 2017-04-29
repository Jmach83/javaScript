import React, { Component } from 'react';

class MusiciansPresenter extends Component {
    constructor(props) {
        super(props);

      let musicians   = [
      {id: 1, name: "James Hetfield", stars: 8},
      {id: 2, name: "Tina Turner", stars: 6},
      {id: 3, name: "Chris Martin", stars: 8},
      {id: 4, name: "Madonna", stars: 5},
      {id: 5, name: "Emmelie de Forest", stars: 1}  
        ]

     this.state = { 
         musicians,
        filterVal: -2
     };
    }

    onFilterChange = (evt) => {
        this.setState({filterVal: evt.target.value});
    }

    render() {
        const rows = this.state.musicians.filter(m => 
            m.stars > this.state.filterVal).map((m) =>
            <tr key={m.id}>
                <td>{m.id}</td>
                <td>{m.name}</td>
                <td>{m.stars}</td>
            </tr>
        );
        return (
            <div>
                <h3>Musicians</h3>
                Show musician with stars above: <input onChange={this.onFilterChange} /><br/>
                <table>
                  <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Stars</th>
                    </tr>
                  </thead>
                    <tbody>
                     {rows}
                    </tbody>
                </table>
            </div>
        );
        /*return (
            <div>
        <h1>Hej</h1>
         {console.log( this.state.musicians)}
         {console.log( this.props)}
        </div>
    );*/
    }

    
} 

export default MusiciansPresenter;