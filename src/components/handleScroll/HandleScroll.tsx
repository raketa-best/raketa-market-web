import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import classes from './HandleScroll.module.css'

export interface IHandleScrollProps { 
    children: React.ReactElement<any>
    classNameFixedPos?: string
    classNameScroll?: string
    userHeaderHeight: number | null
}

const HandleScroll: React.FC<IHandleScrollProps> = (props: IHandleScrollProps) => {

    const [classNameChildren, setClassNameChildren] = useState<string>('')
    const [styleFixedPos, setStyleFixedPos] = useState<string>('') 
    const [classNameChildrenScroll, setClassNameChildrenScroll] = useState<string>('')    
    
    console.log('classNameChildren', classNameChildren)
    console.log('styleFixedPos', styleFixedPos)
    console.log('classNameChildrenScroll', classNameChildrenScroll)

    const location = useLocation();
    const pathname = location.pathname

    useEffect(() => {        
        if (window.scrollY) {
            window.scroll(0, 0)
            setClassNameChildren('')
            setStyleFixedPos('')
            setClassNameChildrenScroll('')
        }
    }, [pathname])
        
    const handleScroll = () => {        
        let scrollTop = window.scrollY
        console.log('scrollTop', scrollTop)
        if (props.userHeaderHeight && scrollTop >= props.userHeaderHeight) {
            if (props.classNameFixedPos && props.userHeaderHeight === 300) {
                setClassNameChildren(props.classNameFixedPos)
                setStyleFixedPos(classes.fixed_pos_300)
            } else if (props.classNameFixedPos && props.userHeaderHeight === 220) {
                setClassNameChildren(props.classNameFixedPos)
                setStyleFixedPos(classes.fixed_pos_220)
            } else if (props.classNameScroll) {
                setClassNameChildrenScroll(props.classNameScroll)
            } 
        } else {
            setClassNameChildren('')
            setStyleFixedPos('')
        }
    }
    
    window.addEventListener('scroll', () => {        
        handleScroll()
    })

    return<div className={`${classes.handleScroll} ${classNameChildren} ${styleFixedPos} ${classNameChildrenScroll}`}>
        {props.children}
    </div>
}

export default HandleScroll