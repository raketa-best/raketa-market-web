import { ButtonPink } from '../commons/button/Button'
import classes from './ConnectTinkoffTokenAlert.module.css'
import iconTinkoffInvest from '../../images/icon_tinkoff_invest.png'
import { useContext } from 'react'
import { StoriesContext } from '../../storiesLayout/StoriesProvider'
import { TinkoffTokenStories } from '../../storiesLayout/StoriesLayout'


const ConnectTinkoffTokenAlert: React.FC = () => {

    const tinkoffTokenStories = useContext(StoriesContext)

    return <div className={classes.tokenAlert_block}>
        <div className={classes.tokenAlert}>
            <div className={classes.message}>Сейчас здесь пусто!</div>
            <div className={classes.message}>Подключите Тинькофф.Инвестиции</div>
            <div className={classes.message}>Искусственный интеллект<br />составит уникальный анализ<br />вашего портфеля 😎</div>
            <ButtonPink to={''} 
                style={ {width: '200px', height: '110px', minHeight: '110px', color: '#ffffff', fontSize: '14px'} } 
                onClick={() => tinkoffTokenStories(<TinkoffTokenStories />)}
            >
                <div>
                    <img src={iconTinkoffInvest} className={classes.icon} />
                    <div>Подключить<br />Тинькофф.Инвестиции</div>
                </div>
            </ButtonPink>
        </div>        
    </div>
}

export default ConnectTinkoffTokenAlert