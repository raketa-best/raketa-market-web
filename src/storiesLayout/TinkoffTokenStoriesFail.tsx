import classes from './TinkoffTokenStoriesFail.module.css'
import { ReactComponent as IconFail } from '../images/icon_fail.svg'
import { ButtonGryMedium } from '../components/button/Button'
import { useContext } from 'react'
import { StoriesContext } from './StoriesProvider'
import { I18n } from '../i18n/i18n'


const TinkoffTokenStoriesFail: React.FC<{i18n: I18n}> = (props) => {

    const t = props.i18n

    const {back} = useContext(StoriesContext)

    const onClickButton = () => { 
        back()
    }

    return <div className={classes.tinkoffTokenStories_Fail_block}>
        <IconFail className={classes.icon_fail} />
        <div className={classes.tinkoffTokenStories_Fail_text_1}>{t['Не удалось вставить']}<br />{t['этот токен !']}</div>
        <div className={classes.tinkoffTokenStories_Fail_text_2}>{t['Создайте токен еще раз']}</div>        
        <ButtonGryMedium onClick={onClickButton} >
            <div className={classes.button_block}>          
                <div>{t['👌 Создать токен']}</div>
            </div>
        </ButtonGryMedium>
    </div>
}
export default TinkoffTokenStoriesFail