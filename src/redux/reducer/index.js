import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router';
import { changeModalVisible} from './user'
const rootReducer = history => combineReducers({
    changeModalVisible,
    router: connectRouter(history)
})
export default rootReducer;
