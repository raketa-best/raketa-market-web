import Stock, { IStockProps } from "./Stock"

export interface IStockList {
    stockList: IStockProps[] 
}

const StockList: React.FC<IStockList> = ({stockList}: IStockList) => {
    return <>
        {
            stockList.map((item: IStockProps, index: number) =>         
                <Stock {...item} key={index}/>
            )
        }
    </>
}

export default StockList