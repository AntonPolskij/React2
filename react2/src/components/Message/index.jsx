import classnames from 'classnames';
import styles from './message.module.css';

export const Message = ({text, ...props}) => {
    let className = classnames(styles.msg, {
        [styles.me]: props.theme === 'me',
        [styles.from]: props.theme === 'from',
    })
    return <div className={className}>{text}</div>
}