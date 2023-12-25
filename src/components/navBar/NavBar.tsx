import { ReactComponent as ProfileIcon } from '../../images/icon_profile_active.svg'
import icon_ellipse from '../../images/icon_ellipse.svg'
import classes from './NavBar.module.css'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { I18n } from '../../i18n/i18n'

export interface INavBarElementProps {
    to: string
    label?: string
    icon?: React.FC<any>
}

export const NavBarElement: React.FC<INavBarElementProps> = (props: INavBarElementProps) => {
    
    let location = useLocation()
    
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

const NavBar: React.FC<{i18n: I18n}> = (props) => {

    const t = props.i18n

    return <div className={classes.navBar_block}>
        <NavBarElement to={'/home'} label={t['Домой']}/>
        <NavBarElement to={'/news'} label={t['Новости']}/>
        <NavBarElement to={'/chat'} label={t['Чат']}/>
        <NavBarElement to={'/profile'} icon={ProfileIcon} />
    </div>
}

export default NavBar