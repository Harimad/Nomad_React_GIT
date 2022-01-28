import {useState, useEffect} from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword,  setKeyword] =useState('');
  const onClick = () => setCounter((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);

  console.log('항상 실행');

  useEffect(() => {
    console.log('처음 한번만 실행');
  }, []); //배열이 비어있으면, 코드가 1번만 실행됨

  useEffect(() => {
    console.log('keyword 바뀔때만 실행');
  }, [keyword]); //keyword가 변화할 떄 코드를 실행하고 싶다면, 배열에 keyword 기입

  useEffect(() => {
    console.log('counter 바뀔때만 실행');
  }, [counter]);

  useEffect(() => {
    console.log('keyword & counter 바뀌면 실행');
  }, [counter, keyword]);

  return (
    <div>
      <input
      value={keyword}
      onChange={onChange}
      type="text"
      placeholder='Search here...'
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
