import { lazy, useEffect } from 'react'
import { useQueryLoader } from 'react-relay'
import { Routes, Route } from 'react-router-dom'

import { HomeQuery } from '@/pages/Home'
import { HomeQuery as HomeQueryType } from '@/pages/Home/__generated__/HomeQuery.graphql'

const Home = lazy(() => import('@/pages/Home'))
const NotFound = lazy(() => import('@/pages/NotFound'))

const RouteProvider = () => {
  const [homeQueryRef, loadHomeQuery, disposeHomeQuery] = useQueryLoader<HomeQueryType>(HomeQuery)
  useEffect(() => {
    loadHomeQuery({})
    return () => {
      disposeHomeQuery();
    }
  }, [loadHomeQuery, disposeHomeQuery])

  return (
    <Routes>
      <Route
        path='/'
        element={<Home homeQueryRef={homeQueryRef} />}
      />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default RouteProvider
