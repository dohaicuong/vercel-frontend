import { Button, Paper, TextField } from '@mui/material'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useMutation, graphql } from 'react-relay'
import { useSnackbar } from 'notistack'
import { PostCreateFormMutation, PostCreateInput } from './__generated__/PostCreateFormMutation.graphql'

const PostCreateForm = () => {
  const [postCreateCommit, isCreating] = useMutation<PostCreateFormMutation>(graphql`
    mutation PostCreateFormMutation($input: PostCreateInput!, $connections: [ID!]!) {
      postCreate(input: $input) {
        post
        @appendNode(
          edgeTypeName: "PostEdge"
          connections: $connections
        )
        {
          ...PostListItem_post
        }
      }
    }
  `)
  
  const { enqueueSnackbar } = useSnackbar()
  const { register, handleSubmit, reset } = useForm<PostCreateInput>()
  const onSubmit: SubmitHandler<PostCreateInput> = data => postCreateCommit({
    variables: {
      input: data,
      connections: [
        'client:root:__PostList_query_posts_connection'
      ]
    },
    onCompleted: (res, errors) => {
      if(errors) return errors.forEach(error => enqueueSnackbar(error.message, { variant: 'error' }))

      reset()
    }
  })

  return (
    <Paper style={{ padding: 32, marginBottom: 32 }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label='Post title'
          {...register('title')}
          disabled={isCreating}
          fullWidth
          style={{ marginBottom: 24 }}
        />
        <TextField
          label='content'
          {...register('body')}
          disabled={isCreating}
          fullWidth
          style={{ marginBottom: 24 }}
        />
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button type='submit' variant='contained' disabled={isCreating}>
            Create Post
          </Button>
        </div>
      </form>
    </Paper>
  )
}
export default PostCreateForm
