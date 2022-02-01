import classes from './TinkoffTokenStories_Fail.module.css'
import { ReactComponent as IconFail } from '../images/icon_fail.svg'
import { ButtonGryMedium } from '../components/commons/button/Button'
import { useContext } from 'react'
import { StoriesContext } from './StoriesProvider'
import TinkoffTokenStories_Set from './TinkoffTokenStories_Set'

export const TinkoffTokenStories_Fail = () => {

    const {setShowStories, setArrayStories, arrayStories} = useContext(StoriesContext)

    const onClickButton = () => {
        setArrayStories([...arrayStories, <TinkoffTokenStories_Set />])
        setShowStories(<TinkoffTokenStories_Set />)
    }

    return <div className={classes.tinkoffTokenStories_Fail_block}>
        <IconFail className={classes.icon_fail} />
        <div className={classes.tinkoffTokenStories_Fail_text_1}>Не удалось вставить<br />этот токен !</div>
        <div className={classes.tinkoffTokenStories_Fail_text_2}>Создайте токен еще раз</div>        
        <ButtonGryMedium to={''} onClick={onClickButton} >
            <div className={classes.button_block}>          
                <div>👌 Создать токен</div>
            </div>
        </ButtonGryMedium>
    </div>
}