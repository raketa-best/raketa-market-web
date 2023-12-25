import { I18n } from '../../i18n/i18n'
import classes from './ConfirmCode.module.css'

export const ConfirmCode: React.FC<{i18n: I18n}> = (props) => {

    const t = props.i18n
    
    return <>    
        <div className={classes.confirmCode_block}>
            <div className={classes.text}>
                {t['Сейчас поступит звонок, на указанный вами номер телефона']}
            </div>
            <div className={classes.text}>
                {t['Для аутентификации введите последние 4 цифры входящего номера']}
            </div>
            <div>
                {props.children}
            </div>
        </div>
    </>
} 