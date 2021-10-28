import React from 'react';
import styled from 'styled-components';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import Home from './pages/Home';
import Cart from './pages/CartPage';
import NotFound from './pages/NotFound';
import SingleItem from './pages/SingleItem';
import { Header } from './components';

function App() {
  return (
    <Router>
      <Main>
        <Header/>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/cart" component={Cart}></Route>
          <Route path="/goods/:id" component={SingleItem}></Route>
          <Route path="*" component={NotFound}></Route>
        </Switch>
      </Main>
    </Router>
  );
}

export default App;

const Main = styled.main `
display: grid;
grid-template-rows: 70px 1fr;
min-height: 100vh;
`
