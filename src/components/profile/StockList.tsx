import Stock, { IStockProps } from "./Stock"
import classes from './StockList.module.css'

export interface IStockList {
    stockList: IStockProps[] 
}

const StockList: React.FC<IStockList> = ({stockList}: IStockList) => {
    return <div className={classes.stockLict_block}>
        {
            stockList.map((item: IStockProps, index: number) =>         
                <Stock {...item} key={index}/>
            )
        }
    </div>
}

export default StockList