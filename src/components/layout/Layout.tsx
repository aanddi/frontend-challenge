import { ScrollTop } from 'primereact/scrolltop'
import { FC, PropsWithChildren } from 'react'

import Header from 'src/components/elements/Header/Header'

const Layout: FC<PropsWithChildren> = ({ children }) => {
   return (
      <>
         <Header />
         <main className="page">
            <div className="page__container">{children}</div>
            <ScrollTop icon="pi pi-arrow-up" className="scrolltop" />
         </main>
      </>
   )
}

export default Layout
