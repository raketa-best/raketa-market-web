import { useEffect, useState } from "react"
import { InputPhoneNumberContainer } from "./inputPhoneNamber/InputPhoneNumberContainer"
import Auth from "./Auth"
import classes from './Auth.module.css'
import { ButtonPink } from "../commons/buttonsAll/ButtonsAll"


const AuthContainer: React.FC = () => {

    const [valueButtonPink, setValueButtonPink] = useState<string>('')
    const [isActiveLinkButton, setIsActiveLinkButton] = useState<boolean>(false)
    

    useEffect(() => {
        setValueButtonPink('Получить код  ****')
    }, [])

    const handleSubmitPhone = (phoneNumber?: string) => {
        console.log('handleSubmitPhone', phoneNumber)
    } 
    
    const isDisableButtonOnClick = (isErrors: boolean) => {
        if (isErrors) {
            setIsActiveLinkButton(false)
        } else {
            setIsActiveLinkButton(true)
        }
        console.log('setIsActiveLinkButton', isActiveLinkButton)   
    }

    return <>        
        <Auth>
            <div className={classes.locationFormClasses}>
                <InputPhoneNumberContainer isDisableButtonOnClick={isDisableButtonOnClick} handleSubmitPhone={handleSubmitPhone} />
            </div>
            <div className={classes.locationButtonClasses}>
                <ButtonPink value={valueButtonPink}
                    to={'/confirmCode'} 
                    isActiveLinkButton={isActiveLinkButton} />
            </div>
        </Auth>
    </>
}

export default AuthContainer