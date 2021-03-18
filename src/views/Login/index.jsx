import React, { Component } from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import Title from '@/components/YvLoong';
import WithCopyright from '@/components/CopyRight'
import "./login.scss";
import 'antd/dist/antd.css';


import { get } from '@/api'
import Storage from '@/utils/Storage';



class index extends Component {
  constructor(props) {
    super(props)
    this.onFinish = this.onFinish.bind(this)
  }
  async onFinish(values) {
    let ret = await get("/mock/login.json")
    console.log(values);
    if(ret.data.code === 0) {
      Storage.set("islogin",ret.data.data.name);
      this.props.history.push("/home");
    } else {
      alert("您输入的账号密码有误,请重新输入!")
    }
  };
  render() {
    return (
      <>
       
        <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={this.onFinish}
      >   
        <div className="login-brand"/>
          <Title></Title>
          <span className="login-form-tips">用户名:</span>
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your Username!',
            },
          ]}
        >
         
        
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
        </Form.Item>
        <span className="login-form-tips">密码:</span>  
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}
        >
          
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="https://www.baidu.com">
            Forgot password
          </a>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          <hr/>
          Or <a href="https://www.baidu.com">register now!</a>
          <WithCopyright></WithCopyright>
        </Form.Item>
        
      </Form>
    </>
    )
  }
}

export default index
