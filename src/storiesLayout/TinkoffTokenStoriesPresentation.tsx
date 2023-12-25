import classes from './TinkoffTokenStoriesPresentation.module.css'
import { ReactComponent as IconTinkoffInvest } from '../images/icon_tinkoff_invest.svg'
import { ReactComponent as IconKey } from '../images/icon_key.svg'
import iconLock from '../images/icon_lock.png'
import iconAI from '../images/icon_ai.png'
import { ButtonGryMedium } from '../components/button/Button'
import { useContext } from 'react'
import { StoriesContext } from './StoriesProvider'
import TinkoffTokenStoriesSet from './TinkoffTokenStoriesSet'
import { I18n } from '../i18n/i18n'


const TinkoffTokenStoriesPresentation: React.FC<{i18n: I18n}> = (props) => {

    const t = props.i18n 

    const {show} = useContext(StoriesContext)

    const onClickButton = () => {
        show(<TinkoffTokenStoriesSet i18n={props.i18n}/>)
    }

    return <div className={classes.tinkoffTokenStories_Presentation_block}>
        <div className={classes.tinkoffInvest_block}>
            <IconTinkoffInvest className={classes.icon_TinkoffInvest} />
            <div className={classes.tinkoffTokenStories_Presentation_text}>
                {t['Токен']}<br />{t['Тинькофф.Инвестиции']} <IconKey className={classes.icon_key}/>
            </div>
        </div>
        <div className={classes.ai_block}>
            <img src={iconAI} className={classes.icon_ai} alt={''} />
            <div className={classes.tinkoffTokenStories_Presentation_text}>
                {t['Токен позволяет']}<br />{t['искусственному интеллекту']}<br />{t['сканировать ваши сделки 💡']}
            </div>
        </div>
        <div className={classes.lock_block}>
            <img src={iconLock} className={classes.icon_lock} alt={''} />
            <div className={classes.tinkoffTokenStories_Presentation_text}>
                {t['Безопасно!']}<br /><br />{t['Есть два вида токена:']}<br />{t['"для чтения" и "полный доступ"']}<br />{t['Вам нужен токен:']}<br />{t['только "для чтения" ✅']}
            </div>
        </div>
        <ButtonGryMedium onClick={onClickButton} >
            <div className={classes.button_block}>
                <IconTinkoffInvest className={classes.icon_button} />            
                <div>{t['Получить токен']}<br />{t['Тинькофф.Инвестиции']}</div>
            </div>
        </ButtonGryMedium>
    </div>
}
export default TinkoffTokenStoriesPresentation