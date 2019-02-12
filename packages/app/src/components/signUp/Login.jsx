import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import './login.css';
import { ApplicationContext } from '../../context/ApplicationContext';
import Actions from '../../context/Actions';

class NormalLoginForm extends Component {
  static contextType = ApplicationContext;

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.context.dispatch(Actions.IS_USER_LOGGED_IN_UPDATE, {
          isUserLoggedIn: true
        });
        this.context.dispatch(Actions.SHOW_LOGIN_UPDATE, {
          showLogin: false,
          showRegistration: false
        });
      }
    });
  };

  showRegistrationForm = () => {
    this.context.dispatch(Actions.SHOW_REGISTRATION_UPDATE, {
      showRegistration: true
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="user-login">
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator('userName', {
              rules: [
                { required: true, message: 'Please input your username!' }
              ]
            })(
              <Input
                prefix={
                  <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder="Username"
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [
                { required: true, message: 'Please input your Password!' }
              ]
            })(
              <Input
                prefix={
                  <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                type="password"
                placeholder="Password"
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true
            })(<Checkbox>Remember me</Checkbox>)}
            <div className="login-form-forgot">Forgot password</div>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
            Or Don't have an account?{' '}
            <span
              style={{ cursor: 'pointer' }}
              onClick={() => this.showRegistrationForm()}
            >
              Sign Up
            </span>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

const LoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);

export default LoginForm;
