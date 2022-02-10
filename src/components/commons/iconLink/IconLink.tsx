import classes from './IconLink.module.css'
import {ReactComponent as IconExit} from '../../../images/icon_exit.svg'
import {ReactComponent as IconBack} from '../../../images/icon_back.svg'
import { Link } from 'react-router-dom'

interface IIconLink {
    onClick?: (event: React.MouseEvent) => void 
    className?: string
    to?: string    
}

interface ITegIcon {
    tegIcon: React.FC<any>    
}

const IconLink: React.FC<IIconLink & ITegIcon> = (props: IIconLink & ITegIcon) => {
        
    const icon = <props.tegIcon onClick={props.onClick} className={props.className} />
    
    if (props.to) {
        return <Link to={props.to} className={classes.activeLink} >
            { icon } 
        </Link>
    } else {
        return icon
    }
}


export const IconBackLink: React.FC<IIconLink> = (props: IIconLink) => {
    return <IconLink tegIcon={IconBack} {...props} className={classes.iconBack} />
}

export const IconExitLink: React.FC<IIconLink> = (props: IIconLink) => {
    return <IconLink tegIcon={IconExit} {...props} className={classes.iconExit} />
}
        