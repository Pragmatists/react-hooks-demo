import { useEffect, useState } from 'react'
import ChatAPI from '../../ChatAPI'

function FriendStatus (props) {
  const [isOnline, setIsOnline] = useState(null)

  function handleStatusChange (status) {
    setIsOnline(status.isOnline)
  }

  useEffect(() => {
    ChatAPI.subscribeToFriendStatus(props.friendId, handleStatusChange)
    // Specify how to clean up after this effect:
    return function cleanup () {
      ChatAPI.unsubscribeFromFriendStatus(props.friendId, handleStatusChange)
    }
  }, [props.friendId])

  if (isOnline === null) {
    return 'Loading...'
  }
  return isOnline ? 'Online' : 'Offline'
}

export default FriendStatus
