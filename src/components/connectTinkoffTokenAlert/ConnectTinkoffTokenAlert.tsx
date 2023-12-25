import { ButtonPinkLarge } from '../button/Button'
import classes from './ConnectTinkoffTokenAlert.module.css'
import { ReactComponent as IconTinkoffInvest} from '../../images/icon_tinkoff_invest.svg'
import { useContext } from 'react'
import { StoriesContext } from '../../storiesLayout/StoriesProvider'
import { I18n } from '../../i18n/i18n'
import TinkoffTokenStoriesPresentation from '../../storiesLayout/TinkoffTokenStoriesPresentation'

const ConnectTinkoffTokenAlert: React.FC<{i18n: I18n}> = (props) => {

    const t = props.i18n

    const {show} = useContext(StoriesContext)

    const onClickButton = () => {
        show(<TinkoffTokenStoriesPresentation i18n={props.i18n}/>)     
    }

    return <div className={classes.tokenAlert}>
        <div className={classes.message}>{t['Сейчас здесь пусто!']}</div>
        <div className={classes.message}>{t['Подключите Тинькофф.Инвестиции']}</div>
        <div className={classes.message}>{t['Искусственный интеллект']}<br />{t['составит уникальный анализ']}<br />{t['вашего портфеля 😎']}</div>
        <ButtonPinkLarge onClick={onClickButton} >
            <div>
                <IconTinkoffInvest className={classes.icon}/>
                <div>{t['Подключить']}<br />{t['Тинькофф.Инвестиции']}</div>
            </div>
        </ButtonPinkLarge>
    </div> 
}

export default ConnectTinkoffTokenAlert