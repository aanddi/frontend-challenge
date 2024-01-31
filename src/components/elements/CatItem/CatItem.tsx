import { FC } from "react";
import { GoHeartFill } from "react-icons/go";
import styles from "./CatItem.module.scss";
interface CatItem {
   url: string;
}

const CatItem: FC<CatItem> = ({ url }) => {
   return (
      <>
         <div className={styles.card}>
            <img src={url} alt="Котик" />
            <button className={styles.card__favorite}>
               <GoHeartFill size={25} />
            </button>
         </div>
      </>
   );
};

export default CatItem;
