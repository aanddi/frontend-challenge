import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import favoritesReducer from './favorites.slice'

const rootReduser = combineReducers({
   favorites: favoritesReducer
})

const persistConfig = {
   key: 'favorites',
   storage
}

const persistedReducer = persistReducer(persistConfig, rootReduser)

export const setupStore = () => {
   return configureStore({
      reducer: persistedReducer,
      middleware: getDefaultMiddleware =>
         getDefaultMiddleware({
            serializableCheck: {
               ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
            }
         })
   })
}

export type TypeRootState = ReturnType<typeof rootReduser>
export type AppStore = ReturnType<typeof setupStore>
export type AppDuspatch = AppStore['dispatch']

const store = setupStore()
export default store

export const persistor = persistStore(store)
