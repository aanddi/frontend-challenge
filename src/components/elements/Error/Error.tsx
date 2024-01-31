import { FC } from "react";
import styles from "./Error.module.scss";
import { IoLogoOctocat } from "react-icons/io5";

type MessageProps = {
   message?: string;
};

const ErrorMessage: FC<MessageProps> = ({ message = "Упс... Ошибка!" }) => {
   return (
      <div className={styles.error}>
         <div className={styles.error__image}>
            <IoLogoOctocat size={80} style={{color: '#2499EFFF'}}/>
         </div>
         <h1 className={styles.error__message}>{message}</h1>
      </div>
   );
};

export default ErrorMessage;
