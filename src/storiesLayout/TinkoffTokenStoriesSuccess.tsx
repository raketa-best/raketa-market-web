import classes from './TinkoffTokenStoriesSuccess.module.css'
import { ReactComponent as IconSuccess } from '../images/icon_success.svg'
import { ButtonGryMedium } from '../components/commons/button/Button'
import { useContext } from 'react'
import { StoriesContext } from './StoriesProvider'

export const TinkoffTokenStoriesSuccess = () => {

    const {exit} = useContext(StoriesContext)

    const onClickButton = () => {
        exit()
    }

    return <div className={classes.tinkoffTokenStories_Success_block}>
        <IconSuccess className={classes.icon_success} />
        <div className={classes.tinkoffTokenStories_Success_text_1}>Токен успешно<br />установлен !</div>
        <div className={classes.tinkoffTokenStories_Success_text_2}>Идет анализ вашего портфеля</div>
        <div className={classes.tinkoffTokenStories_Success_text_3}>Его результаты будут<br />опубликованы в Профиле 👍</div>
        <ButtonGryMedium onClick={onClickButton} >
            <div className={classes.button_block}>          
                <div>Отлично 👍<br />Перейти в Профиль</div>
            </div>
        </ButtonGryMedium>
    </div>
}