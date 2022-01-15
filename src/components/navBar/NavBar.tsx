import { ReactComponent as ProfileIcon } from '../../images/icon_profile_active.svg'
import icon_ellipse from '../../images/icon_ellipse.png'
import classes from './NavBar.module.css'
import { Link, useLocation } from 'react-router-dom'

export interface INavBarElementProps {
    to: string
    label?: string
    icon?: React.FC<any>
}

export const NavBarElement: React.FC<INavBarElementProps> = (props: INavBarElementProps) => {
    
    let location = useLocation()
    console.log(location)
    
    return <div className={classes.link_block}>
        <Link to={props.to} className={location.pathname===props.to ? classes.linkActive : classes.link}> 
            { props.icon
                ? <props.icon 
                    className={location.pathname===props.to ? classes.svg_active : classes.svg} />
                : <div>{props.label}</div>
            } 
        </Link>
        {location.pathname===props.to && 
            <img alt='' src={icon_ellipse} className={classes.icon_ellipse}/>
        }
    </div>
}

const NavBar: React.FC = () => {

    return <div className={classes.navBar_block}>
        <NavBarElement to={'/home'} label={'Домой'}/>
        <NavBarElement to={'/news'} label={'Новости'}/>
        <NavBarElement to={'/chat'} label={'Чат'}/>
        <NavBarElement to={'/profile'} icon={ProfileIcon} />
    </div>
}

export default NavBar