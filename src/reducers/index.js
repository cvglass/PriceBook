import {combineReducers} from 'redux'

import {usersReducer} from './usersReducer';
import { storeReducer } from './storeReducer';
import {productReducer} from './productReducer'

export default rootReducer = combineReducers({usersReducer, storeReducer, productReducer})
