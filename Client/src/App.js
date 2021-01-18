import React from 'react';
import AppRouter from '../src/components/AppRouter/AppRouter';
import PagesContextProvider from '../src/contexts/PagesContext';
import UserContextProvider from '../src/contexts/UserContext';
import reset from "./styled";
import { createGlobalStyle } from 'styled-components';
import {BrowserRouter as Router} from "react-router-dom";
import Navbar from '../src/components/Navbar';

const GlobalStyle = createGlobalStyle`
  ${reset}
`;

const App = () => {
    return (
      <React.Fragment>
        <GlobalStyle/>
        <PagesContextProvider>
          <UserContextProvider>
            <Router>
              <Navbar/>
              <AppRouter/>
            </Router>
          </UserContextProvider>
        </PagesContextProvider>
      </React.Fragment>
    );
  };

export default App;
