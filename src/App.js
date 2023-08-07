import './App.css';

import Home from './pages/home'
import CreateBlog from './pages/create-blog'
import Layout from './components/Layout/Layout';

import { Switch, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <div className='app'>
      <Layout>
        <Switch>
          <Route exact path='/'><Redirect to="/home" /></Route>
          <Route exact path='/home'><Home /></Route>
          <Route exact path='/create-blog'><CreateBlog /></Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
