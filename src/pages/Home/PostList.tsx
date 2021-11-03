import { List, ListItem } from '@mui/material'
import { useCallback } from 'react'
import { usePaginationFragment, graphql } from 'react-relay'
import PostListItem from './PostListItem'
import { PostListPaginationQuery } from './__generated__/PostListPaginationQuery.graphql'
import { PostList_query$key } from './__generated__/PostList_query.graphql'

type PostListProps = {
  queryRef: PostList_query$key
}
const PostList: React.FC<PostListProps> = ({ queryRef }) => {
  const {
    data,
    loadNext, hasNext, isLoadingNext,
  } = usePaginationFragment<PostListPaginationQuery, PostList_query$key>(
    graphql`
      fragment PostList_query on Query
      @refetchable(queryName: "PostListPaginationQuery")
      @argumentDefinitions(
        count: { type: "Int!", defaultValue: 10 }
        cursor: { type: "String" }
      )
      {
        posts(first: $count, after: $cursor)
        @connection(key: "PostList_query_posts")
        {
          edges {
            node {
              id
              ...PostListItem_post
            }
          }
        }
      }
    `,
    queryRef
  )
  const loadMorePost = useCallback(() => loadNext(10), [loadNext])

  return (
    <List>
      {data.posts.edges.map(({ node }) => <PostListItem key={node.id} postRef={node} />)}
      {hasNext && !isLoadingNext && (
        <ListItem button onClick={loadMorePost}>
          <p style={{ textAlign: 'center', width: '100%' }}>
            Load more
          </p>
        </ListItem>
      )}
      {isLoadingNext && (
        <ListItem disabled>
          <p style={{ textAlign: 'center', width: '100%' }}>
            Loading....
          </p>
        </ListItem>
      )}
    </List>
  )
}
export default PostList
