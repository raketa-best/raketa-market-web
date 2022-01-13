import { Link } from 'react-router-dom'
import classes from './Button.module.css'

interface IButtonProps {
    value?: string 
    onClick?: (event: React.MouseEvent) => void 
    className?: string
    type?: 'submit' | 'reset' | 'button' 
    disabled?: boolean
    to: string
    isActiveLinkButton?: boolean
}

const Button: React.FC<IButtonProps> = (props: IButtonProps) => {

    return <> 
        { props.isActiveLinkButton
            ? <Link to={props.to} className={classes.activeLink} >
                <button onClick={props.onClick} className={props.className} type={props.type || 'button'} disabled={props.disabled}>
                    {props.value  || 'Отправить'}
                </button>
            </Link>
            : <button onClick={props.onClick} className={props.className} type={props.type || 'button'} disabled={props.disabled}>
                {props.value  || 'Отправить'}
            </button>
        }
    </>
}

export default Button


export const ButtonEntry = (props: IButtonProps) => {
    return <Button 
        onClick={props.onClick} 
        type={props.type} 
        to={props.to}
        value={props.value} 
        disabled={props.disabled} 
        className={props.className || classes.buttonEntry} 
        isActiveLinkButton={props.isActiveLinkButton}/>
}

export const ButtonGetCode = (props: IButtonProps) => {
    return <Button 
        onClick={props.onClick} 
        type={props.type} 
        to={props.to} 
        value={props.value} 
        disabled={props.disabled}
        className={props.className || classes.buttonGetCode} 
        isActiveLinkButton={props.isActiveLinkButton}/>
}

