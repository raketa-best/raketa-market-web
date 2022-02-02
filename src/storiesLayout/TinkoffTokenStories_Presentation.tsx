import classes from './TinkoffTokenStories_Presentation.module.css'
import { ReactComponent as IconTinkoffInvest } from '../images/icon_tinkoff_invest.svg'
import { ReactComponent as IconKey } from '../images/icon_key.svg'
import iconLock from '../images/icon_lock.png'
import iconAI from '../images/icon_ai.png'
import { ButtonGryMedium } from '../components/commons/button/Button'
import { useContext } from 'react'
import { StoriesContext } from './StoriesProvider'
import TinkoffTokenStories_Set from './TinkoffTokenStories_Set'


export const TinkoffTokenStories_Presentation = () => {

    const {setShowStories} = useContext(StoriesContext)

    const onClickButton = () => {
        setShowStories(<TinkoffTokenStories_Set />)
    }

    return <div className={classes.tinkoffTokenStories_Presentation_block}>
        <div className={classes.tinkoffInvest_block}>
            <IconTinkoffInvest className={classes.icon_TinkoffInvest} />
            <div className={classes.tinkoffTokenStories_Presentation_text}>
                Токен<br />Тинькофф.Инвестиции <IconKey className={classes.icon_key}/>
            </div>
        </div>
        <div className={classes.ai_block}>
            <img src={iconAI} className={classes.icon_ai} alt={''} />
            <div className={classes.tinkoffTokenStories_Presentation_text}>
                Токен позволяет<br />искусственному интеллекту<br />сканировать ваши сделки 💡
            </div>
        </div>
        <div className={classes.lock_block}>
            <img src={iconLock} className={classes.icon_lock} alt={''} />
            <div className={classes.tinkoffTokenStories_Presentation_text}>
                Безопасно!<br /><br />Есть два вида токена:<br />'для чтения' и 'полный доступ'<br />Вам нужен токен:<br />только 'для чтения' ✅
            </div>
        </div>
        <ButtonGryMedium to={''} onClick={onClickButton} >
            <div className={classes.button_block}>
                <IconTinkoffInvest className={classes.icon_button} />            
                <div>Получить токен<br />Тинькофф.Инвестиции</div>
            </div>
        </ButtonGryMedium>
    </div>
}