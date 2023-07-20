import './App.css';
import Albums from './components/Albums';
import Comments from './components/Comments';
import Users from './components/Users';

function App() {
  return (
    <div className="App">
      <Users/>
      <Comments/>
      <Albums/>
    
    </div>
  );
}

export default App;
