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
            <img alt='' src={ props.stockImageUrl} className={classes.stockImageUrl} />
        </div>
        <div className={classes.price_block}>
            <div className={classes.name}>{ props.name }</div>
            <div className={classes.price}>{ `$ ${props.price}` }</div>        
            <div className={classes.profitPercent}>{ `+ ${props.profitPercent}%` }</div>
            <div className={classes.profitAmountRub}>{ `+ ${props.profitAmountRub.toLocaleString('ru')} ₽` }</div>
        </div>
        <div className={classes.progress_block}>
            <div className={classes.count}>{ `${props.count} шт` }</div>
            <ProgressPercent progressPercent={props.portfolioPercent} amount={props.amountRub} unit={'₽'}/>
        </div>
        <div className={classes.avgPrice_block}>
            <div className={classes.avgPrice}>средняя цена</div>
            <div className={classes.avgPrice}>{ `$ ${props.avgPrice}` }</div>
        </div>
        <div className={classes.comment_block}>
            <div className={classes.comment}>{ props.comment }</div>
        </div>
    </div>
}
export default Stock