import style from '../../components/ProfileBodyBg.module.css'
import classes from './Home.module.css'

const Home: React.FC = () => {
    return <div className={`${style.block} ${classes.home_block}`}>
        <div className={classes.home_text}>страница ДОМ в процессе разработки</div>
    </div>
}

export default Home