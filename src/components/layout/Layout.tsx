import { FC, PropsWithChildren } from "react";

import Header from "../elements/Header/Header";
import { ScrollTop } from "primereact/scrolltop";

const Layout: FC<PropsWithChildren> = ({ children }) => {
   return (
      <>
         <Header />
         <main className="page">
            <div className="page__container">{children}</div>
            <ScrollTop icon="pi pi-arrow-up" className="scrolltop"/>
         </main>
      </>
   );
};

export default Layout;
