import { useRef } from "react";

function App() {
  const h1Ref =  useRef(0)
  h1Ref.current = 1
  console.log(h1Ref);
  const inputRef = useRef()
  function handleClick() {
    inputRef.current.focus();
  }
  return (
    <div>
      <h1>Hello, World!</h1>
      <button onClick={()=> {handleClick()}}>Click me</button>
      <input type="text" placeholder="type something" ref={inputRef} />
    </div>
  );
}

export default App; 