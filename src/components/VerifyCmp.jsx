import React, { Component } from 'react'
import {Route, withRouter} from 'react-router-dom'

import Storage from '@/utils/Storage'

class VerifyCmp extends Component {
  
  verifyRoute = () => {
    return Storage.get("islogin") ? true : false
  }
  render() {
    const Cmp = this.props.component
    return (
      <>
        { 
          this.verifyRoute() ? 
            <Route path={this.props.to} render={(router) => {
              return <Cmp {...router}></Cmp>
            }}></Route>
          :
            this.props.history.push("/login")
        }
      </>
    )
  }
}

export default withRouter(VerifyCmp)
