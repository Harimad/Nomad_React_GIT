import { useState, useEffect } from 'react';

function Hello() {
  // useEffect(function () {
  //   console.log('안녕');
  //   return function () {
  //     console.log('잘가');
  //   };
  // });

  useEffect(() => {
    console.log('안녕:)');
    return () => console.log('잘가:(');
  }, []);

  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing(prev => !prev);
  return (
    <div>
      {showing ? <Hello></Hello> : null}
      <button onClick={onClick}>{showing ? 'Hide' : 'Show'}</button>
    </div>
  );
}

export default App;
