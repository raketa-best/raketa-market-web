import { useState } from "react"
import StockList from "../stock/StockList"
import UserHeader, { IUserHeaderProps } from "./UserHeader"
import classes from './Profile.module.css'
import ConnectTinkoffTokenAlert from "../connectTinkoffTokenAlert/ConnectTinkoffTokenAlert"
import { IStockProps } from "../stock/Stock"
import { IFinRecordProps } from "../finRecordList/FinRecord"
import FinRecordList from "../finRecordList/FinRecordList"

const Profile:React.FC = () => {

    const fakeStateUserHeader = {   
        bgImageUrl: 'https://user-images.githubusercontent.com/13190019/149777282-217df2ba-9355-496f-9339-67cbde15e509.png',
        avatarUrl: 'https://user-images.githubusercontent.com/13190019/149777356-c3952ae1-bb28-4d8a-990b-5833993b1c10.png',
        nick: 'НЕВЕРОЯТНЫЙ - RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR',
        statusMessage: 'Я есть тот, кто я есть, и это моя судьба yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy',
        expProgressPercent: 1900,
        amountRub: 8234700000000000,
        level: 770
    }

    const fakeStateStocks = [
        {  
            stockImageUrl: 'https://user-images.githubusercontent.com/13190019/149777451-a80cee7f-fd2f-4dbd-88f1-1e526d7b5871.png',
            name: 'APPLE-rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr',
            price: 700000000000000770000.5588888888888888888888888888,
            count: 1500000888800000000007770000,
            profitPercent: -144444444477777777777774444.54,
            profitAmountRub: -54367300444444444444400.7650054,
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
            profitPercent: -88,
            profitAmountRub: -8800000,
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
    
    const fakeStateFinRecords = [
        {
          stockImageUrl: "https://user-images.githubusercontent.com/13190019/155142180-55822f89-65ed-4813-992f-b078b60573fe.png",
          name: 'NVIDIA',
          bgImageUrl: "https://user-images.githubusercontent.com/13190019/155142437-c26d9d99-c9da-4ab8-a18f-33959f7d10c7.png",
          profit: 5000000,
          profitPercent: 155,
          comment: "БЕЗУМИЕ!!!!"
        },
        {
          stockImageUrl: "https://user-images.githubusercontent.com/13190019/155142477-155aa3cc-719d-4bc9-aa0c-29479cb11109.png",
          name: 'APPLE-rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr',
          bgImageUrl: "https://user-images.githubusercontent.com/13190019/155142523-763c5f59-73d7-421b-81a4-f74f915452dc.png",
          profit: 150555555555555555555555555555555555555555555555555555550000,
          profitPercent: 4444444444444444444444444444444444444444444444444444444444444444,
          comment: "НЕПЛОХОooooooooooooooooooooooooooooooooooooooooooooooooo 🤔"
        }
    ]

    const [userHeader] = useState<IUserHeaderProps>(fakeStateUserHeader)
    const [tinkoffToken] = useState<string>('')
    const [stockList] = useState<IStockProps[]>(fakeStateStocks)
    const [finRecordList] = useState<IFinRecordProps[]>(fakeStateFinRecords)
          
    return <div className={classes.profile_block}>
        <UserHeader {...userHeader} />
        { (tinkoffToken === '1' && <ConnectTinkoffTokenAlert />)
            || (tinkoffToken === '2' && <StockList stockList={stockList} />)
            || (tinkoffToken === '' && <FinRecordList finRecordList={finRecordList} />) 
        }
    </div> 
}

export default Profile