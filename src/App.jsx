import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Header from './layouts/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      {/*  grid-cols-[auto, 1fr] */}
      <div className="grid grid-cols-[auto, 1fr]">

      </div>
    </>
  )
}

export default App
