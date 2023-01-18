import { useState } from 'react'

const App = () => {
    const [count, setCount] = useState(0);
    return (
        <div className='counter' style={{display:'flex',alignItems:'center'}}>
            <button disabled={!count} onClick={()=>setCount((prev=>prev-1))}>-</button>
            <h2>{count}</h2>
            <button data-testid='inc-btn' onClick={()=>setCount((prev=>prev+1))}>+</button>
        </div>
    )
}

export default App