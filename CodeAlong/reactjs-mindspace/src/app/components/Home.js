import React, { Component } from 'react';

export class Home extends Component {
    render() {
        this.state = { user: this.props.user}
        return(
            <div>
                <p>In a new Component!</p>
                {this.state.user.name}                
                {this.state.user.hobbies}
                <div>
                    <h4>Hobbies</h4>
                    <ul>
                        {this.props.user.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}
                    </ul>
                </div>                
            </div>
        );
    }
}