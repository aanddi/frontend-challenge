import { FC } from 'react'
import { useTypedSelector } from 'src/hooks/redux'

import CatItem from 'src/components/elements/CatItem/CatItem'
import ErrorMessage from 'src/components/elements/Error/Error'
import GridRibbon from 'src/components/elements/GridRibbon/GridRibbon'
import Layout from 'src/components/layout/Layout'

const Favorites: FC = () => {
   const { favorites } = useTypedSelector(state => state.favorites)

   return (
      <Layout>
         <GridRibbon>
            {favorites.map(cat => {
               return <CatItem cat={cat} key={cat.id} />
            })}
         </GridRibbon>

         {favorites.length === 0 && <ErrorMessage message="Вы не добавляли котиков в избранное" />}
      </Layout>
   )
}

export default Favorites
