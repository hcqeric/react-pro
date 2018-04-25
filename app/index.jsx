import React from 'react'
import { render } from 'react-dom'
import {Provider} from 'react-redux'
import configureStore from './store/configureStore'

import './static/css/common.less'

import Hello from './containers/Hello'

import {getData, postData} from './fetch/test'
// class Hello extends React.Component {
//     render() {
//         return (
//             <p>hello world11111vadv</p>
//         )
//     }
// }

getData()
postData()
const store = configureStore()
render(
    <Provider store = {store}>
      <Hello/>
    </Provider>,
    document.getElementById('root')
)
