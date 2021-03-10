import { combineReducers } from 'redux'

import introduction from './introductionReducer'
import posts from './postReducer'

export default combineReducers({
  introduction, posts,
})
