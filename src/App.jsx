import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './Tailwind.css'

function App({author,author2}) {
  const [count, setCount] = useState(0);
  let judul = true;

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 id='title'>Dontol</h1>
      <button onClick={() => {
        if(judul == true){
          document.getElementById('title').innerHTML = "Dongo";
          judul = false;
        }else{
          document.getElementById('title').innerHTML = "Dontol";
          judul = true;
        }
        }}>
        Click For Magic
      </button>
      <div className="card">
        <div className='counting'>
          <button onClick={() => setCount((count) => count - 1)}>
            -
          </button>
          <p>
          count is {count}
          </p>
          <button onClick={() => setCount((count) => count + 1)}>
            +
          </button>
        </div>
        <button onClick={() => setCount((count) => 0)}>
          Reset
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR <a href="../index2.html">Move to Next Page</a>
        </p>
      </div>
      <p className="read-the-docs">
        {author ? author : 'Unknown'}
        <br />
        {author2 ? author2 : 'Unknown'}
      </p>
    </>
  )
}

export default App
