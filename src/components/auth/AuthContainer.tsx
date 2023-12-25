import { useState } from "react"
import Auth from "./Auth"
import classes from './Auth.module.css'
import { ButtonPink } from "../button/Button"
import { useNavigate } from "react-router-dom"
import { I18n } from "../../i18n/i18n"


const AuthContainer: React.FC<{i18n: I18n}> = (props) => {

    const t = props.i18n
    
    const [phoneNumber, setPhoneNumber] = useState<string | undefined>('')
    const [warning, setWarning] = useState<string>('')
    
    const navigate = useNavigate()    

    const handleSubmitPhone = (phoneNumber?: string) => {
        navigate('/confirmCode')
    } 
    
    const onFocusInput = () => {
        setWarning('')
    }

    const onChangeInputPhone = (event?: any) => {
        let formatPhoneNumber: string[] = []
        if (event.target.value.length === 1) {
            formatPhoneNumber = event.target.value.match(/[\d+]/g)
        } else {
            formatPhoneNumber = event.target.value.match(/[\d]/g)
        }

        if (formatPhoneNumber) {
            let formatPhone: string[] = []
            formatPhoneNumber.forEach((item:string, index:number) => {
                switch (index) {
                    case 0 : if (formatPhoneNumber[0] === ('7') || formatPhoneNumber[0] === ('8')
                        || formatPhoneNumber[0] === ('+')  ) {
                            formatPhone=[...formatPhone, `+7 (`]
                        } else {
                            formatPhone=[...formatPhone, `+7 (${item}`]
                        }; break 
                    case 4 : formatPhone=[...formatPhone, `) ${item}`]; break 
                    case 7 : formatPhone=[...formatPhone, `-${item}`]; break 
                    case 9 : formatPhone=[...formatPhone, `-${item}`]; break 
                    case 11 : break 
                    default: formatPhone=[...formatPhone, item]
                } 
            } ) 
            setPhoneNumber(formatPhone?.join(''))  
        }             
    } 

    const onClickButton = () => {    
        if (phoneNumber==='') {
            setWarning(t['⚠️ Обязательное поле'])
        } else if (phoneNumber && phoneNumber.length!==18) {
            setWarning(t['⚠️ Введите номер телефона']) 
        } else if (phoneNumber && phoneNumber.length===18) {
            handleSubmitPhone(phoneNumber)
        } 
    }

    const handleKeyDown = (event: any) => {
        if (event.key === 'Backspace') {
            if (phoneNumber?.length===4) {
                setPhoneNumber('')
            } else {
                setPhoneNumber(phoneNumber?.substring(0, phoneNumber.length))
            }
        } else if (event.key === 'Enter') {
            onClickButton()
        }
    }

    return <Auth i18n={props.i18n}>
        <div className={classes.locationFormClasses}>
            <div className={classes.inputPhoneNumber_block}>
                <label className={!warning ? classes.label : classes.label_warning}>
                    {!warning ? t['* Введите номер телефона'] : warning} 
                </label>
                <input  
                    type='text' 
                    inputMode='numeric'
                    value={phoneNumber}  
                    autoFocus={true}
                    onFocus={onFocusInput} 
                    onChange={onChangeInputPhone}
                    onKeyDown={handleKeyDown}
                    className={classes.fieldPhone} 
                />
            </div>
        </div>
        <div className={classes.locationButtonClasses}>
            <ButtonPink onClick={onClickButton} >
                {t['Получить код доступа']}
            </ButtonPink>
        </div>
    </Auth>
}

export default AuthContainer  