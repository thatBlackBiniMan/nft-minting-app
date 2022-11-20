import './App.css';
import {useState} from 'react';
import MainMint from './MainMint';
import Navbar from './Navbar';



function App() {

  const [accounts, setAccounts] = useState([]);
  return (
    <div className="App">
  <Navbar accounts={accounts} setAccounts={setAccounts}/>
  <MainMint accounts={accounts} setAccounts={setAccounts}/>    
      </div>
  );
}

export default App;
