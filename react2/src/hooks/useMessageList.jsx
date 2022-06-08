
import { useState, useCallback, useEffect } from 'react';
import { AUTHORS } from '../constants';
export const useMessageList = () => {

    const [messageList, setMessageList] = useState([]);//Список сообщений

    useEffect(() => {
        if (messageList.length > 0 && messageList[messageList.length - 1].author === AUTHORS.ME) {
            setTimeout(() => {
                const date = new Date();
                const botMessage = {
                    author: AUTHORS.BOT,
                    text: `Сообщение отправленно! ${date.toString()}`,
                };
                setMessageList((prevMessageList) => {
                    return [
                        ...prevMessageList,
                        botMessage,
                    ]
                });
            }, 1500);
        }

    }, [messageList])


    const addNewMessage = useCallback((text) => {
        const newMessage = {
            author: AUTHORS.ME,
            text,
        }
        setMessageList((prevMessageList) => {
            return [
                ...prevMessageList,
                newMessage,
            ]
        })
    }, []);

    return {
        messageList,
        addNewMessage,
    }
}