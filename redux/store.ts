
import { configureStore } from '@reduxjs/toolkit';
import postReducer from "./services/getPost";
import homeReducer from "./features/GlobalSlice";
import { postsApi } from '@/redux/services/api';
import selecReducer from "./features/SelecSlice"
import favoriteReducer from "./features/Favorite"
import userReducer from "./features/UserSlice";
import { favoritesApi } from './services/favorite';
import { setupListeners } from '@reduxjs/toolkit/query';
import scoresReducer from './features/ScoreSlice';

export const store = configureStore({
    reducer: {
      posteo: postReducer,
      home: homeReducer,
      selec: selecReducer,
      user: userReducer,
      favorites: favoriteReducer,
      scores: scoresReducer,
      [postsApi.reducerPath]: postsApi.reducer, 
      favoritesApi: favoritesApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postsApi.middleware, favoritesApi.middleware),
});

setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
