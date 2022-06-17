// import classnames from 'classnames';
// import styles from './message.module.css';
import { Paper } from '@mui/material';

export const Message = ({ text, author, ...props }) => {
    // let className = classnames(styles.msg, {
    //     [styles.me]: props.theme === 'Me',
    //     [styles.from]: props.theme === 'Bot',
    // })
    return <Paper variant='outlined' component='li'>{author}: {text}</Paper>
}