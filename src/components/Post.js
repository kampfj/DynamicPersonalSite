import React, { useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import PostForm from './AddPostForm'
import EditPostForm from './EditPostForm'

const Post = ({ post }) => {
  const [editPostMode, setEditPostMode] = useState(false)

  const editPostHelper = () => {
    console.log(editPostMode)
    setEditPostMode(true)
    console.log(editPostMode)
  }

  return (
    <Card bg="Light" style={{ width: '20rem', height: '20 rem' }}>
      <Card.Img variant="top" src={post.image} />
      <Card.Body>
        <Card.Title> Post #{post.id}: {post.title}</Card.Title>
        <Card.Text>
          {post.text}
        </Card.Text>
        <Button variant="outline-warning" onClick={editPostHelper}> Edit Post </Button>
        { editPostMode ? <EditPostForm post={post} editPostMode={editPostMode} setEditPostMode={setEditPostMode} /> : '' }
      </Card.Body>
    </Card>
  )
}

export default Post
