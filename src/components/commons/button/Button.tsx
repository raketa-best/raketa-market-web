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

    const button = <button onClick={props.onClick} 
                        className={props.className} 
                        type={props.type || 'button'} 
                        disabled={props.disabled}
                        style={props.style}
                    > 
                        { props.children }  
                                             
                    </button>

    return <> 
        { props.isActiveLinkButton

            ? <Link to={props.to} className={classes.activeLink} >
                { button } 
              </Link>

            : button 
        }
    </>
}

export default Button


export const ButtonAqua = (props: IButtonProps) => {
    return <Button  {...props}
        className={`${classes.button} ${classes.buttonAqua} ${props.className}`} 
    />
}

export const ButtonPink = (props: IButtonProps) => {
    return <Button {...props}        
        className={`${classes.button} ${classes.buttonPink} ${props.className}`}
    />
}

export const ButtonPinkLarge = (props: IButtonProps) => {
    return <Button {...props}        
        className={`${classes.button} ${classes.buttonPink} ${classes.buttonPinkLarge} ${props.className}`}
    />
}

