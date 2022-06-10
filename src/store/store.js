import {
    legacy_createStore,
    applyMiddleware,
    combineReducers,
    compose
} from "redux"
import thunk from "redux-thunk";
import { authReducer } from "./auth/auth.reducer";
import { feedRducer } from "./auth/feed/feed.reducer";


const rootReducer=combineReducers({
    auth: authReducer,
    feed: feedRducer,
});

export const store =legacy_createStore(rootReducer,applyMiddleware(thunk))