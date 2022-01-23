import logo from './logo.svg';
import './App.css';
import Login from '../src/componants/Login'
import { BrowserRouter,Route , Switch } from 'react-router-dom';
import Homepage from "../src/componants/Homepage";

function App() {
  return (
    <>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={() =>{return <h1>Hello World</h1> } }/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/homepage" component={Homepage}/>
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
