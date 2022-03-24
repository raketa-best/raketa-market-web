import { useEffect, useState } from 'react'
import NavBar from '../navBar/NavBar'
import classes from './Layout.module.css'

export interface ILayoutProps { 
    component: React.ReactElement<any>
}

const Layout: React.FC<ILayoutProps> = (props: ILayoutProps) => {

    const [styleFixed, setStyleFixed] = useState<string>('')
    console.log('styleFixed', styleFixed)

    useEffect(() => {
        setStyleFixed('')
        window.scroll(0, 0)
    }, [])
    
    const layoutFixedPos = () => {
        let scrollTop = window.scrollY
        console.log('scrollTop', scrollTop)
        if (scrollTop >= 300) {
            setStyleFixed(classes.layout_fixed_pos)
        } else {
            setStyleFixed('')
        }
    }

    window.addEventListener('scroll', () => {
        layoutFixedPos()
    }) 

    return <div className={classes.layout_block}>
        <div className={`${classes.layout} ${styleFixed}`}>
            <div className={classes.component}>
                {props.component}
            </div>
            <div className={classes.nav_bar}>
                <NavBar />
            </div>
        </div>
    </div>        
}

export default Layout