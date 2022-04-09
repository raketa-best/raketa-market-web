import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import classes from './HandleScroll.module.css'

export interface IHandleScrollProps { 
    children: React.ReactElement<any>
    classNameScroll: string
    userHeaderHeight: number | null
}

const HandleScroll: React.FC<IHandleScrollProps> = (props: IHandleScrollProps) => {

    const [classNameChildren, setClassNameChildren] = useState<string>('')
    const [styleScroll, setStyleScroll] = useState<string>('')  
    const [componentScrollTop, setComponentScrollTop] = useState<number>(0)  
    
    const componentRef = useRef<HTMLDivElement>(null)

    const location = useLocation();
    const pathname = location.pathname

    useEffect(() => {        
        if (componentScrollTop > 0 && componentRef.current) {
            componentRef.current.scrollTop = 0 
        }
    }, [pathname])
        
    const handleScroll = () => {        
        let scrollTop = window.scrollY
        if (props.userHeaderHeight && scrollTop >= props.userHeaderHeight) {
            setClassNameChildren(props.classNameScroll)
            setStyleScroll(classes.scroll)
        } else {
            setClassNameChildren('')
            setStyleScroll('')
        }
    }
    
    window.addEventListener('scroll', () => {        
        handleScroll()
    })    

    const handleComponentScroll = (event: any) => {
        setComponentScrollTop(event.target.scrollTop)
    }

    return <div onScroll={handleComponentScroll} ref={componentRef} 
        className={`${classes.handleScroll} ${classNameChildren} ${styleScroll}`}>
            {props.children}
    </div>
}

export default HandleScroll