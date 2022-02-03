import classes from './InputConfirmCode.module.css'
import {useEffect, useRef, useState } from "react"

export interface IInputConfirmCodeProps { 

    isDisableButtonOnClick?: (is: boolean) => void
    handleSubmitConfirmCode?: (confirmCode: string) => void
}

export const InputConfirmCode: React.FC<IInputConfirmCodeProps> = (props: IInputConfirmCodeProps) => {

    const [confirmCode, setConfirmCode] = useState<string[]>( new Array(4).fill('') )
    const [warning, setWarning] = useState<string>('')

    const inputElRef_1 = useRef<null | HTMLElement>(null)
    const inputElRef_2 = useRef<null | HTMLElement>(null)
    const inputElRef_3 = useRef<null | HTMLElement>(null)
    const inputElRef_4 = useRef<null | HTMLElement>(null)

    const inputElRefs = [inputElRef_1, inputElRef_2, inputElRef_3, inputElRef_4]
    
    console.log('confirmCode', confirmCode)
    console.log('confirmCode[3]', confirmCode[3])
    console.log('confirmCode.join("")', confirmCode.join(''))
    console.log('inputElRefs', inputElRefs)

    useEffect(() => {
        inputElRefs[0].current!.focus()
        props.isDisableButtonOnClick?.(true)
    }, [])

    
    const handleKeyDown = (index: number, event: any) => {
        if (event.key === 'Backspace' && index!==0) {
          if (confirmCode[index]==='') {
            inputElRefs[index-1].current!.focus()
          }
        }
    }
    
    const onChangeInput = (index: number, event: any) => {
        const confirmCodeNew = [...confirmCode]
        confirmCodeNew[index] = event.target.value.replace(/[^\d]/g, '')
        console.log('confirmCodeNew[index]', confirmCodeNew[index])
        console.log('confirmCodeNew', confirmCodeNew)
        setConfirmCode(confirmCodeNew)
        if ( index < 3 ) {
            if (event.target.value.replace(/[^\d]/g, '')!==''
                && event.target.value.replace(/[^\d]/g, '')!==undefined ) {
                    inputElRefs[index+1].current!.focus()
            } 
        } else if (confirmCodeNew[3]!=='') {
            if (confirmCodeNew.join('')!=='1234') {
                props.isDisableButtonOnClick?.(true)
                inputElRefs[index].current!.blur()
                setConfirmCode( new Array(4).fill('') )
                inputElRefs[0].current!.focus()
                setWarning('! ОШИБКА. Введите верно последние 4 цифры входящего номера')
            } else if (confirmCodeNew.join('')==='1234') {
                setWarning('')
                props.isDisableButtonOnClick?.(false)
                props.handleSubmitConfirmCode?.(confirmCodeNew.join(''))
                inputElRefs[index].current!.blur()
            } 
        } 
    }

    return <div>
        <div className={classes.inputsConfirmCode_block}>
            { confirmCode.map((item: string, index: number) => 
                <input value={item} 
                    placeholder='_' 
                    key={index}
                    ref={inputElRefs[index] as any}
                    type='text'
                    onChange={ event => onChangeInput(index, event)}
                    onKeyDown={ event => handleKeyDown(index, event)}
                    className={classes.fieldConfirmCode} 
                    inputMode='numeric' 
                    minLength={1}
                    maxLength={1}
                /> 
            )}
        </div> 
        <div className={classes.warning}> {warning!=='' && warning} </div>
    </div>
}