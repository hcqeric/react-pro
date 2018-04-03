import React from 'react'
import {hashHistory} from 'react-router'

class List extends React.Component{
  render(){
    var arr = [1,2,3]
    return (
      <div>
        {arr.map((item, index)=>{
          return <p key={index} onClick={this.handleClick.bind(this, item)}>to detail {item}</p>
        })}
      </div>
    )
  }
  handleClick(pos){
    hashHistory.push('/detail/' + pos);
  }
}
export default List
