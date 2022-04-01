import { Ref } from 'react'
import { numberCategorize } from '../../utils/utils'
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

interface IuserHeaderRefProps {
    userHeaderRef: Ref<any>
}

const UserHeader: React.FC<IUserHeaderProps & IuserHeaderRefProps> = (props: IUserHeaderProps & IuserHeaderRefProps) => {
    return <div ref={props.userHeaderRef} className={classes.userHeader_block}>
        <div style={ {backgroundImage: `url(${props.bgImageUrl})`} } 
            className={classes.bgImageUrl}>     
        </div>
        <div className={classes.avatarUrl_progress}>
            <img alt='' src={props.avatarUrl} className={classes.avatarUrl}/>
            <div className={classes.progress_block}>
                <ProgressPercent progressPercent={props.expProgressPercent} label={`LEVEL ${props.level}`}/>          
                <div className={classes.amountRub_block}>
                    <div className={classes.text_portfolio}>Портфель</div>
                    <div className={classes.amountRub}>                    
                        {numberCategorize(props.amountRub)}
                    </div> 
                    <div className={classes.text_amountRub}>₽</div>               
                </div>
            </div> 
        </div> 
        <div className={classes.nick_statusMessage}>
            <div className={classes.nick}>{props.nick}</div>
            <div className={classes.statusMessage}>{props.statusMessage}</div>
        </div>
    </div>
}

export default UserHeader



