import logo from './logo.svg';
import './App.css';
import {Message} from './components';



function App() {
  return (
    <div className="App">
      <img className="App-logo" src={logo}></img>
      <Message text={'Первый компонент'}/>
      <Message text={'Смс от меня'} theme={'me'}/>
      <Message text={'Смс для меня'} theme={'from'} />
    </div>
  );
}

export default App;
