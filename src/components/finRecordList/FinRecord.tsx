import FormatProfitNumber from '../formatProfitNumber/FormatProfitNumber'
import classes from './FinRecord.module.css'
import {ReactComponent as IconHeartFill} from '../../images/icon_heart_fill.svg'

export interface IFinRecordProps {
    stockImageUrl: string
    name: string
    bgImageUrl: string
    profitPercent: number
    profit: number    
    comment: string    
}

export const FinRecord: React.FC<IFinRecordProps> = (props: IFinRecordProps) => {
    return <div className={classes.finRecord_block} style={{backgroundImage: `url(${props.bgImageUrl})`}}>
        <div className={classes.image_block}>
            <img alt='' src={props.stockImageUrl} className={classes.imageUrl} />
        </div>
        <div className={classes.price_block}>
            <div className={classes.name_block}>
                <div className={classes.name}>{props.name}</div>    
            </div> 
            <div className={classes.profit_block}>
                <FormatProfitNumber profitNumber={props.profit} label={'₽'} className={classes.profit} classNameBlock={classes.profitNumber_block}/>
            </div> 
            <div className={classes.profitPercent_block}>
                <FormatProfitNumber profitNumber={props.profitPercent} label={'%'} className={classes.profitPercent} classNameBlock={classes.profitNumber_block}/>
            </div>   
        </div>     
        <div className={classes.comment_block}>
            <div className={classes.comment}>{props.comment}</div>
        </div>
        <div className={classes.like_block}>
            <IconHeartFill className={classes.like} />
        </div>
    </div>
}
export default FinRecord