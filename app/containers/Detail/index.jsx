import React from 'react'
import hashHistory from 'react-router'
class Detail extends React.Component{
  render(){
    return (
      <div>
        detail  {this.props.params.id}
      </div>
    )
  }
}
export default Detail
