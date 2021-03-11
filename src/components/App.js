import React, { useState } from 'react'
import Introduction from './Introduction'
import Posts from './Posts'

const App = () => {
  const someState = useState('')
  return (
    <>
      <Introduction />
      <Posts />
    </>
  )
}

export default App
