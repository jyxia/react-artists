import { DISMISS_MESSAGE, SEND_MESSAGE } from '../actions'

export default function message(state = '', action) {
  switch (action.type) {
  case DISMISS_MESSAGE:
    return ''
  case SEND_MESSAGE:
    return action.message
  default:
    return state
  }
}
