import { combineReducers } from 'redux'

import user from './user'
import cluster from './specifyCluster'

export default combineReducers({
    user,
    cluster
})