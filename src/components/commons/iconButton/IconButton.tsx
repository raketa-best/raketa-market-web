import classes from './IconButton.module.css'
import {ReactComponent as IconExit} from '../../../images/icon_exit.svg'
import {ReactComponent as IconBack} from '../../../images/icon_back.svg'
import { Link } from 'react-router-dom'

interface IIconButton {
    onClick?: (event: React.MouseEvent) => void 
    className?: string
    to?: string    
}

interface IIconComponent {
    iconComponent: React.FC<any>    
}

const IconLink: React.FC<IIconButton & IIconComponent> = (props: IIconButton & IIconComponent) => {
        
    const icon = <props.iconComponent onClick={props.onClick} className={props.className} />
    
    if (props.to) {
        return <Link to={props.to} className={classes.activeLink} >
            { icon } 
        </Link>
    } else {
        return icon
    }
}


export const IconBackLink: React.FC<IIconButton> = (props: IIconButton) => {
    return <IconLink iconComponent={IconBack} {...props} className={classes.iconBack} />
}

export const IconExitLink: React.FC<IIconButton> = (props: IIconButton) => {
    return <IconLink iconComponent={IconExit} {...props} className={classes.iconExit} />
}
        