import './App.css';
import Login from './pages/Login';
import { Route, Switch } from 'react-router-dom';
import Escolas from './pages/Escolas';
import protectedRoute from './services/protectedRoute';

function App() {
  return (
    <>
      <Switch>
          <Route path="/escolas" component={ protectedRoute(Escolas) }/>
          <Route exact path="/" component={ Login }/>
      </Switch>
    </>
  );
}

export default App;
