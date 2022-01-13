import { useEffect, useState } from "react"
import classes from './InputPhoneContainer.module.css'
import { InputPhoneNumber } from "./InputPhoneNamber"

export interface IInputPhoneNumberContainerProps {
  isDisableButtonOnClick?: (is: boolean) => void
  handleSubmitPhone?: (phoneNumber?: string) => void
}


export const InputPhoneNumberContainer: React.FC<IInputPhoneNumberContainerProps> = (props: IInputPhoneNumberContainerProps) => {

  const [phoneNumber, setPhoneNumber] = useState<string | undefined>('')   
  const [touch, setTouch] = useState<boolean>(false)
  const [warning, setWarning] = useState<string>('')
  const [isErrors, setIsErrors ] = useState<boolean>(true)
  const [formatPhoneNumber, setFormatPhoneNumber] = useState<string | undefined>('')
  
  console.log('phoneNumber', phoneNumber)

  useEffect(() => {
    props.isDisableButtonOnClick?.(isErrors)
  }, [isErrors, props])

  useEffect(() => {
    !isErrors &&
    props.handleSubmitPhone?.(phoneNumber)
  }, [phoneNumber])

  useEffect(() => {
    if (formatPhoneNumber!==undefined && formatPhoneNumber.length===11) {
      setWarning('Получите код подтверждения на этот номер')
      setIsErrors(false) 
    }    
  }, [formatPhoneNumber])

  useEffect(() => {
    phoneNumber!==undefined &&
    setFormatPhoneNumber(phoneNumber.match(/[0-9]+/g)?.join(''))
  }, [phoneNumber])

  const onChangeInputPhone = (event?: any) => {
    setPhoneNumber(event.target.value.replace(/[^\d\(\)\-\+]/g, "")) 
  }

  const onFocusInput = () => {
    setWarning('* Введите номер телефона +7(...)...-..-..')
    setTouch(true)
  }
  
  const onBlurInputPhone = () => {
    if (touch && phoneNumber==='') {
      setWarning('! ОШИБКА. Обязательное поле')
      setIsErrors(true)      
    } else if ((phoneNumber!=='' && formatPhoneNumber === undefined) 
      || (formatPhoneNumber!==undefined && formatPhoneNumber.length!==11) ) {
        setWarning('! ОШИБКА. Введите номер +7(...)...-..-..') 
        setIsErrors(true)       
    } else if ((phoneNumber!=='' && formatPhoneNumber === undefined) 
    || (formatPhoneNumber!==undefined && formatPhoneNumber.length!==11) ) {
      setWarning('! ОШИБКА. Введите номер +7(...)...-..-..') 
      setIsErrors(true)       
  } 
    setTouch(false)
  }

  useEffect(() => {    
    if (touch && formatPhoneNumber!==undefined) {
      if (formatPhoneNumber.slice(0, 1) === ('7') || formatPhoneNumber.slice(0, 1) === ('8')  ) {
        if (formatPhoneNumber.length===1) {
          setPhoneNumber('+7(' + formatPhoneNumber.slice(1, 4))
        } else if (formatPhoneNumber.length===4) {
          setPhoneNumber('+7(' + formatPhoneNumber.slice(1, 4) + ')')
        } else if (formatPhoneNumber.length===7) {
          setPhoneNumber('+7(' + formatPhoneNumber.slice(1, 4) + ')' + formatPhoneNumber.slice(4, 7) + '-')
        } else if (formatPhoneNumber.length===9) {
          setPhoneNumber('+7(' + formatPhoneNumber.slice(1, 4) + ')' + formatPhoneNumber.slice(4, 7) + '-'
           + formatPhoneNumber.slice(7, 9) + '-')
        } else if (formatPhoneNumber.length>=11) {
          setPhoneNumber('+7(' + formatPhoneNumber.slice(1, 4) + ')'
          + formatPhoneNumber.slice(4, 7) + '-' + formatPhoneNumber.slice(7, 9) + '-' + formatPhoneNumber.slice(9, 11) )
        } 
      } else {
        if (formatPhoneNumber.length===1) {
          setPhoneNumber('+7(' + formatPhoneNumber.slice(0, 3))
        } else if (formatPhoneNumber.length===4) {
          setPhoneNumber('+7(' + formatPhoneNumber.slice(0, 3) + ')')
        } else if (formatPhoneNumber.length===7) {
          setPhoneNumber('+7(' + formatPhoneNumber.slice(0, 3) + ')' + formatPhoneNumber.slice(3, 6) + '-')
        } else if (formatPhoneNumber.length===9) {
          setPhoneNumber('+7(' + formatPhoneNumber.slice(0, 3) + ')' + formatPhoneNumber.slice(3, 6) + '-'
           + formatPhoneNumber.slice(6, 8) + '-')
        } else if (formatPhoneNumber.length>=11) {
          setPhoneNumber('+7(' + formatPhoneNumber.slice(0, 3) + ')'
          + formatPhoneNumber.slice(3, 6) + '-' + formatPhoneNumber.slice(6, 8) + '-' + formatPhoneNumber.slice(8, 10) )
        }         
      }
    }
  }, [touch, formatPhoneNumber])

  return <>
      <label className={classes.lable}> {warning!=='' && warning} 
        <InputPhoneNumber value={phoneNumber} 
          onFocus={onFocusInput} onChange={onChangeInputPhone} onBlur={onBlurInputPhone} 
          className={classes.fieldPhone} />
      </label>
  </>
}