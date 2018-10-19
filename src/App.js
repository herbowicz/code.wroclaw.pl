import React, { Component } from 'react';
import './App.css';
import Coders from './Coders';
import Disqus from './Disqus';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="header">
          <svg className="logo" alt="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" version="1.1">
            <g className="group" transform="scale(.1,.1)" >
              <path className="out" strokeWidth="35" fill="none" strokeLinecap="round" d="M0,0,l500,288.6751,l0,577.3503,l-300,173.2051,l-200,-115.4701,l-200,115.4701,l-300,-173.2051,l0,-577.3503z" />
              <path className="in" strokeWidth="35" fill="none" strokeLinecap="round" d="M0,115.4701,l100,57.735,l0,461.8802,l100,57.735,l0,-461.8802,l200,115.4701,l0,461.8802,l-200,115.4701,l-200,-115.4701,l-200,115.4701,l-200,-115.4701,l0,-461.8802,l200,-115.4701,l0,461.8802,l100,-57.735,l0,-461.8802z" />
            </g>
          </svg>
        </header>

        <div className="coders">
          <Coders />
        </div>

        <div className="disqus">
          <Disqus />
        </div>
      </div>
    );
  }
}

export default App;
