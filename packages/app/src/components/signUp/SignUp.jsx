import React, { Component, Fragment } from 'react';
import { Modal, Divider } from 'antd';
import Login from './Login';
import SignIn from './SignIn';
import { ApplicationContext } from '../../context/ApplicationContext';
//import Actions from '../../context/Actions';

class SignUp extends Component {
  static contextType = ApplicationContext;

  render() {
    return (
      <div>
        <Modal
          visible={this.context.showLogin}
          onOk={this.handleOk}
          onCancel={this.props.modalCloseHandler}
          footer={null}
          bodyStyle={{ height: '500px' }}
        >
          <div>
            {this.context.showRegistration ? (
              <Fragment>
                <h1>Sign in</h1>
                <Divider />
                <SignIn />
              </Fragment>
            ) : (
              <Fragment>
                <h1>Login</h1> <Divider />
                <Login />
              </Fragment>
            )}
          </div>
        </Modal>
      </div>
    );
  }
}

export default SignUp;
