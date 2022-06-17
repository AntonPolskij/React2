import classnames from 'classnames';
import styles from './message.module.css';

export const Message = ({text, author, ...props}) => {
    let className = classnames(styles.msg, {
        [styles.me]: props.theme === 'Me',
        [styles.from]: props.theme === 'Bot',
    })
    return <div className={className}>{author}: {text}</div>
}