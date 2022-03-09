import style from '../../components/ProfileBodyBg.module.css'
import classes from './Chat.module.css'

const Chat: React.FC = () => {
    return <div className={`${style.block} ${classes.chat_block}`}>
        <div className={classes.chat_text}>страница ЧАТ в процессе разработки</div>
    </div>
}

export default Chat