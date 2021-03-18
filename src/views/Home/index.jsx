import React, { Component } from 'react'
import { Route } from 'react-router-dom';
import Layout from '@/components/Layout';

import { navPath } from '@/config/path'
export default class index extends Component {
  render() {
    return (
      <Layout>
        {
          navPath.map((item) => <Route key={item.path} path={item.path} component={item.component}></Route>)
        }
        
      </Layout>
    )
  }
}
