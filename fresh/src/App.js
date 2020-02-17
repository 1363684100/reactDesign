import React from 'react';
import './App.css';
import {HashRouter} from 'react-router-dom'
// import Rnav from './components/Rnav/Rnav'
import RouterMap from './router/router'
import Rtab from './components/Rtab/Rtab'
function App() {
  return (
    <HashRouter>
     {/* <Rnav></Rnav> */}
     <RouterMap></RouterMap>
     <Rtab></Rtab>
    </HashRouter>
  );
}

export default App;
