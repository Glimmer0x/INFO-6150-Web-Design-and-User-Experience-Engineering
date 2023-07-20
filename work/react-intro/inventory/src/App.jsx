import { useState } from 'react';
import './App.css';
import Reorder from './Reorder';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className='inventory-container'>
      <div>
        Count: {count}
      </div>
      <button onClick={() => setCount(count+1)}>Increase</button>
      <button onClick={() => setCount(count-1)} disabled={!count}>Decrease</button>
      {count === 0 ? <Reorder onReorder={ () => setCount(5)} /> : null}
    </div>
  );
}

export default App;
