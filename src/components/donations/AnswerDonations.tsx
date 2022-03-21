import classes from './AnswerDonations.module.css'
import style from './Emotions.module.css'
import Emotions from './Emotions'

export interface IAnswerDonationsProps {
    id: number
    avaUrl: string
    message: string
    dateTime: string
    emotions: {
        emotion: string
        count: number
    }[]
}


export const AnswerDonations: React.FC<IAnswerDonationsProps> = (props: IAnswerDonationsProps) => {
    return <div className={classes.answer_block}> 
        <div className={classes.avaUrl_message_answer}>
            <div className={classes.avaUrl_answer_block}>
                <img alt='' src={props.avaUrl} className={classes.avaUrl} />
            </div> 
            <div className={classes.message_answer_block}>
                <div className={classes.message}>{props.message}</div>
            </div>
        </div>
        <div className={classes.emotions_dateTime}>
            <div className={style.emotions_answer_block}>
                <Emotions emotions={props.emotions} id={props.id}/>
            </div>
            <div className={classes.dateTime_block}>
                <div className={classes.dateTime}>{props.dateTime}</div>
            </div>
        </div> 
    </div>      
}
export default AnswerDonations