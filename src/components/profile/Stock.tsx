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
        <div><img alt='' src={ props.stockImageUrl } /></div>
        <div>{ props.name }</div>
        <div>{ props.price }</div>
        <div>{ props.count }</div>
        <div>{ props.profitPercent }</div>
        <div>{ props.profitAmountRub }</div>
        <div>{ props.portfolioPercent }</div>
        <div>{ props.amountRub }</div>
        <div>{ props.avgPrice }</div>
        <div>{ props.comment }</div>
    </div>
}
export default Stock