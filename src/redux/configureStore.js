import { createStore, applyMiddleware, compose } from "redux";
// not need to say /index that is implaied
// import rootReducer from './reducers/index'
import rootReducer from "./reducers";
// this will warn us if we accidentally mutate Redux state
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";

export default function configureStore(initialState) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add suport for Redux dev tools
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(reduxImmutableStateInvariant()))
  );
}
