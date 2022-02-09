import classes from './ConfirmCode.module.css'
import {useEffect, useRef, useState } from "react"
import { ButtonAqua } from '../commons/button/Button'
import { ConfirmCode } from './ConfirmCode'
import { useNavigate } from 'react-router-dom'


const ConfirmCodeContainer: React.FC = () => {

    const [confirmCode, setConfirmCode] = useState<string[]>( new Array(4).fill('') )
    const [warning, setWarning] = useState<string>('')
    
    const confirmCodeNew = [...confirmCode]

    const inputElRef_1 = useRef<null | HTMLElement>(null)
    const inputElRef_2 = useRef<null | HTMLElement>(null)
    const inputElRef_3 = useRef<null | HTMLElement>(null)
    const inputElRef_4 = useRef<null | HTMLElement>(null)

    const inputElRefs = [inputElRef_1, inputElRef_2, inputElRef_3, inputElRef_4]
    

    useEffect(() => {
        inputElRefs[0].current!.focus()
    }, [])

    const navigate = useNavigate() 

    const handleSubmitConfirmCode = (confirmCode: string) => {
        navigate('/profile')
    }

    const onFocusInput = () => {
        setWarning('')
    }

    const handleKeyDown = (index: number, event: any) => {
        if (event.key === 'Backspace' && index!==0) {
            setWarning('')
            if (!confirmCode[index]) {            
                inputElRefs[index-1].current!.focus()
            }
        }
    }
    
    const onChangeInput = (index: number, event: any) => {        
        confirmCodeNew[index] = event.target.value.replace(/[^\d]/g, '')
        if ( index < 3 && event.target.value) {
            inputElRefs[index+1].current!.focus()
        } 
        setConfirmCode(confirmCodeNew)
    }

    const onClickButton = () => {    
        if (confirmCodeNew[3]) {
            if (confirmCodeNew.join('')!=='1234') {
                inputElRefs[3].current!.focus()
                setWarning('⚠️ Введите верно, последние 4 цифры входящего номера')
            } else if (confirmCodeNew.join('')==='1234') {
                setWarning('')
                handleSubmitConfirmCode?.(confirmCodeNew.join(''))
            } 
        } else {
            setWarning('⚠️ Введите последние 4 цифры входящего номера')
        }
    }

    return <ConfirmCode>
        <div className={classes.inputsConfirmCode_block}>
            { confirmCode.map((item: string, index: number) => 
                <input value={item}
                    key={index}
                    ref={inputElRefs[index] as any}
                    type='text'
                    onChange={ event => onChangeInput(index, event)}
                    onKeyDown={ event => handleKeyDown(index, event)}
                    onFocus={onFocusInput} 
                    className={classes.fieldConfirmCode} 
                    inputMode='numeric' 
                    minLength={1}
                    maxLength={1}
                /> 
            )}
        </div> 
        <div className={classes.warning}> {warning!=='' && warning} </div>
        <div>
            <ButtonAqua onClick={onClickButton}> {'Войти'} </ButtonAqua>
        </div>
    </ConfirmCode>
}

export default ConfirmCodeContainer