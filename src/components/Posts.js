import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Button, Card, CardDeck, CardGroup, Container, Row, Col } from 'react-bootstrap'
import { PaddedDiv } from '../styles/styledComps'
import AddPostForm from './AddPostForm'
import Post from './Post'

const Posts = ({ posts }) => {
  const [addPostMode, setAddPostMode] = useState(false)
  let count = 0

  const addPostHelper = () => {
    setAddPostMode(true)
  }

  const getCount = () => {
    count += 1
    return count
  }

  return (
    <PaddedDiv>
      <Container>
        <Row>
          <h2> Welcome to my World. </h2>
          <Col />
          <Col />
          <Col />
          <Col> &nbsp; &nbsp; &nbsp; &nbsp;
            <Button
              variant="outline-primary"
              type="button"
              data-toggle="modal"
              data-target="#postModal"
              onClick={addPostHelper}
            >
              Add Post
            </Button>
          </Col>
        </Row>
        <PaddedDiv>
          <CardGroup>
            {posts.map(post => <Col xs={3} key={getCount()}><Post key={getCount()} post={post} /> </Col>)}
          </CardGroup>
        </PaddedDiv>
        { addPostMode ? <AddPostForm addPostMode={addPostMode} setAddPostMode={setAddPostMode} /> : ''}
      </Container>
    </PaddedDiv>
  )
}

const mapStateToProps = state => ({
  posts: state.posts,
})

export default connect(mapStateToProps)(Posts)
