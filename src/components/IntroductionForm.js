import React, { useState } from 'react'
import { Button, Modal, Form } from 'react-bootstrap'
import { connect } from 'react-redux'
import { editIntroduction } from '../actions'

const IntroductionForm = props => {
  const { dispatchEditIntroduction, editIntroductionMode, setEditIntroductionMode } = props
  // name
  const [name, setName] = useState('')
  // image
  const [image, setImage] = useState('')
  // description
  const [description, setDescription] = useState('')

  /**
   * Remove the modal form and reset state.
   */
  const cancelHandler = () => {
    setEditIntroductionMode(false)
    setName('')
    setImage('')
    setDescription('')
  }

  /**
   * Remove the modal form and dispatch action to modify global store.
   */
  const submitIntroductionHelper = () => {
    setEditIntroductionMode(false)
    dispatchEditIntroduction(name, image, description)
  }
  return (
    // return form here
    <>
      <Modal show={editIntroductionMode} backdrop="static" keyboard="false">
        <Modal.Header>
          <Modal.Title>Introduce Yourself!</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control value={name} onChange={e => setName(e.target.value)} placeholder="Enter name" />
              <Form.Text className="text-muted">
                don't worry - we won't share your data with the world.
              </Form.Text>
            </Form.Group>
            <br />
            <Form.Group>
              <Form.Label>Image</Form.Label>
              <Form.Control value={image} onChange={e => setImage(e.target.value)} placeholder="Enter image URL" />
            </Form.Group>
            <br />
            <Form.Group>
              <Form.Label> Description </Form.Label>
              <Form.Control value={description} onChange={e => setDescription(e.target.value)} placeholder="Enter Description" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={cancelHandler}>Cancel</Button>
          <Button variant="outline-primary" onClick={submitIntroductionHelper}>Save changes</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

const mapDispatchToProps = dispatch => ({
  dispatchEditIntroduction:
    (name, image, description) => dispatch(editIntroduction(name, image, description)),
})

export default connect(null, mapDispatchToProps)(IntroductionForm)
