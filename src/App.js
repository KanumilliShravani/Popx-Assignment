import {BrowserRouter,Switch,Route} from 'react-router-dom'

import Login from './components/Login'

import Welcome from './components/Welcome'

import SignUP from './components/SignUP'

import Profile from './components/Profile'

import './App.css';


const App = () => {
  return (
    <BrowserRouter>
    <Switch>
    <Route exact path ="/" component={Welcome} />
    <Route exact path = "/login" component={Login} />
    <Route exact path ="/signup" component={SignUP}  />
    <Route exact path = "/profile" component={Profile}/>
    </Switch>
    </BrowserRouter>
  )
}


export default App;
