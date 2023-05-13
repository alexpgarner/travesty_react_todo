
import Header from './components/Header'
function App() {//this is JS
  const name = 'Alex'
  return (//everything inside here is JSX
    <div className="container">
      <Header/>
      <h1>my name is {name}</h1>
    </div>
  );
}

export default App;
