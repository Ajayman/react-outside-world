import { useState,useMemo } from 'react'
function App() {
  const [name, setName] = useState('Kumar');
  const derivedName = name;
  const [users, setUsers] = useState([
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
  ]);
  const idtouser = useMemo(() => {
    const foundUser = users.find((user) => {
      console.log("find chalyo")
      if (user.id === 2) {
        return user.name
      }
    }
    )
    return foundUser;
  }, [users])
  return (
    <div>
      <h2>{derivedName}</h2>
      <button onClick={() => setName('Bijay')}>Change name</button>
    </div>
  )
}

export default App