import { useEffect, useState } from 'react'
import classes from './HandleFixedPos.module.css'

export interface IHandleFixedPosProps { 
    children: React.ReactElement<any>
    classNameFixedPos: string
    userHeaderHeight: number | null
}


const HandleFixedPos: React.FC<IHandleFixedPosProps> = (props: IHandleFixedPosProps) => {

    const [classNameChildren, setClassNameChildren] = useState<string>('')
    const [styleFixedPos, setStyleFixedPos] = useState<string>('') 

    const handleFixedPos = () => {        
        let scrollTop = window.scrollY
        if (props.userHeaderHeight && scrollTop >= props.userHeaderHeight) {
            if (props.classNameFixedPos && props.userHeaderHeight === 300) {
                setClassNameChildren(props.classNameFixedPos)
                setStyleFixedPos(classes.fixed_pos_300)
            } else if (props.classNameFixedPos && props.userHeaderHeight === 220) {
                setClassNameChildren(props.classNameFixedPos)
                setStyleFixedPos(classes.fixed_pos_220)
            } 
        } else {
            setClassNameChildren('')
            setStyleFixedPos('')
        }
    }    

    useEffect(() => {
        handleFixedPos()
    }, [props.userHeaderHeight])

    window.addEventListener('scroll', () => {        
        handleFixedPos()
    }) 

    return <div className={`${classes.handleFixedPos} ${classNameChildren} ${styleFixedPos}`}>
        {props.children}
    </div>
}

export default HandleFixedPos