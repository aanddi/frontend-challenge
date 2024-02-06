import { useInfiniteQuery } from '@tanstack/react-query'
import { Skeleton } from 'primereact/skeleton'
import React, { FC, useEffect, useState } from 'react'

import CatItem from 'src/components/elements/CatItem/CatItem'
import ErrorMessage from 'src/components/elements/Error/Error'
import GridRibbon from 'src/components/elements/GridRibbon/GridRibbon'

import { CatServices } from 'src/services/cat.services'

import Layout from '../../layout/Layout'

const Home: FC = () => {
   const [limit, setLimit] = useState(15)
   const [skeletonArray, setSkelettonArray] = useState(Array.from({ length: limit }))

   const { data, isFetching, isError, fetchNextPage } = useInfiniteQuery({
      queryKey: ['getCat'],
      queryFn: async ({ pageParam = 1 }) => {
         const response = await CatServices.getAllCat(pageParam, limit)
         return response
      },
      initialPageParam: 1,
      getNextPageParam: (lastpage, pageParam, nextPage) => {
         return nextPage + 1
      }
   })

   useEffect(() => {
      const handleScroll = () => {
         const bottom = Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight
         if (bottom) fetchNextPage()
      }

      window.addEventListener('scroll', handleScroll)

      return () => {
         window.removeEventListener('scroll', handleScroll)
      }
   }, [fetchNextPage])

   return (
      <Layout>
         {isError && <ErrorMessage message="Упс... Ошибка. Котики не найдены(" />}
         <GridRibbon>
            {data?.pages.map((group, i) => {
               return (
                  <React.Fragment key={i}>
                     {group.map(cat => (
                        <CatItem key={cat.id} cat={cat} />
                     ))}
                  </React.Fragment>
               )
            })}

            {isFetching &&
               skeletonArray.map((_, index) => {
                  return <Skeleton key={index} width="290px" height="290px" borderRadius="10px"></Skeleton>
               })}
         </GridRibbon>
      </Layout>
   )
}

export default Home
