import './App.css';
import Code1 from './components/Code1';
import Code2 from './components/Code2';

function App() {
  return (
    <div className="App">
      <Code1 name={"youssef"} ></Code1>
      <Code2 count={20} ></Code2>
    </div>
  );
}

export default App;
