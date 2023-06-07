import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Necflis from './components/Necflis/Necflis'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Necflis/>
    </>
  )
}

export default App
