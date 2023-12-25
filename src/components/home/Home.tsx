import style from '../../components/ProfileBodyBg.module.css'
import { I18n } from '../../i18n/i18n'
import classes from './Home.module.css'

const Home: React.FC<{i18n: I18n}> = (props) => {

    const t = props.i18n

    return <div className={`${style.block} ${classes.home_block}`}>
        <div className={classes.home_text}>{t['страница ДОМ в процессе разработки']}</div>
    </div>
}

export default Home