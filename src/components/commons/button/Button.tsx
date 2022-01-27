import { Link } from 'react-router-dom'
import classes from './Button.module.css'

interface IButtonProps {
    onClick?: (event: React.MouseEvent) => void 
    className?: string
    type?: 'submit' | 'reset' | 'button' 
    disabled?: boolean
    to: string
    isActiveLinkButton?: boolean
    style?: {}
    children?: any
}

const Button: React.FC<IButtonProps> = (props: IButtonProps) => {

    return <> 
        { props.isActiveLinkButton
            ? <Link to={props.to} className={classes.activeLink} >
                <button onClick={props.onClick} 
                    className={props.className} 
                    type={props.type || 'button'} 
                    disabled={props.disabled}
                    style={props.style}
                > 
                    { props.children }                       
                </button>
            </Link>
            : <button onClick={props.onClick} 
                className={props.className} 
                type={props.type || 'button'} 
                disabled={props.disabled}
                style={props.style}
            >  
                { props.children }   
            </button>
        }
    </>
}

export default Button


export const ButtonAqua = (props: IButtonProps) => {
    return <Button 
        onClick={props.onClick} 
        type={props.type} 
        to={props.to}
        disabled={props.disabled} 
        className={props.className || classes.buttonAqua} 
        isActiveLinkButton={props.isActiveLinkButton}
        style={props.style}
        children={props.children}
    />
}

export const ButtonPink = (props: IButtonProps) => {
    return <Button 
        onClick={props.onClick} 
        type={props.type} 
        to={props.to} 
        disabled={props.disabled}
        className={props.className || classes.buttonPink} 
        isActiveLinkButton={props.isActiveLinkButton}
        style={props.style}
        children={props.children}
    />
}

