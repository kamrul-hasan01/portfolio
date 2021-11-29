import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/HomeMain/Home/Home';
import ProjectHome from './Pages/ProjectsMain/ProjectHome/ProjectHome';
import SingleProjectHome from './Pages/SingleProject/SingleProjectHome/SingleProjectHome';
import Blogs from './Pages/Blogs/Blogs';
import PageNotFound from './Pages/PageNotFound/PageNotFound';


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
          <Route path="/project/:id">
            <SingleProjectHome />
          </Route>
          <Route path="/blogs">
            <Blogs />
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
