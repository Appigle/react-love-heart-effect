import { useState } from 'react';
import './App.css';
import LoveHeartEffect from './LoveHeartEffect';
import viteLogo from '/vite.svg';

function App() {
  const [count, setCount] = useState(0);
  const [like, setLike] = useState(false);
  const handleChange = (liked: boolean) => {
    setLike(liked);
  };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <LoveHeartEffect
            height={240}
            width={240}
            liked={like}
            containerStyle={{ display: 'inline-block' }}
            onChange={handleChange}
          />
          <LoveHeartEffect
            height={200}
            width={200}
            liked={like}
            containerStyle={{ display: 'inline-block' }}
            onChange={handleChange}
          />
        </a>
      </div>
      <h1>
        Vite + React +{' '}
        <LoveHeartEffect
          height={80}
          width={80}
          heartBeat={true}
          heartBeatTimeInterval={1000}
          containerStyle={{ display: 'inline-block' }}
        />
      </h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
