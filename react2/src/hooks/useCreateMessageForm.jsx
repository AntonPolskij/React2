
import { useCallback, useState } from 'react';

export const useCreateMessageForm = ({addNewMessage}) => {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = useCallback((event) => {
        event.preventDefault();
        addNewMessage(inputValue);
        resetInput();
    }, [inputValue]);

    const resetInput = useCallback(() => {
        setInputValue('');
    }, []);


    const onInputChange = useCallback((event) => {
        setInputValue(event.target.value)
    }, []);

    return {
        onInputChange,
        handleSubmit,
        inputValue,
    }
}