import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from 'redux-persist'
import userReducer from './user/userSlice'
import albumsReducer from './albums/albumsSlice'
import cartReducer from './cart/cartSlice'
import categoriesReducer from './categories/categoriesSlice'
import previewPlayerReducer from './previewPlayer/previewPlayerSlice'
import artistReducer from './artist/artistSlice'
import ordersReducer from './orders/ordersSlice'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'

const rootReducer = combineReducers({
  user: userReducer,
  albums: albumsReducer,
  categories: categoriesReducer,
  cart: cartReducer,
  previewPlayer: previewPlayerReducer,
  artist: artistReducer,
  orders: ordersReducer
})

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user', 'cart', 'previewPlayer', 'artist', 'orders'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)
