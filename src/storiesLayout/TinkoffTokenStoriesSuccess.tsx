import classes from './TinkoffTokenStoriesSuccess.module.css'
import { ReactComponent as IconSuccess } from '../images/icon_success.svg'
import { ButtonGryMedium } from '../components/button/Button'
import { useContext } from 'react'
import { StoriesContext } from './StoriesProvider'
import { I18n } from '../i18n/i18n'

const TinkoffTokenStoriesSuccess: React.FC<{i18n: I18n}> = (props) => {

    const t = props.i18n

    const {exit} = useContext(StoriesContext)

    const onClickButton = () => {
        exit()
    }

    return <div className={classes.tinkoffTokenStories_Success_block}>
        <IconSuccess className={classes.icon_success} />
        <div className={classes.tinkoffTokenStories_Success_text_1}>{t['Токен успешно']}<br />{t['установлен !']}</div>
        <div className={classes.tinkoffTokenStories_Success_text_2}>{t['Идет анализ вашего портфеля']}</div>
        <div className={classes.tinkoffTokenStories_Success_text_3}>{t['Его результаты будут']}<br />{t['опубликованы в Профиле 👍']}</div>
        <ButtonGryMedium onClick={onClickButton} >
            <div className={classes.button_block}>          
                <div>{t['Отлично 👍']}<br />{t['Перейти в Профиль']}</div>
            </div>
        </ButtonGryMedium>
    </div>
}
export default TinkoffTokenStoriesSuccess