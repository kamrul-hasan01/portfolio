import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/HomeMain/Home/Home';
import ProjectHome from './Pages/ProjectsMain/ProjectHome/ProjectHome';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/projects">
            <ProjectHome />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
