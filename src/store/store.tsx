import { createStore, applyMiddleware, compose } from "redux";
import ReduxThunk from 'redux-thunk'
import { rootReducer } from "./reducers";
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from "redux-logger";



export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(ReduxThunk, logger )))

export type RootState = ReturnType<typeof store.getState>;

 