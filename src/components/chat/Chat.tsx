import style from '../../components/ProfileBodyBg.module.css'
import { I18n } from '../../i18n/i18n'
import classes from './Chat.module.css'

const Chat: React.FC<{i18n: I18n}> = (props) => {
    const t = props.i18n
    return <div className={`${style.block} ${classes.chat_block}`}>
        <div className={classes.chat_text}>{t['страница ЧАТ в процессе разработки']}</div>
    </div>
}

export default Chat