import Stock, { IStockProps } from "./Stock"
import { useState } from "react"

const fakeStateStocks = [
    {  
        stockImageUrl: 'https://user-images.githubusercontent.com/13190019/149777451-a80cee7f-fd2f-4dbd-88f1-1e526d7b5871.png',
        name: 'APPLE-rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr',
        price: 700000000000000770000.5588888888888888888888888888,
        count: 1500000888800000000007770000,
        profitPercent: 144444444477777777777774444.54,
        profitAmountRub: 54367300444444444444400.7650054,
        portfolioPercent: 70,
        amountRub: 12389910000000000007770000000000000,
        avgPrice: 75000088888888800000000007700.00,
        comment: 'великолепная покуooooooooooooooooooooпка ggggggggggggggggg 😃'
    },
    {  
        stockImageUrl: 'https://user-images.githubusercontent.com/13190019/149777645-7b1c0e31-1afa-4372-b47b-c6b43959af5a.png',
        name: 'TESLA',
        price: 8000.55,
        count: 800,
        profitPercent: -18,
        profitAmountRub: -18000,
        portfolioPercent: 100,
        amountRub: 105555555,
        avgPrice: 8008.22,
        comment: 'отличная покупка 😃'
    },
    {  
        stockImageUrl: 'https://user-images.githubusercontent.com/13190019/149777739-4c51ac07-c185-46a3-86db-19713aadbd4f.png',
        name: 'OXY',
        price: 1000.10,
        count: 1000,
        profitPercent: 0,
        profitAmountRub: 0,
        portfolioPercent: 70,
        amountRub: 93000000,
        avgPrice: 1111.11,
        comment: 'супер сделка 👍'
    },
    {  
        stockImageUrl: 'https://user-images.githubusercontent.com/13190019/149777501-fdeadd47-6566-4c3b-b9a6-3f231093360a.png',
        name: 'moderna',
        price: 500.10,
        count: 500,
        profitPercent: 551,
        profitAmountRub: 5000000,
        portfolioPercent: 50,
        amountRub: 432000,
        avgPrice: 511.11,
        comment: 'хорошая сделка 😉'
    },
    {  
        stockImageUrl: 'https://user-images.githubusercontent.com/13190019/149777451-a80cee7f-fd2f-4dbd-88f1-1e526d7b5871.png',
        name: 'APPLE-rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr',
        price: 700000000000000770000.5588888888888888888888888888,
        count: 1500000888800000000007770000,
        profitPercent: 144444444477777777777774444.54,
        profitAmountRub: 54367300444444444444400.7650054,
        portfolioPercent: 70,
        amountRub: 12389910000000000007770000000000000,
        avgPrice: 75000088888888800000000007700.00,
        comment: 'великолепная покуooooooooooooooooooooпка ggggggggggggggggg 😃'
    },
    {  
        stockImageUrl: 'https://user-images.githubusercontent.com/13190019/149777645-7b1c0e31-1afa-4372-b47b-c6b43959af5a.png',
        name: 'TESLA',
        price: 8000.55,
        count: 800,
        profitPercent: -18,
        profitAmountRub: -18000,
        portfolioPercent: 100,
        amountRub: 105555555,
        avgPrice: 8008.22,
        comment: 'отличная покупка 😃'
    },
    {  
        stockImageUrl: 'https://user-images.githubusercontent.com/13190019/149777739-4c51ac07-c185-46a3-86db-19713aadbd4f.png',
        name: 'OXY',
        price: 1000.10,
        count: 1000,
        profitPercent: 0,
        profitAmountRub: 0,
        portfolioPercent: 70,
        amountRub: 93000000,
        avgPrice: 1111.11,
        comment: 'супер сделка 👍'
    },
    {  
        stockImageUrl: 'https://user-images.githubusercontent.com/13190019/149777501-fdeadd47-6566-4c3b-b9a6-3f231093360a.png',
        name: 'moderna',
        price: 500.10,
        count: 500,
        profitPercent: 551,
        profitAmountRub: 5000000,
        portfolioPercent: 50,
        amountRub: 432000,
        avgPrice: 511.11,
        comment: 'хорошая сделка 😉'
    },
]  

const StockList: React.FC = () => {

    const [stockList] = useState<IStockProps[]>(fakeStateStocks)
    
    return <>
        {
            stockList.map((item: IStockProps, index: number) =>         
                <Stock {...item} key={index} />
            )
        }
    </>
}

export default StockList