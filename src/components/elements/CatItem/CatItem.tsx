import { FC } from 'react'
import { useTypedDispatch, useTypedSelector } from 'src/hooks/redux'

import styles from './CatItem.module.scss'

import { addFavorite, deleteFavorite } from 'src/store/favorites.slice'

import { ICat } from 'src/types/cat.interface'

import { IoHeartOutline, IoHeartSharp } from 'react-icons/io5'

interface ICatItem {
   cat: ICat
}

const CatItem: FC<ICatItem> = ({ cat }) => {
   const dispatch = useTypedDispatch()
   const { favorites } = useTypedSelector(state => state.favorites)

   const isFavorite = favorites.some(favoriteCat => favoriteCat.id === cat.id)

   const addHandleButton = () => {
      dispatch(addFavorite(cat))
   }

   const deleteHandleButton = () => {
      dispatch(deleteFavorite(cat))
   }

   return (
      <>
         <div className={styles.card}>
            <img src={cat.url} alt="Котик" />

            {isFavorite ? (
               <button onClick={deleteHandleButton} className={styles.card__favorite}>
                  <IoHeartSharp style={{ color: 'red' }} size={25} />
               </button>
            ) : (
               <button className={styles.card__favorite}>
                  <IoHeartOutline onClick={addHandleButton} size={25} />
               </button>
            )}
         </div>
      </>
   )
}

export default CatItem
