import './App.css';
import Login from './pages/Login';
import { Route, Switch } from 'react-router-dom';
import Escolas from './pages/Escolas';
import Cadastrar from './pages/Cadastrar';
import Sobre from './pages/Sobre';
import protectedRoute from './services/protectedRoute';

function App() {
  return (
    <>
      <Switch>
          <Route path="/escolas" component={ protectedRoute(Escolas) }/>
          <Route path="/cadastrar" component={ protectedRoute(Cadastrar) }/>
          <Route path="/sobre" component={ protectedRoute(Sobre) }/>
          <Route exact path="/" component={ Login }/>
      </Switch>
    </>
  );
}

export default App;
