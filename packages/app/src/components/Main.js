import React from 'react';
import { Switch, Route } from 'react-router-dom';
import BoardInterface from './boardInterface/BoardInterface';
import SignIn from './signIn/SignIn';


const Main = () => (
    <main>
      <Switch>
        <Route exact path='/' component={BoardInterface}/>
        <Route path='/signin' component={SignIn}/>
        <Route exact path='/board' component={BoardInterface}/>
        <Route path='/board/merge' component={BoardInterface}/>
        <Route path='board/point' component={BoardInterface}/>
        <Route path='board/actions' component={BoardInterface}/>
      </Switch>
    </main>
  );

  export default Main;