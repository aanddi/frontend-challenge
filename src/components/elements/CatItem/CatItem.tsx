import { FC } from "react";
import styles from "./CatItem.module.scss";

import { ICat } from "types/cat.interface";

import { useTypedDispatch, useTypedSelector } from "hook/redux";
import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";
import { addFavorite, deleteFavorite } from "store/favorites.slice";
interface CatItem {
   cat: ICat;
}

const CatItem: FC<CatItem> = ({ cat }) => {
   const dispatch = useTypedDispatch();
   const { favorites } = useTypedSelector((state) => state.favorites);

   const isFavorite = favorites.some(
      (favoriteCat) => favoriteCat.id === cat.id
   );

   const addHandleButton = () => {
      dispatch(addFavorite(cat));
   };

   const deleteHandleButton = () => {
      dispatch(deleteFavorite(cat));
   };

   return (
      <>
         <div className={styles.card}>
            <img src={cat.url} alt="Котик" />

            {isFavorite ? (
               <button onClick={deleteHandleButton} className={styles.card__favorite}>
                  <IoHeartSharp style={{ color: "red" }} size={25} />
               </button>
            ) : (
               <button className={styles.card__favorite}>
                  <IoHeartOutline onClick={addHandleButton} size={25} />
               </button>
            )}
         </div>
      </>
   );
};

export default CatItem;
