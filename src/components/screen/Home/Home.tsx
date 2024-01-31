import { useInfiniteQuery } from "@tanstack/react-query";
import { FC, useEffect, useState } from "react";
import { CatServices } from "services/cat.services";
import Layout from "../../layout/Layout";
import styles from "./Home.module.scss";

import CatItem from "components/elements/CatItem/CatItem";
import ErrorMessage from "components/elements/Error/Error";
import { Skeleton } from "primereact/skeleton";
import React from "react";

const Home: FC = () => {
   const [limit, setLimit] = useState(15);

   const [skeletonArray, setSkelettonArray] = useState(
      Array.from({ length: limit })
   );

   const { data, isFetching, isError, fetchNextPage } = useInfiniteQuery({
      queryKey: ["getCat"],
      queryFn: async ({ pageParam = 1 }) => {
         const response = await CatServices.getAllCat(pageParam, limit);
         return response;
      },
      initialPageParam: 1,
      getNextPageParam: (lastpage, pageParam, nextPage) => {
         return nextPage + 1;
      },
   });

   useEffect(() => {
      const handleScroll = () => {
         const bottom =
            Math.ceil(window.innerHeight + window.scrollY) >=
            document.documentElement.scrollHeight;

         if (bottom) fetchNextPage();
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
         window.removeEventListener("scroll", handleScroll);
      };
   }, [isFetching]);

   console.log(data);

   return (
      <Layout>
         <div className={styles.home}>
            {isError && (
               <ErrorMessage message="Упс... Ошибка. Котики не найдены(" />
            )}
            <section className={styles.home__cards}>
               {data?.pages.map((group, i) => {
                  return (
                     <React.Fragment key={i}>
                        {group.map(({ url, id }) => (
                           <CatItem key={id} url={url} />
                        ))}
                     </React.Fragment>
                  );
               })}

               {isFetching &&
                  skeletonArray.map((_, index) => {
                     return (
                        <Skeleton
                           key={index}
                           width="290px"
                           height="290px"
                           borderRadius="10px"
                        ></Skeleton>
                     );
                  })}
            </section>
         </div>
      </Layout>
   );
};

export default Home;
