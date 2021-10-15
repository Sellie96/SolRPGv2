import React from "react";
import "./App.css";
import UserInterface from "./components/UI/MainUIElements/userinterface";
import 'react-pro-sidebar/dist/css/styles.css';
import 'react-tippy/dist/tippy.css';

function App() {
    return (
        <div className="App">
            <main><UserInterface/></main>
        </div>
    );
}

export default App;
