import { configureStore, combineReducers } from '@reduxjs/toolkit';
import loginReducer from './redux/reducers';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import history from './utils/history';


export const store = configureStore({
  reducer: combineReducers({
    loginReducer,
    router: connectRouter(history)
  }),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(routerMiddleware(history)),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
