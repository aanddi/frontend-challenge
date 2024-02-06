import { FC, PropsWithChildren } from 'react'
import styles from './GridRibbon.module.scss'

const GridRibbon: FC<PropsWithChildren> = ({children}) => {
  return (
  <section className={styles.ribbon}>
    {children}
  </section>
  )
}

export default GridRibbon