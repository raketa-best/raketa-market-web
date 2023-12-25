import classes from './ConfirmCode.module.css'
import { useRef, useState } from 'react'
import { ButtonAqua } from '../button/Button'
import { ConfirmCode } from './ConfirmCode'
import { useNavigate } from 'react-router-dom'
import { IconBackLink } from '../iconButton/IconButton'
import React, { ClipboardEvent } from 'react'
import { I18n } from '../../i18n/i18n'


const ConfirmCodeContainer: React.FC<{i18n: I18n}> = (props) => {

    const t = props.i18n

    const [confirmCode, setConfirmCode] = useState<string[]>( new Array(4).fill('') )
    const [warning, setWarning] = useState<string>('')
    
    const confirmCodeNew = [...confirmCode]

    const inputElRef_1 = useRef<null | HTMLElement>(null)
    const inputElRef_2 = useRef<null | HTMLElement>(null)
    const inputElRef_3 = useRef<null | HTMLElement>(null)
    const inputElRef_4 = useRef<null | HTMLElement>(null)

    const inputElRefs = [inputElRef_1, inputElRef_2, inputElRef_3, inputElRef_4]
    
    const navigate = useNavigate() 

    const handleSubmitConfirmCode = (confirmCode: string) => {
        navigate('/profile')
    }

    const onFocusInput = () => {
        setWarning('')
    }   
    
    const handleClipboardEvent = (event: ClipboardEvent<HTMLInputElement>) => {
        const confirmCodeNew = event.clipboardData.getData('text').replace(/[^\d]/g, '').split('', 4)
        event.preventDefault()
        if (confirmCodeNew.length >= 4) {
            setConfirmCode(confirmCodeNew)
        } else {
            setWarning(t['⚠️ Введите последние 4 цифры входящего номера'])
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
                setWarning(t['⚠️ Введите верно, последние 4 цифры входящего номера'])
            } else if (confirmCodeNew.join('')==='1234') {
                setWarning('')
                handleSubmitConfirmCode?.(confirmCodeNew.join(''))
            } 
        } else {
            setWarning(t['⚠️ Введите последние 4 цифры входящего номера'])
        }
    }

    const handleKeyDown = (index: number, event: any) => {
        if (event.key === 'Backspace' && index!==0) {
            setWarning('')
            if (!confirmCode[index]) {            
                inputElRefs[index-1].current!.focus()
            }
        } else if (event.key === 'Enter') {
            onClickButton()
        } 
    }

    return <ConfirmCode i18n={props.i18n}>
        <IconBackLink to={'/auth'} />
        <div className={classes.inputsConfirmCode_block}>
            { confirmCode.map((item: string, index: number) => 
                <input value={item}
                    key={index}
                    ref={inputElRefs[index] as any}
                    type='text'
                    onChange={ event => onChangeInput(index, event)}
                    onKeyDown={ event => handleKeyDown(index, event)}
                    onFocus={onFocusInput}
                    onPaste={handleClipboardEvent} 
                    autoFocus={index===0}
                    className={classes.fieldConfirmCode} 
                    inputMode='numeric' 
                    minLength={1}
                    maxLength={1}
                /> 
            )}
        </div> 
        <div className={classes.warning}> {warning!=='' && warning} </div>
        <div className={classes.button_block}>
            <ButtonAqua onClick={onClickButton}> {t['Войти']} </ButtonAqua>
        </div>
    </ConfirmCode>
}

export default ConfirmCodeContainer