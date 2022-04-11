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
    const [prevPathname, setPrevPathname] = useState<string>('')
    
    const componentRef = useRef<HTMLDivElement>(null)

    const location = useLocation();
    const pathname = location.pathname
               
    const handleScroll = () => {        
        let scrolling = window.scrollY
        if (props.userHeaderHeight && scrolling >= props.userHeaderHeight) {
            setClassNameChildren(props.classNameScroll)
            setStyleScroll(classes.scroll)                
        } else {
            setClassNameChildren('')
            setStyleScroll('')
        }
    }

    useEffect(() => {    
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    })   
    
    if (prevPathname !== pathname) {
        if (componentRef.current) {
            componentRef.current.scrollTop = 0 
        }        
        setPrevPathname(pathname)
        handleScroll()
    }

    return <div ref={componentRef} className={`${classes.handleScroll} ${classNameChildren} ${styleScroll}`}>
        {props.children}
    </div>
}

export default HandleScroll