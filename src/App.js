import React, { useState } from "react";
import './App.css';
import Coders from './Coders';

const App = (props) => {
    const [location, setLocation] = useState("Wrocław");

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(`Changed location to ${location}`)
    }
    return (
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
            <form onSubmit={handleSubmit}>
                <label>
                    City:
        <input
                        type="text"
                        value={location}
                        onChange={e => setLocation(e.target.value)}
                    />
                </label>
                <input type="submit" value="Submit" />
            </form>

            <div className="coders">
                <Coders location={this.location} />
            </div>
        </div>
    );
};

export default App;

