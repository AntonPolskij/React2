import logo from './logo.svg';
import './App.css';
import { Message } from './components';
import { useMessageList } from './hooks/useMessageList';
import { useCreateMessageForm } from './hooks/useCreateMessageForm';



function App() {

  const { messageList, addNewMessage } = useMessageList();//Вызов кастом-хука#1

  const { onInputChange, handleSubmit, inputValue } = useCreateMessageForm({ addNewMessage: addNewMessage });//Вызов кастом-хука#2


  return (
    <div className="App">
      <img className="App-logo" src={logo}></img>
      {/* <Message text={'Первый компонент'}/>
      <Message text={'Смс от меня'} theme={'me'}/>
      <Message text={'Смс для меня'} theme={'from'} /> */}
      <ul reversed>
        {messageList.map((message) => <li><Message text={message.text} author={message.author} theme={message.author} /></li>)}
      </ul>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={onInputChange} value={inputValue} className='text-input' placeholder='Введите ваше сообщение' />
        <input type="submit" className='btn' />
      </form>
    </div>
  );
}

export default App;
