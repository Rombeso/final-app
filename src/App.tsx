import React from 'react';
import './App.css';
import {Header} from "./components/pages/Header/Header";
import {HashRouter} from "react-router-dom";
import {RoutesComp} from "./components/routes/routes";

function App() {
  return (
    <div className="App">
{/*HR, Prov*/}

        {/*<HashRouter>*/}
              <Header/>
              <RoutesComp/>

          {/*</HashRouter>*/}

    </div>
  );
}

export default App;
