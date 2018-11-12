import React from 'react'
import ChatAPI from '../../ChatAPI'

class FriendStatusClass extends React.Component {
  constructor (props) {
    super(props)
    this.state = { isOnline: null }
    this.handleStatusChange = this.handleStatusChange.bind(this)
  }

  componentDidMount () {
    ChatAPI.subscribeToFriendStatus(
      this.props.friendId,
      this.handleStatusChange
    )
  }

  componentDidUpdate (prevProps) {
    // Unsubscribe from the previous friendId
    if (prevProps.friendId !== this.props.friendId) {
      ChatAPI.unsubscribeFromFriendStatus(
        prevProps.friendId,
        this.handleStatusChange
      )
      // Subscribe to the next friendId
      ChatAPI.subscribeToFriendStatus(
        this.props.friendId,
        this.handleStatusChange
      )
    }
  }

  componentWillUnmount () {
    ChatAPI.unsubscribeFromFriendStatus(
      this.props.friendId,
      this.handleStatusChange
    )
  }

  handleStatusChange (status) {
    this.setState({
      isOnline: status.isOnline
    })
  }

  render () {
    if (this.state.isOnline === null) {
      return 'Loading...'
    }
    return this.state.isOnline ? 'Online' : 'Offline'
  }
}

export default FriendStatusClass
