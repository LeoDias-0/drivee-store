import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import TopBar from './components/utils/TopBar';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <TopBar />
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
