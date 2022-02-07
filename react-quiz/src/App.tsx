import React, { useEffect, useState } from 'react';
import './App.css';

import { Greet } from './components/Greet';


const App = () => {
  const [name, setName] = useState('')
  const [login, setLogin] = useState(false)


  const greetUser = () => {
    setLogin(!login)
  }



  return (
    <div className="App">
      <input type='text' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)} />
      <Greet username={name} msgsRec={10} isLoggedIn={login} />

      <button onClick={greetUser}> {login ? 'Logout' : 'Login'} </button>


    </div>
  );
}

export default App;
