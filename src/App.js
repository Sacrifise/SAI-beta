import logo from './logo.svg';
import './App.css';
import ContainerWeather from './containerWeather'
import ContainerTodo from './containerTodo';
import ContainerCalculator from './containerCalculator';

function App() {
  return (
    <div>
      <div id="XYZ">...</div>
      <div className="greet">Greetings</div>
      <div className="back"></div>
      <div className="back2"></div>
      <div className="back3"></div>
      <div className="textdec">greetings user</div>
      <div className="title">
        <p className="title-name">SAI</p>
      </div>
      <div className = "container">
        <ContainerWeather city={'barnaul'}/>
        <ContainerTodo/>
        <ContainerCalculator/>
      </div>
    </div>
  );
}

export default App;
