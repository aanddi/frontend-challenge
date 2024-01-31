import { FC } from "react";
import styles from "./Favorites.module.scss";
import Layout from "components/layout/Layout";

const Favorites: FC = () => {
   return (
      <Layout>
         <div className={styles.favorites}>
            <div className={styles.favorites__cards}></div>
         </div>
      </Layout>
   );
};

export default Favorites;
