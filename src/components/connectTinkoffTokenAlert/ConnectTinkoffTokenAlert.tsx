import { ButtonPinkLarge } from '../commons/button/Button'
import classes from './ConnectTinkoffTokenAlert.module.css'
import { ReactComponent as IconTinkoffInvest} from '../../images/icon_tinkoff_invest.svg'
import { useContext } from 'react'
import { StoriesContext } from '../../storiesLayout/StoriesProvider'
import { TinkoffTokenStories_Presentation } from '../../storiesLayout/TinkoffTokenStories_Presentation'


const ConnectTinkoffTokenAlert: React.FC = () => {

    const {setShowStories} = useContext(StoriesContext)

    const onClickButton = () => {
        setShowStories(<TinkoffTokenStories_Presentation />)     
    }

    return <div className={classes.tokenAlert_block}>
        <div className={classes.tokenAlert}>
            <div className={classes.message}>Сейчас здесь пусто!</div>
            <div className={classes.message}>Подключите Тинькофф.Инвестиции</div>
            <div className={classes.message}>Искусственный интеллект<br />составит уникальный анализ<br />вашего портфеля 😎</div>
            <ButtonPinkLarge to={''} onClick={onClickButton}            >
                <div>
                    <IconTinkoffInvest className={classes.icon} />
                    <div>Подключить<br />Тинькофф.Инвестиции</div>
                </div>
            </ButtonPinkLarge>
        </div>        
    </div>
}

export default ConnectTinkoffTokenAlert