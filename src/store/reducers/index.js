import { combineReducers } from 'redux'
import userReducer from "./user"
import contactReducer from "./contact"
import conversationReducer from "./conversation"

const rootReducer = combineReducers({
  user: userReducer,
  contacts: contactReducer,
  conversations: conversationReducer
})

export default rootReducer