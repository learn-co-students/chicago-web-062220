
export default function auth(state=null, action) {
  switch(action.type) {
    case 'LOGIN_SUCCESS':
      return action.user
    case 'LOGOUT_SUCCESS':
      return null
    default:
      return state
  }
}
