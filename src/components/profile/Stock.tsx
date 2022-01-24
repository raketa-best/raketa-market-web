import { numberShorter } from '../../utils/utils'
import FormatProfitNumber from '../commons/formatProfitNumber/FormatProfitNumber'
import ProgressPercent from './ProgressPercent'
import classes from './Stock.module.css'

export interface IStockProps {
    stockImageUrl: string
    name: string
    price: number
    count: number
    profitPercent: number
    profitAmountRub: number
    portfolioPercent: number
    amountRub: number
    avgPrice: number
    comment: string    
}

export const Stock: React.FC<IStockProps> = (props: IStockProps) => {
    return <div className={classes.stock_block}>
        <div className={classes.image_block}>
            <div>
                <img alt='' src={ props.stockImageUrl} className={classes.stockImageUrl} />
            </div> 
            <div className={classes.count_block}>
                <div className={classes.count}>{ `${ (props.count).toFixed(1) }` }</div>
                <div>шт</div>
            </div>
        </div>
        <div className={classes.price_block}>
            <div className={classes.name}>{ props.name }</div>
            <div className={classes.price}>{ `$ ${(props.price).toFixed(2)}` }</div> 
            <div className={classes.profitPercent_block}>
                <FormatProfitNumber profitNumber={props.profitPercent} label={'%'} />
            </div> 
            <div className={classes.profitAmountRub_block}>
                <FormatProfitNumber profitNumber={props.profitAmountRub} label={'₽'} />
            </div>   
        </div>
        <div className={classes.progress_block}>            
            <ProgressPercent progressPercent={props.portfolioPercent} label={`₽ ${numberShorter(props.amountRub)}`}/>
        </div>
        <div className={classes.avgPrice_block}>
            <div className={classes.avgPrice}>средняя цена</div>
            <div className={classes.avgPrice}>{ `$ ${(props.avgPrice).toFixed(2)}` }</div>
        </div>
        <div className={classes.comment_block}>
            <div className={classes.comment}>{ props.comment }</div>
        </div>
    </div>
}
export default Stock