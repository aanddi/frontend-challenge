import { createSlice } from '@reduxjs/toolkit'

import { ICat } from 'src/types/cat.interface'

interface IFavoritesState {
   favorites: ICat[]
}

const initialState: IFavoritesState = {
   favorites: []
}

const favoritesSlice = createSlice({
   name: 'favorites',
   initialState,

   reducers: {
      addFavorite(state, action) {
         state.favorites.push({
            id: action.payload.id,
            url: action.payload.url
         })
      },

      deleteFavorite(state, action) {
         state.favorites = state.favorites.filter(favorite => favorite.id !== action.payload.id)
      }
   }
})

export const { addFavorite, deleteFavorite } = favoritesSlice.actions

export default favoritesSlice.reducer
