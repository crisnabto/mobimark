import './App.css';
import Login from './pages/Login';
import { Route, Switch } from 'react-router-dom';
import Escolas from './pages/Escolas';

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
