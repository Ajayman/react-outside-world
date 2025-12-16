import { useState, useEffect } from 'react'

async function getData() {
  const url = "https://jsonplaceholder.typicode.com/todas/1";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    throw error
  }
}

function App() {
  const [count, setCount] = useState(0)
  const [todos, setTodos] = useState([])
  const [error, setError] = useState(null)
  useEffect(() => {
    async function logData() {
      try {
        console.log(await getData());
      }catch (error) {
        setError(error)
        console.error("Error fetching data:", error);
      }
    }
    logData();
  }, []);
  return (
    <>
      <h1>{count}</h1>
      {error && <p style={{ color: 'red' }}>Error: {error.message}</p>}
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  )
}

export default App