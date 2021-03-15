import React, { useState } from 'react'
import { Container, Card, Button, Row, Col, Image } from 'react-bootstrap'
import { connect } from 'react-redux'
import IntroductionForm from './IntroductionForm'
import { PaddedDiv, DivWithBackground } from '../styles/styledComps'

const Introduction = ({ introduction }) => {
  // clicked EditDescription
  const [editIntroductionMode, setEditIntroductionMode] = useState(false)
  const { name, image, description, socialMedia } = introduction

  const editIntroduction = () => {
    setEditIntroductionMode(true)
  }

  return (
    <DivWithBackground>
      <PaddedDiv className="container">
        <div className="row">
          <div className="col">
            <h1> &nbsp; &nbsp; &nbsp; hey, this is me. </h1>
          </div>
          <div className="col" />
          <div className="col" />
          <div className="col">
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
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
            <div className="row">
              <div className="col">
                <Image style={{ 'max-height': '750px', 'max-width': '750px' }} className="max-ehgi" src={image} rounded />
              </div>
              <div className="col">
                <h3> Hey - I'm {name}. {description} </h3>
              </div>
            </div>
          </Container>
        )}
      </PaddedDiv>
    </DivWithBackground>
  )
}

const mapStateToProps = state => ({
  introduction: state.introduction,
})

export default connect(mapStateToProps)(Introduction)
