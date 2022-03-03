import ProgressPercent from '../progressPercent/ProgressPercent'
import classes from './UserHeader.module.css'

export interface IUserHeaderProps {
    bgImageUrl: string
    avatarUrl: string
    nick: string
    statusMessage: string
    expProgressPercent: number
    amountRub: number
    level: number
}

const UserHeader: React.FC<IUserHeaderProps> = (props: IUserHeaderProps) => {
    return <div className={classes.userHeader_block}>
        <div style={ {backgroundImage: `url(${props.bgImageUrl})`} } 
            className={classes.bgImageUrl}>     
        </div>
        <img alt='' src={props.avatarUrl} className={classes.avatarUrl}/>
        <div className={classes.progress_block}>
            <ProgressPercent progressPercent={props.expProgressPercent} label={`LEVEL ${props.level}`}/>          
            <div className={classes.amountRub_block}>
                <div className={classes.text_portfolio}>Портфель</div>
                <div className={classes.amountRub}>                    
                    {`${props.amountRub.toLocaleString()}`}
                </div> 
                <div className={classes.text_amountRub}>₽</div>               
            </div>
        </div>        
        <div className={classes.nick}>{props.nick}</div>
        <div className={classes.statusMessage}>{props.statusMessage}</div>
    </div>
}

export default UserHeader



