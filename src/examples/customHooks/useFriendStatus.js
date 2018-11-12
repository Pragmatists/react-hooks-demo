import { useEffect, useState } from 'react'
import ChatAPI from '../ChatAPI'

function useFriendStatus (friendId) {
  const [isOnline, setIsOnline] = useState(null)

  function handleStatusChange (status) {
    setIsOnline(status.isOnline)
  }

  useEffect(() => {
    ChatAPI.subscribeToFriendStatus(friendId, handleStatusChange)
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(friendId, handleStatusChange)
    }
  }, [friendId])

  return isOnline
}

export default useFriendStatus
