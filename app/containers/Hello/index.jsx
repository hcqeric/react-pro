import React from 'react'

import Carousel from './subpage/Carousel'
import List from './subpage/List'
import Recommend from './subpage/Recommend'
import Header from '../../components/Header'

class Hello extends React.Component{
  constructor(props, states){
    super(props, states)

    this.state={
      now: Date.now()
    }
  }
  render(){
    let m = <p>hello world11111vadv</p>
    let arr = ["sdfasdf","dsfasdf","adsfasdf"]
    return (
      <div>
        <Header  title="title"></Header>
        <div>
          {m}
          <p style={{"fontSize":"50px","color":"red"}}  className="p1" onClick={this.onHandleClick.bind(this)}>hello world  {this.state.now}</p>
          <ul>
            {arr.map((item, index)=>{
              return <li key={index}>{item}</li>
            })}
          </ul>
          {
            false?<p>true</p>:
            <div>
              <p>dsfasd</p>
              <p>dsfasd</p>
            </div>
          }
        </div>
        <hr/>
        <Carousel/>
        <Recommend/>
        <List/>
      </div>
    )
  }

  onHandleClick(){
    this.setState({
      now:Date.now()
    })
  }
}

export default Hello;
