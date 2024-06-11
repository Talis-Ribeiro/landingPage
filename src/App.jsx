import React,{ useState } from 'react'

import './App.css'
import './componentes/LandingPage/landingPage.css'
import './componentes/LandingPage/landingDark.css'
import LandingPage from './componentes/LandingPage/LandingPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LandingPage/>
    

    

      {/* <Banner><Banner/>  */}
    </>
  )
}

export default App
