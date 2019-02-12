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
              style={{ padding: '0 50px', margin: '16px 0', height: '78vh' }}
            >
              <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                <Routes />
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              React Project Starter Pack
            </Footer>
          </Layout>
        </BrowserRouter>
      </ApplicationContextProvider>
    );
  }
}

export default App;
