import React from 'react'

class CounterClass extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  render () {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    )
  }
}

export default CounterClass
