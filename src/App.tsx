import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import { Loader, NotFound } from './app/shared'
import { Construction } from './app/shared/construction'

// components
const HomeComponent = React.lazy(() => import('./app/features/home'))

const BookingComponent = React.lazy(() => import('./app/features/book'))
// nested booking components
const ResidentialMoveComponent = React.lazy(() => import('./app/features/book/residential_move'))
const CorporateMoveComponent = React.lazy(() => import('./app/features/book/corporate_move'))
const FreightMoveComponent = React.lazy(() => import('./app/features/book/freight_transport'))

const App = () => {
  return (
    <React.Suspense fallback={<Loader />}>
      <Routes>
        {/* <Route path='/' element={<Construction />} /> */}
        <Route path='/' element={<HomeComponent />} />
        <Route path='book' element={<BookingComponent />} />
        
        {/* fix this kludge */}
        <Route path='book/res_move' element={<ResidentialMoveComponent />} />
        <Route path='book/corp_move' element={<CorporateMoveComponent />} />
        <Route path='book/freight' element={<FreightMoveComponent />} />
        {/* fix this kludge end */}

        <Route path='*' element={<NotFound />}/>
      </Routes>

      <Outlet />
    </React.Suspense>
  )
}

export default App