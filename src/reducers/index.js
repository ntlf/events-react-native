import { combineReducers } from 'redux'
import eventsByDate from './eventsByDate'
import nav from './nav'

const rootReducer = combineReducers({
  eventsByDate,
  nav
})

export default rootReducer