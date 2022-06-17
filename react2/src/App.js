import { Message } from './components';
import { useMessageList } from './hooks/useMessageList';
import { useCreateMessageForm } from './hooks/useCreateMessageForm';
import { useRef, useEffect, useState } from 'react';
import { Button, Grid, Input, List, ListItem, Paper } from '@mui/material';
import { Box } from '@mui/system';



function App() {

  const { messageList, addNewMessage } = useMessageList();//Вызов кастом-хука#1

  const { onInputChange, handleSubmit, inputValue } = useCreateMessageForm({ addNewMessage: addNewMessage });//Вызов кастом-хука#2


  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current?.focus();    // автофокус на инпуте сообщений.
  }, [messageList]);


  const [chats, setChats] = useState([{
    id: Date.now(),
    name: 'Bot1'
  }, {
    id: Date.now() + 1,
    name: 'Bot2'
  }, {
    id: Date.now() + 2,
    name: 'Bot3'
  }]);


  return (
    <Grid container columns={12} className="App">
      <Grid item xs={2}>
        <List>
          {chats.map((chat) => <ListItem key={chat.id}>{chat.name}</ListItem>)}
        </List>
      </Grid>
      <Grid sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '97vh',
      }} item xs={10}>
        <List sx={{flexGrow: '1'}} reversed>
          {messageList.map((message) => <Message key={message.id} text={message.text} author={message.author} />)}
        </List>
        <Box sx={{ display: 'flex'}} component="form" onSubmit={handleSubmit}>
          <Input sx={{ flexGrow: '2' }} ref={inputRef} type="text" onChange={onInputChange} value={inputValue} placeholder='Введите ваше сообщение' />
          <Button variant='contained' type="submit" className='btn'>Отправить</Button>
        </Box>
      </Grid>
    </Grid>
  );
}

export default App;
