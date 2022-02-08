import { useState } from "react"
import Auth from "./Auth"
import classes from './Auth.module.css'
import { ButtonPink } from "../commons/button/Button"
import { useNavigate } from "react-router-dom"


const AuthContainer: React.FC = () => {

    const [phoneNumber, setPhoneNumber] = useState<string | undefined>('')
    const [warning, setWarning] = useState<string>('')
    
    const navigate = useNavigate()    

    const handleSubmitPhone = (phoneNumber?: string) => {
        navigate('/confirmCode')
    } 
    
    const onFocusInput = () => {
        setWarning('* Введите номер телефона')
    }

    const handleKeyDown = (event: any) => {
        if (event.key === 'Backspace') {
            if (phoneNumber?.length===4) {
                setPhoneNumber('')
            } else {
                setPhoneNumber(phoneNumber?.substring(0, phoneNumber.length))
            }
        }
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
            formatPhoneNumber.map((item:string, index:number) => {
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
            setWarning('! ОШИБКА. Обязательное поле')
        } else if (phoneNumber && phoneNumber.length!==18) {
                setWarning('! ОШИБКА. Введите номер телефона') 
        } else if (phoneNumber && phoneNumber.length===18) {
            handleSubmitPhone(phoneNumber)
        } 
    }

    return <>        
        <Auth>
            <div className={classes.locationFormClasses}>
                <div className={classes.inputPhoneNumber_block}>
                    <label className={classes.lable}> {warning!=='' && warning} </label>
                    <input  
                        type='text' 
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
                    {'Получить код доступа'}
                </ButtonPink>
            </div>
        </Auth>
    </>
}

export default AuthContainer  