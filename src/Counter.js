import React, {Component} from 'react'
import { ThemeContext } from './App'
// this.props any attribute passed
// super props: props areset properly when the user overwrites the constructor
// every className has a this.setState(asynchronous function)
export default class Counter extends Component{
    constructor(props){
      super(props)
      this.state = {
        count: props.initialCount // in this case is 10
      }
    }
    render(){
      console.log("Render counter")
    return(
      <ThemeContext.Consumer>
        {style => (
        <div>
          <button style={style} onClick={() => this.changeCount(-1)}>-</button>
          <span>{this.state.count}</span>
          <button style={style} onClick={() => this.changeCount(1)}>+</button>
        </div>
        )}
      </ThemeContext.Consumer>
    
  
        )
    }
    changeCount(amount){
      // to call the function twice due to prevState
      // this.setState renders the component and any child inside it
      this.setState(prevState => {
       return {count: prevState.count + amount}
      })    
      /*this.setState(prevState => {
      return {count: prevState.count + amount}
    })   */
       
       // this.state{count: this.state.count + amount}
  }
}