import style from '../../components/ProfileBodyBg.module.css'
import { I18n } from '../../i18n/i18n'
import classes from './News.module.css'

const News: React.FC<{i18n: I18n}> = (props) => {
    const t = props.i18n
    return <div className={`${style.block} ${classes.news_block}`}>
        <div className={classes.news_text}>{t['страница НОВОСТИ в процессе разработки']}</div>
    </div>
}
 export default News




