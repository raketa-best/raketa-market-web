import classes from './TinkoffTokenStories_Set.module.css'
import { ButtonGryMedium } from '../components/commons/button/Button'
import { useContext, useState } from 'react'
import { StoriesContext } from './StoriesProvider'
import { TinkoffTokenStories } from './StoriesLayout'
import guideGetApiToken from '../images/guide_get_api_token.gif'


const TinkoffTokenStories_Set: React.FC = () => {

    const {setShowStories, setArrayStories, arrayStories} = useContext(StoriesContext)

    const [token, setToken] = useState<string | undefined>('') 
    const [warning, setWarning] = useState<string>('')
    
    console.log('token', token)
    
    const onChangeInputTokenSet = (event?: any) => {
        setToken(event.target.value)
    }
    
    const onFocusInputTokenSet = () => {
        setWarning('Вставьте, скопированный токен')
    } 

    const onClickButton = () => {        
        if (token!==undefined && token.length > 0 && token.length < 255) {
            setArrayStories([...arrayStories, <TinkoffTokenStories />])
            setShowStories(<TinkoffTokenStories />)
            handleSubmitTokenSet(token)
          } else {
            setWarning('! ОШИБКА. Вставьте токен')
          }  
    } 
    
    const handleSubmitTokenSet  = (token?: string) => {
        console.log('handleSubmitTokenSet', token)
    } 

    return <div className={classes.tinkoffTokenStories_Set_block}>
        <div className={classes.help_block_1}>            
            <div className={classes.text}>
                Перейдите в настройки профиля<br />Тинькофф Инвестиции по ссылке:
            </div>
            <a href={'https://www.tinkoff.ru/invest/settings/'} className={classes.link} >
                https://www.tinkoff.ru/invest/settings/
            </a>
        </div>
        <div className={classes.help_block_2}>
            <div className={classes.text}>
                Войдите под вашим аккаунтом<br />на сайте Тинькофф
            </div>
        </div>
        <div className={classes.help_block_3}>
            <div className={classes.text}>
                Нажмите 'Создать токен'<br />Создайте токен для чтения<br />Скопируйте его
            </div>
            <img src={guideGetApiToken}  className={classes.gif} alt={''} />
        </div>
        <div className={classes.input_block}>
            <div className={classes.inputToken_block}>
                <label className={classes.lable_inputToken}> 
                    {warning==='' ? 'Вставьте, скопированный токен' : warning} 
                </label>
                <input type='text' value={token} placeholder='Вставьте токен'
                    onChange={onChangeInputTokenSet} 
                    autoFocus={true} 
                    onFocus={onFocusInputTokenSet}
                    className={classes.inputToken} />
            </div>
        </div>        
        <ButtonGryMedium to={''} onClick={onClickButton} >
            <div className={classes.button_block}>          
                <div>Сохранить токен ✅</div>
            </div>
        </ButtonGryMedium>
    </div>
}

export default TinkoffTokenStories_Set