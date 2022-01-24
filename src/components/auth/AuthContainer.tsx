import { useEffect, useState } from "react"
import { InputPhoneNumberContainer } from "./inputPhoneNamber/InputPhoneNumberContainer"
import Auth from "./Auth"
import classes from './Auth.module.css'
import { ButtonAqua, ButtonPink } from "../commons/button/Button"


const AuthContainer: React.FC = () => {

    const [labelButton, setLabelButton] = useState<string>('')
    const [isActiveLinkButton, setIsActiveLinkButton] = useState<boolean>(false)
    

    useEffect(() => {
        setLabelButton('Получить код  ****')
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
                <ButtonPink value={labelButton}
                    to={'/confirmCode'} 
                    isActiveLinkButton={isActiveLinkButton} />
            </div>
        </Auth>
    </>
}

export default AuthContainer