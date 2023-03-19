import logo from './logo.svg';
import './App.css';
import Create from './Pages/Create'
import {Outlet} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Outlet/>
    </div>
  );
}

export default App;
