import classes from './ConfirmCode.module.css'

export const ConfirmCode: React.FC = (props) => {
    
    return <>    
        <div className={classes.confirmCode_block}>
            <div className={classes.text}>
                Сейчас поступит звонок, на указанный вами номер телефона
            </div>
            <div className={classes.text}>
                Для аутентификации введите последние 4 цифры входящего номера
            </div>
            <div>
                {props.children}
            </div>
        </div>
    </>
} 