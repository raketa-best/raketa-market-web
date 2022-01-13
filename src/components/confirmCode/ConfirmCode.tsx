import { useEffect, useState } from "react"
import { InputConfirmCode } from "./InputConfirmCode/InputConfirmCode"
import classes from './ConfirmCode.module.css'
import { ButtonEntry } from "../commons/button/Button"

export const ConfirmCode: React.FC = () => {

    const [lableButtonEntry, setLableButtonEntry] = useState<string>('')
    const [isActiveLinkButton, setIsActiveLinkButton] = useState<boolean>(false)

    useEffect(() => {
        setLableButtonEntry('Войти')
    }, [])

    const handleSubmitConfirmCode = (confirmCode: string) => {
        console.log('handleSubmitConfirmCode', confirmCode)
    }

    const isDisableButtonOnClick = (isErrors: boolean) => {
        if (isErrors) {
            setIsActiveLinkButton(false)
        } else {
            setIsActiveLinkButton(true)
        }
        console.log('isActiveLinkButton', isActiveLinkButton)
    }
   
    return <>
        <div className={classes.confirmCode_block}>
            <div className={classes.text}>
                {'Сейчас мы звоним, на указанный вами номер телефона.'}
            </div>
            <div className={classes.text}>
                {'Для аутентификации введите последние четыре цифры входящего номера'}
            </div>
            <div>
                <InputConfirmCode isDisableButtonOnClick={isDisableButtonOnClick} 
                    handleSubmitConfirmCode={handleSubmitConfirmCode} />
            </div>
            <div>
                <ButtonEntry value={lableButtonEntry} 
                   to={'/auth'} 
                   isActiveLinkButton={isActiveLinkButton} />
            </div>
        </div>
    </>
} 