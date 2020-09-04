import React from 'react';
import Navbar from './Navbar';
import PaintingList from './PaintingList';
import Counter from './Counter';
import About from './About';
import Login from './Login';
import NoMatch from './NoMatch';
import Dashboard from './Dashboard';
import { Switch, Route } from 'react-router-dom'

const App = () => {
  return (
    <div className="App">
      <Navbar icon="paint brush" title="Painterest" description="out app" />
      <Switch>
        <Route path='/about' component={About} />
        <Route path='/login' component={Login} />
        <Route path='/dashboard/:username' component={Dashboard} />
        <Route exact path='/' component={PaintingList} />
        <Route path='*' component={NoMatch} />
      </Switch>
    </div>
  );
};

export default App;

























// const name = 'raza'


// switch (name) {
  // case 'seth';
    // console.log('hello seth', '------');
    // break'
  // case 'raza':
    // console.log('hello seth', '------');
    // break'
  // case 'eve':
    // console.log('hello seth', '------');
    // break'
// }



