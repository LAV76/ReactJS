import logo from './logo.svg';
import './App.css';
import Greeting from './Greeting';
import CurrentTime from './CurrentTime';
import EvenCard from './EvenCard';
import Message from './Message';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Greeting />
        <CurrentTime /> 
        <EvenCard title = "Text" date = "20.10.1976" location = "Moscoww" propsBoolean = 'true'/>
      </header>
      <Message text="Привет, это мой первый компонент!" />
    </div>
  );
}

export default App;
