import { I18n } from '../../i18n/i18n'
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
    </div>
}

const MenuProfile: React.FC<{i18n: I18n}> = (props) => {

    const t = props.i18n

    return <div className={classes.menuProfile_block}>
        <MenuProfileElement to={'/donations'} label={t['Донаты']}/>
        <MenuProfileElement to={'/portfolio'} label={t['Портфель']}/>
        <MenuProfileElement to={'/pecords'} label={t['Рекорды']}/>
        <MenuProfileElement to={'/token'} label={t['Токен']}/>
    </div>
}

export default MenuProfile