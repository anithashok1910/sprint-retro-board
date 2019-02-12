import React, { Component } from 'react';
import Routes from './components/Routes';
import { BrowserRouter } from 'react-router-dom';
import { Layout } from 'antd';
import NavBar from './components/navBar/NavBar';
import { ApplicationContextProvider } from './context/ApplicationContext';

import './App.css';
const { Content, Footer } = Layout;

class App extends Component {
  render() {
    return (
      <ApplicationContextProvider>
        <BrowserRouter>
          <Layout className="layout">
            <NavBar />
            <Content
            style={{ padding: '50px 20px 50px', height: '78vh',backgroundImage: 'linear-gradient(to bottom right, #002f4b, #dc4225)',opacity: '.8' }}
            >
              <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                <Routes />
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              Golden Maze
            </Footer>
          </Layout>
        </BrowserRouter>
      </ApplicationContextProvider>
    );
  }
}

export default App;
