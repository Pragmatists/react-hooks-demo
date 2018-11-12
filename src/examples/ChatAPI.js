const randomStatus = () => ({
  isOnline: Boolean(Math.random() > 0.5)
})

var timer

const ChatAPI = {
  subscribeToFriendStatus: (friendId, onStatusChange) => {
    timer = setInterval(() => {
      onStatusChange(randomStatus())
    }, 500)
    console.log(`Subscribed to status change of ${friendId} `)
  },
  unsubscribeFromFriendStatus: (friendId, onStatusChange) => {
    clearInterval(timer)
    console.log(`Unsubscribed from status change of ${friendId} `)
  }
}

export default ChatAPI
