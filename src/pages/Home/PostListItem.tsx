import { Avatar, ListItem, ListItemAvatar, ListItemText } from '@mui/material'
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
        logo
      }
    `,
    postRef
  )

  return (
    <ListItem key={post.id}>
      <ListItemAvatar>
        <Avatar alt={post.title} src={post.logo || undefined} />
      </ListItemAvatar>
      <ListItemText
        primary={post.title}
        secondary={post.body}
      />
    </ListItem>
  )
}
export default PostListItem
