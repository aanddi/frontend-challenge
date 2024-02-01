import CatItem from "components/elements/CatItem/CatItem";
import ErrorMessage from "components/elements/Error/Error";
import Layout from "components/layout/Layout";
import { useTypedSelector } from "hook/redux";
import { FC } from "react";
import styles from "./Favorites.module.scss";

const Favorites: FC = () => {
   const { favorites } = useTypedSelector((state) => state.favorites);

   return (
      <Layout>
         <div className={styles.favorites}>
            <div className={styles.favorites__cards}>
               {favorites.map((cat) => {
                  return <CatItem cat={cat} key={cat.id}/>;
               })}
            </div>
         </div>
         {favorites.length === 0 && (
            <ErrorMessage message="Вы не добавляли котиков в избранное" />
         )}
      </Layout>
   );
};

export default Favorites;
