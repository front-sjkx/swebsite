import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createRootReducer from './reducer/index';

export const history = createBrowserHistory();

export default function configureStore(preloadState) {
    const composeEnhancer = 
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;//调试工具框架
    const store = createStore(
        createRootReducer(history), 
        preloadState, 
        composeEnhancer(applyMiddleware(routerMiddleware(history)))
        );
    //hot reloading
    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('./reducer', () => {
            store.replaceReducer(createRootReducer(history));
        });
    }
    return store;


}