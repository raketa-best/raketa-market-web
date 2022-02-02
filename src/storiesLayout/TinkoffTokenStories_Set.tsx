import classes from './TinkoffTokenStories_Set.module.css'
import { ButtonGryMedium } from '../components/commons/button/Button'
import { useContext, useState } from 'react'
import { StoriesContext } from './StoriesProvider'
import guideGetApiToken from '../images/guide_get_api_token.gif'
import { TinkoffTokenStories_Success } from './TinkoffTokenStories_Success'
import { TinkoffTokenStories_Fail } from './TinkoffTokenStories_Fail'


const TinkoffTokenStories_Set: React.FC = () => {

    const {setShowStories} = useContext(StoriesContext)

    const [token, setToken] = useState<string | undefined>('') 
    const [warning, setWarning] = useState<string>('')
    
    const onChangeInputTokenSet = (event?: any) => {
        setToken(event.target.value)
    }
    
    const onFocusInputTokenSet = () => {
        setWarning('')
    } 

    const onClickButton = () => {        
        if (token!==undefined && token.length > 0 && token.length < 255) {            
            handleSubmitTokenSet(token)
            setWarning('')
          } else {
            setWarning('⚠️ ОШИБКА. Вставьте токен')
          }  
    } 
    
    const handleSubmitTokenSet  = (token?: string) => {
        if (token === 't.qkIEioFlpXq7UO9gI3PRe2ndweKjmywarQgcnEIOPuuxRFehyjNoyQ_6Wot4zatu6kAw0EX9Y8WZfToCZ0qGsA') {
            setShowStories(<TinkoffTokenStories_Success />)
        } else {
            setShowStories(<TinkoffTokenStories_Fail />)
        }
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
                <label className={ warning==='' ? classes.lable_inputToken : classes.lable_inputToken_warning }> 
                    { warning==='' ? 'Вставьте, скопированный токен' : warning } 
                </label>
                <textarea value={token} placeholder='Вставить токен'
                    onChange={onChangeInputTokenSet} autoFocus={false} 
                    onFocus={onFocusInputTokenSet} className={classes.inputToken} 
                />
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