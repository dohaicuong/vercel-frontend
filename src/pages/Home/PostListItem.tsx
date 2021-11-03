import { ListItem, ListItemText } from '@mui/material'
import { useFragment, graphql } from 'react-relay'
import { PostListItem_post$key } from './__generated__/PostListItem_post.graphql'

type PostListItemProps = {
  postRef: PostListItem_post$key
}
const PostListItem: React.FC<PostListItemProps> = ({ postRef }) => {
  const post = useFragment(
    graphql`
      fragment PostListItem_post on Post {
        id
        title
        body
      }
    `,
    postRef
  )

  return (
    <ListItem key={post.id}>
      <ListItemText
        primary={post.title}
        secondary={post.body}
      />
    </ListItem>
  )
}
export default PostListItem
