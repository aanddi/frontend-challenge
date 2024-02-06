import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { PrimeReactProvider } from 'primereact/api'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'

import './styles/global.scss'

import Favorites from 'src/components/screen/Favorites/Favorites'
import Home from 'src/components/screen/Home/Home'

import store, { persistor } from './store/store'

const queryClient = new QueryClient()

const router = createBrowserRouter([
   {
      path: '/',
      element: <Home />
   },
   {
      path: '/favorites',
      element: <Favorites />
   }
])

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
   <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
         <QueryClientProvider client={queryClient}>
            <PrimeReactProvider>
               <RouterProvider router={router} />
            </PrimeReactProvider>
         </QueryClientProvider>
      </PersistGate>
   </Provider>
)
