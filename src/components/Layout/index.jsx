import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import sideNav from '@/config/nav';

import { Layout, Menu, Breadcrumb } from 'antd';
import "./style.scss"
import {
  DesktopOutlined,
  PieChartOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default class SiderNav extends Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              首页
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              首页2
            </Menu.Item>
            {
              sideNav.map((value)=> {
                let { subkey, icon, title, nav} = value;
                return (
                <SubMenu key={subkey} icon={icon} title={title}>
                  {
                    nav.map((item)=> {
                      let { key, to, ele } = item;
                      return <Menu.Item key={key}><Link to={to}>{ele}</Link></Menu.Item>
                    })
                  }
                </SubMenu>
                )
              })
            }
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
            </Breadcrumb>
            
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              
            {this.props.children}
            
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>yvLoong ©2021 Created by MaxLoong</Footer>
        </Layout>
      </Layout>
    );
  }
}