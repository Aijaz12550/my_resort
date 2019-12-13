import React from 'react';
import './App.css';
import Navigate from './Config/router'
import { RoomProvider } from './screens/context'

function App() {return <RoomProvider><Navigate/></RoomProvider>}

export default App;
