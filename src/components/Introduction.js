import React, { useState } from 'react'
import { Container, Card, Button, Row, Col, Image } from 'react-bootstrap'
import { connect } from 'react-redux'
import IntroductionForm from './IntroductionForm'
import { PaddedDiv } from '../styles/styledComps'

const Introduction = ({ introduction }) => {
  // clicked EditDescription
  const [editIntroductionMode, setEditIntroductionMode] = useState(false)
  const { name, image, description } = introduction

  const editIntroduction = () => {
    setEditIntroductionMode(true)
  }

  return (
    <>
      <PaddedDiv className="container">
        <div className="row">
          <div className="col">
            <h1> Hey, this is me! </h1>
          </div>
          <div className="col" />
          <div className="col" />
          <div className="col">
            <Button
              variant="outline-primary"
              type="button"
              data-toggle="modal"
              data-target="#introductionModal"
              onClick={editIntroduction}
            >
              Edit Introduction
            </Button>
          </div>
        </div>
        { editIntroductionMode ? <IntroductionForm editIntroductionMode={editIntroductionMode} setEditIntroductionMode={setEditIntroductionMode} /> : ''}
      </PaddedDiv>
      <PaddedDiv>
        {name !== undefined
        && (
          <Container>
            <Row>
              <Col>
                <Card style={{ width: '20rem', height: '20 rem' }}>
                  <Card.Img variant="top" src={image} />
                  <Card.Body>
                    <Card.Title>Hey - I'm {name}</Card.Title>
                    <Card.Text>
                      {description}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        )}
      </PaddedDiv>
    </>
  )
}

const mapStateToProps = state => ({
  introduction: state.introduction,
})

export default connect(mapStateToProps)(Introduction)
