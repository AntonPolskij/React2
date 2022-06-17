// import classnames from 'classnames';
// import styles from './message.module.css';
import { Paper } from '@mui/material';




export const Message = ({text, author}) => {
    return <Paper component='li'>{author}: {text}</Paper>
}