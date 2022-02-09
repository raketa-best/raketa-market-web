import classes from './TinkoffTokenStoriesFail.module.css'
import { ReactComponent as IconFail } from '../images/icon_fail.svg'
import { ButtonGryMedium } from '../components/commons/button/Button'
import { useContext } from 'react'
import { StoriesContext } from './StoriesProvider'


export const TinkoffTokenStoriesFail = () => {

    const {back} = useContext(StoriesContext)

    const onClickButton = () => { 
        back()
    }

    return <div className={classes.tinkoffTokenStories_Fail_block}>
        <IconFail className={classes.icon_fail} />
        <div className={classes.tinkoffTokenStories_Fail_text_1}>Не удалось вставить<br />этот токен !</div>
        <div className={classes.tinkoffTokenStories_Fail_text_2}>Создайте токен еще раз</div>        
        <ButtonGryMedium onClick={onClickButton} >
            <div className={classes.button_block}>          
                <div>👌 Создать токен</div>
            </div>
        </ButtonGryMedium>
    </div>
}