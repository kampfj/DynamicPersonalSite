import React, { useState } from 'react'
import { Button, Modal, Form } from 'react-bootstrap'
import { connect } from 'react-redux'
import { addPost, editIntroduction } from '../actions'

const AddPostForm = props => {
  const { dispatchAddPost, dispatchEditPost, addPostMode, setAddPostMode } = props
  const [text, setText] = useState('')
  const [title, setTitle] = useState('')
  const [image, setImage] = useState('')

  const cancelHandler = () => {
    setAddPostMode(false)
    setText('')
    setTitle('')
    setImage('')
  }

  const submitPostHelper = () => {
    dispatchAddPost(text, title, image)
    setAddPostMode(false)
  }

  return (
    <Modal show={addPostMode} backdrop="static" keyboard="false">
      <Modal.Header>
        <Modal.Title>Write a new post</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control value={title} onChange={e => setTitle(e.target.value)} placeholder="Enter post title" />
            <Form.Text className="text-muted">
              give the fans what they want
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
        <Button variant="outline-primary" onClick={submitPostHelper}>Add Post</Button>
      </Modal.Footer>
    </Modal>
  )
}

const mapDispatchToProps = dispatch => ({
  dispatchAddPost:
    (text, title, image) => dispatch(addPost(text, title, image)),
})

export default connect(null, mapDispatchToProps)(AddPostForm)
