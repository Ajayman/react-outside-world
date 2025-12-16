import { useRef } from "react";
import { useState } from "react";
import { getPosts } from "./services/posts";
import { postPosts } from "./services/posts";
function App() {
  const [title1, setTitle1] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [userId, setUserId] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const h1Ref = useRef(0)
  h1Ref.current = 1
  console.log(h1Ref);
  const inputRef = useRef()


  async function handleClick() {
    inputRef.current.focus();
    try {
      const data = await getPosts();
      setTitle1(data[0].title);
    } catch (error) {
      console.log({ error });
    }

  }

  async function handleSubmit(e){
    e.preventDefault();
    const data= {userId,title,body};
    setSubmitting(true);
    await postPosts(data);
    setSubmitting(false);
    setBody("");
    setTitle("");
    setUserId("");  
  }
  return (
    <div>
      <h1>Hello, World!</h1>
      <h2>{title1}</h2>
      <h3>{title}</h3>
      <button onClick={() => { handleClick() }}>Click me</button>
      <input type="text" placeholder="type something" ref={inputRef} />
      <form>
        <input placeholder="userId" value={userId} onChange={(e) => setUserId(e.target.value)} />
        <input placeholder="title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input placeholder="body" value={body} onChange={(e) => setBody(e.target.value)} />
        <button type="submit" onClick={(e)=> handleSubmit(e)}>{submitting ? "Submitting..." : "Submit"}</button>
      </form>
    </div>
  );
}

export default App; 