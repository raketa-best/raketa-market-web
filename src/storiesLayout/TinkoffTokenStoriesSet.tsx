import classes from './TinkoffTokenStoriesSet.module.css'
import { ButtonGryMedium } from '../components/button/Button'
import { useContext, useState } from 'react'
import { StoriesContext } from './StoriesProvider'
import guideGetApiToken from '../images/guide_get_api_token.gif'
import { I18n } from '../i18n/i18n'
import TinkoffTokenStoriesSuccess from './TinkoffTokenStoriesSuccess'
import TinkoffTokenStoriesFail from './TinkoffTokenStoriesFail'


const TinkoffTokenStoriesSet: React.FC<{i18n: I18n}> = (props) => {

    const t = props.i18n 

    const {show} = useContext(StoriesContext)

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
            setWarning(t['⚠️ Вставьте токен'])
          }  
    } 
    
    const handleSubmitTokenSet  = (token?: string) => {
        if (token === 't.qkIEioFlpXq7UO9gI3PRe2ndweKjmywarQgcnEIOPuuxRFehyjNoyQ_6Wot4zatu6kAw0EX9Y8WZfToCZ0qGsA') {
            show(<TinkoffTokenStoriesSuccess i18n={props.i18n}/>)
        } else {
            show(<TinkoffTokenStoriesFail i18n={props.i18n}/>)
        }
    } 

    return <div className={classes.tinkoffTokenStories_Set_block}>
        <div className={classes.help_block_1}>            
            <div className={classes.text}>
                {t['Перейдите в настройки профиля']}<br />{t['Тинькофф Инвестиции по ссылке:']}
            </div>
            <a href={'https://www.tinkoff.ru/invest/settings/'} className={classes.link} >
                https://www.tinkoff.ru/invest/settings/
            </a>
        </div>
        <div className={classes.help_block_2}>
            <div className={classes.text}>
            {t['Войдите под вашим аккаунтом']}<br />{t['на сайте Тинькофф']}
            </div>
        </div>
        <div className={classes.help_block_3}>
            <div className={classes.text}>
            {t['Нажмите "Создать токен"']}<br /> {t['Создайте токен для чтения']}<br /> {t['Скопируйте его']}
            </div>
            <img src={guideGetApiToken}  className={classes.gif} alt={''} />
        </div>
        <div className={classes.input_block}>
            <div className={classes.inputToken_block}>
                <label className={ !warning ? classes.label_inputToken : classes.label_inputToken_warning }> 
                    { !warning ?  t['Вставьте, скопированный токен'] : warning } 
                </label>
                <textarea value={token} 
                    onChange={onChangeInputTokenSet} autoFocus={true} 
                    onFocus={onFocusInputTokenSet} className={classes.inputToken} 
                />
            </div>
        </div>        
        <ButtonGryMedium onClick={onClickButton} >
            <div className={classes.button_block}>          
                <div> {t['Сохранить токен ✅']}</div>
            </div>
        </ButtonGryMedium>
    </div>
}

export default TinkoffTokenStoriesSet