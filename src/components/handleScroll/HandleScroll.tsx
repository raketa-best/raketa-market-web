import { useEffect, useState } from 'react'
import classes from './HandleScroll.module.css'

export interface IHandleScrollProps { 
    children: React.ReactElement<any>
    className: string
}

const HandleScroll: React.FC<IHandleScrollProps> = (props: IHandleScrollProps) => {

    const [styleScroll, setStyleScroll] = useState<string>('')
    console.log('styleScroll', styleScroll)

    const handleScroll = () => {
        let scrollTop = window.scrollY
        console.log('scrollTop', scrollTop)
        if (scrollTop >= 300) {
            setStyleScroll(props.className)
        } else {
            setStyleScroll('')
        }
    }

    useEffect(() => {        
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    return<div className={`${classes.handleScroll} ${styleScroll}`}>
        {props.children}
    </div>
}

export default HandleScroll