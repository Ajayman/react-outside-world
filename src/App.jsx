import { useState } from 'react'
function App() {
const [name, setName] = useState('Kumar')  
const derivedName = name;
  return (
    <>
      {derivedName}
    </>
  )
}

export default App