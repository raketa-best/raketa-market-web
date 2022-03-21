import FormatProfitNumber from '../formatProfitNumber/FormatProfitNumber'
import classes from './AskDonations.module.css'
import style from './Emotions.module.css'
import Emotions from './Emotions'

export interface IAskDonationsProps {    
    id: number
    userName: string
    avaUrl: string
    dateTime: string
    donationRub: number
    message: string
    emotions: {
        emotion: string
        count: number
    }[]
} 


export const AskDonations: React.FC<IAskDonationsProps> = (props: IAskDonationsProps) => {
    return <div className={classes.ask_block}>            
        <div className={classes.avaUrl_userName_profit}>
            <div className={classes.avaUrl_block}>
                <img alt='' src={props.avaUrl} className={classes.avaUrl} />
            </div> 
            <div className={classes.userName_block}>
                <div className={classes.userName}>{props.userName}</div>    
            </div>
            <div className={classes.profit_block}>
                <FormatProfitNumber profitNumber={props.donationRub} label={'₽'} className={classes.profit} classNameBlock={classes.donationRub_block}/>
            </div> 
        </div>
        <div className={classes.message_block}>
            <div className={classes.message}>{props.message}</div>
        </div>
        <div className={classes.emotions_dateTime}>
            <div className={style.emotions_block}>
                <Emotions emotions={props.emotions} id={props.id}/>
            </div>
            <div className={classes.dateTime_block}>
                <div className={classes.dateTime}>{props.dateTime}</div>
            </div>
        </div> 
    </div>        
}
export default AskDonations