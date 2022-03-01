import icon_ellipse from '../../images/icon_ellipse.svg'
import classes from './MenuProfile.module.css'
import { NavLink, useLocation } from 'react-router-dom'

export interface IMenuProfileElementProps {
    to: string
    label?: string
    icon?: React.FC<any>
}

export const MenuProfileElement: React.FC<IMenuProfileElementProps> = (props: IMenuProfileElementProps) => {
    
    let location = useLocation()
    
    return <div className={classes.link_block}>
        <NavLink to={props.to} className={({isActive}) => isActive ? classes.linkActive : classes.link}> 
            { props.icon
                ? <props.icon 
                    className={location.pathname===props.to ? classes.svg_active : classes.svg} />
                : <div>{props.label}</div>
            } 
        </NavLink>
        {location.pathname===props.to && 
            <img alt='' src={icon_ellipse} className={classes.icon_ellipse}/>
        }
    </div>
}

const MenuProfile: React.FC = () => {

    return <div className={classes.menuProfile_block}>
        <MenuProfileElement to={'/portfolio'} label={'Портфель'}/>
        <MenuProfileElement to={'/pecords'} label={'Рекорды'}/>
        <MenuProfileElement to={'/token'} label={'Токен'}/>
    </div>
}

export default MenuProfile