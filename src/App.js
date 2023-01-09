import './App.css';
import Login from './components/Login';
import { Route, Switch } from 'react-router-dom';
import Escolas from './components/Escolas';

function App() {
  return (
    <>
      <Switch>
          <Route path="/escolas" component={ Escolas }/>
          <Route exact path="/" component={ Login }/>
      </Switch>
    </>
  );
}

export default App;
