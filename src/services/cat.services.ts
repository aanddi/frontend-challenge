import { instance } from 'src/api/api.instanse'

import { ICat } from 'src/types/cat.interface'

export const CatServices = {
   async getAllCat(page: number, limit: number) {
      
      const queryParams = {
         limit: limit,
         page: page,
         order: 'asc'
      }
      
      const response = await instance<ICat[]>({
         url: `images/search`,
         method: 'GET',
         params: queryParams
      })

      return response.data
   }
}
