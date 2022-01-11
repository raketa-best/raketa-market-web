import { Link } from 'react-router-dom'
import classes from './ButtonsAll.module.css'

interface IButtonsAllProps {
    value?: string 
    onClick?: (event: React.MouseEvent) => void 
    className?: string
    type?: 'submit' | 'reset' | 'button' 
    disabled?: boolean
    to: string
    isActiveLinkButton?: boolean
}

const ButtonsAll: React.FC<IButtonsAllProps> = (props: IButtonsAllProps) => {

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

export default ButtonsAll


export const ButtonAqua = (props: IButtonsAllProps) => {
    return <ButtonsAll 
        onClick={props.onClick} 
        type={props.type} 
        to={props.to}
        value={props.value} 
        disabled={props.disabled} 
        className={classes.buttonAqua} 
        isActiveLinkButton={props.isActiveLinkButton}/>
}

export const ButtonPink = (props: IButtonsAllProps) => {
    return <ButtonsAll 
        onClick={props.onClick} 
        type={props.type} 
        to={props.to} 
        value={props.value} 
        disabled={props.disabled}
        className={classes.buttonPink} 
        isActiveLinkButton={props.isActiveLinkButton}/>
}

