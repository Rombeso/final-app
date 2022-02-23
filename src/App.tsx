import React from 'react';
import './App.css';
import {Header} from "./components/pages/Header/Header";
import {RoutesComp} from "./components/routes/routes";
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
    <div className="App">
        {/*<HashRouter>*/}

              <Header/>
              <RoutesComp/>

          {/*</HashRouter>*/}
    </div>
  );
}

export default App;
