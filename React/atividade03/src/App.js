import React, { useState } from 'react';
import List from './Components/List';
import ListItem from './Components/ListItem';


function App() {
  return (
    <div className="App">
       <h1>Aplicativo de Lista</h1>
       <List />
       <ListItem />
    </div>
  );
}

export default App;