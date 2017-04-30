import React, { Component } from 'react';
import { render } from 'react-dom';
import { Header } from './app/components/Header';
import { Home} from './app/components/Home';

class App extends Component {
    render () {

        var user = {
            name: 'anna',
            hobbies: ['sports', 'cooking']
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header/>   
                    </div>
                </div>                
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Home user={user} />   
                    </div>
                </div>                
            </div>
        );
    }
}

render(<App/>, document.getElementById('app'));