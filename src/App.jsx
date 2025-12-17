import axios from "axios";
import { useState } from "react";
import { Card } from "./components/card";
import { useEffect } from "react";
async function GetUsers() {
  try {
    const { data } = await axios.get("https://69415033686bc3ca81668342.mockapi.io/api/users/");
    return data;
  } catch (error) {
    throw error;
  }
}
function useDebounce(inputValue, delay) {
  const [deValue, setDeValue] = useState("");
  const timer = null;
  useEffect(() => {
    setTimeout(() => {
      const timer = setDeValue(inputValue);
    }, delay);
    return () => {
      clearTimeout(timer);
    }
  }, [inputValue]);
  return deValue;
}

function App() {
  const [users, setUsers] = useState([]);
  const [parentCount, setParentCount] = useState(0);
  const [inputValue, setInputValue] = useState("");
  async function handleGetUsers() {
    const data = await GetUsers();
    setUsers(data);
    console.log(data)
  }
  function handleChange(e) {
    setInputValue(e.target.value);
  }
  const debouncedValue = useDebounce(inputValue, 600);
  return (
    <div>
      <h1>day 9 - React Outside World - {parentCount}</h1>
      InputValue: {inputValue}
      Debounce Value: {debouncedValue}
      <br />
      <input type="text" value={inputValue} onChange={(e) => handleChange(e)} />
      <button onClick={() => handleGetUsers()}>Get Users</button>
      {users.map((user) => {
        return (
          <Card key={user.id} name={user.name} email={user.email} handleParentCount={setParentCount} />
        )
      })}
    </div>
  )
}

export default App;