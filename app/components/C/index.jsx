import React from 'react'

class C extends React.Component{
  render(){
    return (
      <div>
        <button onClick={this.clickHandler.bind(this)}>修改</button>
      </div>
    )
  }

  clickHandler(){
    const actions = this.props.actions
    actions.login({
      userid:'123',
      city:'nanjing'
    })
  }

}
export default C;
