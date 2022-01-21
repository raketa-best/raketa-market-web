import Stock, { IStockProps } from "./Stock"
import classes from './StockList.module.css'

export interface IStockListProps {
    stockList: IStockProps[]    
}

const StockList: React.FC<IStockListProps> = ({stockList}: IStockListProps) => {
    return <div className={classes.stockLict_block}>
        {
            stockList.map((item: IStockProps, index: number) =>         
                <Stock {...item} key={index} />
            )
        }
    </div>
}

export default StockList