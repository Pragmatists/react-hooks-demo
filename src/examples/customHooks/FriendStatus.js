import useFriendStatus from './useFriendStatus'

function FriendStatus(props) {
  const isOnline = useFriendStatus(props.friendId);

  if (isOnline === null) {
    return 'Loading...';
  }
  return isOnline ? 'Online' : 'Offline';
}

export default FriendStatus
