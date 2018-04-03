import React from 'react'
import { render } from 'react-dom'
import {hashHistory} from 'react-router'
import './static/css/common.less'
import Hello from './containers/Hello'
import App from './containers/App'
import RouteMap from './router/routeMap'

// class Hello extends React.Component {
//     render() {
//       let m = <p>hello world11111vadv</p>
//       let arr = ["sdfasdf","dsfasdf","adsfasdf"]
//         return (
//           <div>
//             {m}
//             <p style={{"fontSize":"50px","color":"red"}}  className="p1" onClick={this.onHandleClick.bind(this)}>hello world11111vadv</p>
//             <ul>
//               {arr.map((item, index)=>{
//                 return <li key={index}>{item}</li>
//               })}
//             </ul>
//             {
//               false?<p>true</p>:
//               <div>
//                 <p>dsfasd</p>
//                 <p>dsfasd</p>
//               </div>
//             }
//           </div>
//         )
//     }
//     onHandleClick(){
//       alert("asfasdf")
//     }
//
// }

render(
    <RouteMap history={hashHistory} />,
    document.getElementById('root')
)
