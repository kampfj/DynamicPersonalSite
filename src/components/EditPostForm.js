import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Modal, Form, Button } from 'react-bootstrap'
import { editPost, deletePost } from '../actions'

const EditPostForm = props => {
  const { post, dispatchEditPost, dispatchDeletePost, editPostMode, setEditPostMode } = props
  console.log(post)
  const [text, setText] = useState(post.text)
  const [title, setTitle] = useState(post.title)
  const [image, setImage] = useState(post.image)

  const cancelHandler = () => {
    setEditPostMode(false)
    setText('')
    setTitle('')
    setImage('')
  }

  const editPostHandler = () => {
    dispatchEditPost(text, title, image, post.id)
    setEditPostMode(false)
  }

  const deletePostHandler = () => {
    dispatchDeletePost(post.id)
    setEditPostMode(false)
  }

  return (
    <Modal show={editPostMode} backdrop="static" keyboard="false">
      <Modal.Header>
        <Modal.Title>Edit your post</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control value={title} onChange={e => setTitle(e.target.value)} placeholder="Enter post title" />
            <Form.Text className="text-muted">
              do the fans want something different?
            </Form.Text>
          </Form.Group>
          <br />
          <Form.Group>
            <Form.Label>Image</Form.Label>
            <Form.Control value={image} onChange={e => setImage(e.target.value)} placeholder="Enter image URL" />
          </Form.Group>
          <br />
          <Form.Group>
            <Form.Label> Post </Form.Label>
            <Form.Control value={text} onChange={e => setText(e.target.value)} placeholder="Post goes here" />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-secondary" onClick={cancelHandler}>Cancel</Button>
        <Button variant="danger" onClick={deletePostHandler}> Delete </Button>
        <Button variant="outline-primary" onClick={editPostHandler}>Add Post</Button>
      </Modal.Footer>
    </Modal>
  )
}

const mapDispatchToProps = dispatch => ({
  dispatchEditPost:
    (text, title, image, id) => dispatch(editPost(text, title, image, id)),
  dispatchDeletePost: id => dispatch(deletePost(id))
})

export default connect(null, mapDispatchToProps)(EditPostForm)