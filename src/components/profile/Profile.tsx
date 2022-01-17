import { useEffect, useState } from "react"
import { IStockProps } from "./Stock"
import StockList from "./StockList"
import UserHeader, { IUserHeaderProps } from "./UserHeader"

const Profile:React.FC = () => {

    const fakeStateUserHeader = {   
        bgImageUrl: 'https://user-images.githubusercontent.com/13190019/149777282-217df2ba-9355-496f-9339-67cbde15e509.png',
        avatarUrl: 'https://user-images.githubusercontent.com/13190019/149777356-c3952ae1-bb28-4d8a-990b-5833993b1c10.png',
        nick: 'НЕВЕРОЯТНЫЙ',
        statusMessage: 'Я есть тот, кто я есть, и это моя судьба',
        expProgressPercent: 70,
        amountRub: 123432100
    }

    const fakeStateStocks = [
        {  
            stockImageUrl: 'https://user-images.githubusercontent.com/13190019/149777451-a80cee7f-fd2f-4dbd-88f1-1e526d7b5871.png',
            name: 'APPLE',
            price: 7000.55,
            count: 150,
            profitPercent: 70,
            profitAmountRub: 2500000,
            portfolioPercent: 70,
            amountRub: 123432100,
            avgPrice: 5000,
            comment: 'великолепная покупка 😁'
        },
        {  
            stockImageUrl: 'https://user-images.githubusercontent.com/13190019/149777451-a80cee7f-fd2f-4dbd-88f1-1e526d7b5871.png',
            name: 'TESLA',
            price: 8000.55,
            count: 800,
            profitPercent: 88,
            profitAmountRub: 8800000,
            portfolioPercent: 80,
            amountRub: 883432155,
            avgPrice: 8888,
            comment: 'отличная покупка 😁'
        },
    ]    

    const [userHeader, setUserHeader] = useState<IUserHeaderProps>(fakeStateUserHeader)

    const [stockList, setStockList] = useState<IStockProps[]>(fakeStateStocks)

    useEffect(() =>{
        setUserHeader(fakeStateUserHeader)
        setStockList(fakeStateStocks)
    }, [])

    return <>
        <UserHeader {...userHeader} />
        <StockList stockList={stockList} />
    </>
}

export default Profile