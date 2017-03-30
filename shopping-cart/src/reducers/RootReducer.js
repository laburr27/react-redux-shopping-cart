import cart from './CartReducers'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  cart: cart
})

export default rootReducer
