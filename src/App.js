import React, { Component } from 'react';
import './App.css';
import Coders from './Coders';

class App extends Component {
    state = {
        location: 'Paris'
    }

    changeLocation = location => {
        this.setState({ location }, () =>
            console.log('show lo', this.state.location))
    };

    render() {
        return (
            <div className="app">
                <div className="main">
                    <header className="header">
                        <svg
                            className="logo"
                            alt="logo"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 100 100"
                            version="1.1">
                            <g className="group" transform="scale(.1,.1)">
                                <path
                                    className="out"
                                    strokeWidth="20"
                                    fill="none"
                                    strokeLinecap="round"
                                    d="M0,0,l500,288.6751,l0,577.3503,l-300,173.2051,l-200,-115.4701,l-200,115.4701,l-300,-173.2051,l0,-577.3503z"
                                />
                                <path
                                    className="in"
                                    strokeWidth="25"
                                    fill="none"
                                    strokeLinecap="round"
                                    d="M0,115.4701,l100,57.735,l0,461.8802,l100,57.735,l0,-461.8802,l200,115.4701,l0,461.8802,l-200,115.4701,l-200,-115.4701,l-200,115.4701,l-200,-115.4701,l0,-461.8802,l200,-115.4701,l0,461.8802,l100,-57.735,l0,-461.8802z"
                                />
                            </g>
                        </svg>
                    </header>
                    <div className="title">
                        HELLO CODERS in {this.state.location}!
                    </div>
                    <button onClick={() => this.changeLocation('Dublin')}>
                        Change location
                    </button>
                    <div className="coders">
                        <Coders location={this.state.location} />
                    </div>

                </div>
            </div>
        );
    }
}

export default App; //default 
