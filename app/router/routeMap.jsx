import React from 'react'
import {Router, Route, IndexRoute} from 'react-router'

import App from '../containers/App'
import Home from '../containers/Home'
import Detail from '../containers/Detail'
import List from '../containers/List'
import NotFound from '../containers/NotFound'

class RouteMap extends React.Component{

  updateHandle(){
    console.log('router 变化就触发');
    //统计pv
  }
  render(){
    return (
      <Router history={this.props.history} onUpdate={this.updateHandle.bind(this)}>
        <Route path='/' component={App}>
          <IndexRoute component={Home} />
          <Route path='list' component={List} />
          <Route path='detail/:id' component={Detail} />
          <Route path='*' component={NotFound} />
        </Route>
      </Router>
    )
  }
}

export default RouteMap