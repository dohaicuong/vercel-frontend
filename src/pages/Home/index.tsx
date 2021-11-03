import { Container, Paper } from '@mui/material'
import { Suspense } from 'react'
import { useLazyLoadQuery, graphql, PreloadedQuery, usePreloadedQuery } from 'react-relay'
import PostCreateForm from './PostCreateForm'
import PostList from './PostList'
import { HomeQuery as HomeQueryType } from './__generated__/HomeQuery.graphql'

export const HomeQuery = graphql`
  query HomeQuery {
    ...PostList_query
  }
`

type HomeProps = {
  homeQueryRef: PreloadedQuery<HomeQueryType>
}
const Home: React.FC<HomeProps> = ({ homeQueryRef }) => {
  const data = usePreloadedQuery<HomeQueryType>(HomeQuery, homeQueryRef)

  return (
    <Container maxWidth='sm' style={{ marginTop: 32 }}>
      <PostCreateForm />
      <Paper>
        <Suspense fallback='Loading posts...'>
          <PostList queryRef={data} />
        </Suspense>
      </Paper>
    </Container>
  )
}

type HomeSuspenseProps = {
  homeQueryRef: PreloadedQuery<HomeQueryType> | null | undefined
}
const HomeSuspense: React.FC<HomeSuspenseProps> = props => {
  if (!props.homeQueryRef) return null
  
  return (
    <Suspense fallback='Loading home page...'>
      <Home homeQueryRef={props.homeQueryRef} />
    </Suspense>
  )
}

export default HomeSuspense
