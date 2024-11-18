import logo from './logo.svg';
import './App.css';
import ContainerWeather from './containerWeather'
import ContainerTodo from './containerTodo';
import ContainerCalculator from './containerCalculator';

function App() {
  return (
    <div>
      <div id="XYZ">...</div>
      <div class="greet">Greetings</div>
      <div class="back"></div>
      <div class="back2"></div>
      <div class="back3"></div>
      <div class="textdec">greetings user</div>
      <div class="title">
        <p class="title-name">SAI</p>
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
