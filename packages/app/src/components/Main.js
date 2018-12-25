import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home/Home';
import SignIn from './signIn/SignIn';
import CreateBoard from './createBoard/CreateBoard';


const Main = () => (
    <main>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/signin' component={SignIn}/>
        <Route exact path='/board' component={Home}/>
        <Route path='/board/create-board' component={CreateBoard}/>
        <Route path='/board/merge' component={Home}/>
        <Route path='board/point' component={Home}/>
        <Route path='board/actions' component={Home}/>
      </Switch>
    </main>
  );

  export default Main;